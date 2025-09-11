-- Create admin users table
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create settings table for admin configurations
CREATE TABLE public.app_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_by UUID REFERENCES public.admin_users(id)
);

-- Enable Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for admin_users (only readable by themselves)
CREATE POLICY "Admin users can view their own data" 
ON public.admin_users 
FOR SELECT 
USING (email = current_setting('app.current_user_email', true));

-- Create policies for app_settings (readable by all, updatable by admins only)
CREATE POLICY "Settings are readable by everyone" 
ON public.app_settings 
FOR SELECT 
USING (true);

CREATE POLICY "Settings are updatable by admins only" 
ON public.app_settings 
FOR UPDATE 
USING (EXISTS(
  SELECT 1 FROM public.admin_users 
  WHERE email = current_setting('app.current_user_email', true)
));

CREATE POLICY "Settings are insertable by admins only" 
ON public.app_settings 
FOR INSERT 
WITH CHECK (EXISTS(
  SELECT 1 FROM public.admin_users 
  WHERE email = current_setting('app.current_user_email', true)
));

-- Insert default admin user (password will be hashed in the app)
INSERT INTO public.admin_users (email, password_hash) 
VALUES ('suporte@quantumplay.com', 'temp_hash_to_be_replaced');

-- Insert default settings
INSERT INTO public.app_settings (key, value) VALUES 
('whatsapp_number', '5521935009521'),
('monthly_price', '29.90'),
('quarterly_price', '79.90'),
('annual_price', '299.90'),
('trial_hours', '4'),
('promotion_active', 'false'),
('promotion_discount', '0'),
('promotion_text', '');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_settings_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_app_settings_updated_at
  BEFORE UPDATE ON public.app_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_settings_updated_at_column();