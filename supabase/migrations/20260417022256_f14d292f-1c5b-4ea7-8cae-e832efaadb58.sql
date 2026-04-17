-- Drop insecure admin_users table and its policies
DROP TABLE IF EXISTS public.admin_users CASCADE;

-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- SECURITY DEFINER function to check roles without recursive RLS
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS for user_roles: users can see their own roles; admins can see all
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Replace insecure app_settings policies
DROP POLICY IF EXISTS "Settings are insertable by admins only" ON public.app_settings;
DROP POLICY IF EXISTS "Settings are updatable by admins only" ON public.app_settings;
DROP POLICY IF EXISTS "Settings are readable by everyone" ON public.app_settings;

-- Public can read settings (needed for the landing page)
CREATE POLICY "Settings are readable by everyone"
ON public.app_settings
FOR SELECT
USING (true);

-- Only admins (verified via auth.uid() + user_roles) can write
CREATE POLICY "Only admins can insert settings"
ON public.app_settings
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update settings"
ON public.app_settings
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete settings"
ON public.app_settings
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Fix updated_by FK: it referenced admin_users which is now dropped.
-- Repoint to auth.users so admin actions can be audited by uid.
ALTER TABLE public.app_settings
  ALTER COLUMN updated_by DROP DEFAULT;
-- (no FK to recreate; auth.users FK is unnecessary and we avoid coupling)