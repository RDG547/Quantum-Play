import { useEffect, useState } from 'react';

interface Flash {
  id: number;
  x: number;
  y: number;
}

const ClickHighlight = () => {
  const [flashes, setFlashes] = useState<Flash[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = Date.now() + Math.random();
      setFlashes((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setFlashes((prev) => prev.filter((f) => f.id !== id));
      }, 600);
    };
    window.addEventListener('pointerdown', handleClick);
    return () => window.removeEventListener('pointerdown', handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {flashes.map((f) => (
        <span
          key={f.id}
          className="click-spot"
          style={{ left: f.x, top: f.y }}
          aria-hidden
        />
      ))}
    </div>
  );
};

export default ClickHighlight;
