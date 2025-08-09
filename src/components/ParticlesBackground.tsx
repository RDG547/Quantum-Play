import { useEffect, useRef } from 'react';

// Lightweight fire-like particles background using Canvas
// Globally rendered behind all content (fixed, pointer-events:none)
const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number; // 0..1
      flicker: number;
    };

    const particles: Particle[] = [];
    const maxParticles = 120;

    const css = getComputedStyle(document.documentElement);
    const warning = css.getPropertyValue('--warning').trim() || '38 92% 50%';
    const destructive = css.getPropertyValue('--destructive').trim() || '0 84.2% 60.2%';

    const colorA = (a: number) => `hsl(${warning} / ${a})`;
    const colorB = (a: number) => `hsl(${destructive} / ${a})`;

    const spawn = (count = 4) => {
      for (let i = 0; i < count; i++) {
        const baseX = Math.random() * window.innerWidth; // distributed across width
        const p: Particle = {
          x: baseX + (Math.random() - 0.5) * 40,
          y: window.innerHeight + Math.random() * 40,
          vx: (Math.random() - 0.5) * 0.3,
          vy: - (0.6 + Math.random() * 1.2),
          size: 1 + Math.random() * 2.2,
          life: 1,
          flicker: Math.random() * Math.PI * 2,
        };
        particles.push(p);
      }
    };

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gentle global glow
      const grd = ctx.createLinearGradient(0, canvas.height, 0, 0);
      grd.addColorStop(0, colorA(0.05));
      grd.addColorStop(1, colorB(0.03));
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (particles.length < maxParticles) spawn(6);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.006 + Math.random() * 0.004;
        p.vx += (Math.random() - 0.5) * 0.02; // subtle drift
        p.flicker += 0.2 + Math.random() * 0.3;

        // Remove if off-screen or dead
        if (p.y < -20 || p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = Math.max(0, Math.min(1, p.life)) * 0.9;
        const size = p.size * (0.6 + Math.abs(Math.sin(p.flicker)) * 0.6);

        // Ember core
        ctx.beginPath();
        ctx.fillStyle = colorB(alpha);
        ctx.shadowBlur = 8;
        ctx.shadowColor = colorB(alpha);
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Outer glow
        ctx.beginPath();
        ctx.fillStyle = colorA(alpha * 0.7);
        ctx.shadowBlur = 18;
        ctx.shadowColor = colorA(alpha);
        ctx.arc(p.x, p.y, size * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ParticlesBackground;
