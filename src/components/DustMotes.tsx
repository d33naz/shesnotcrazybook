import { useRef, useEffect } from 'react';

interface DustMotesProps {
  opacity?: number;
  particleCount?: number;
}

export default function DustMotes({ opacity = 0.6, particleCount = 180 }: DustMotesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const xPos: number[] = [];
    const yPos: number[] = [];
    const xVel: number[] = [];
    const yVel: number[] = [];
    const radius: number[] = [];
    const alpha: number[] = [];

    const BASE_SPEED = 0.4;
    const fadeInDuration = 2000;

    const resetParticle = (i: number, initial = false) => {
      xPos[i] = Math.random() * width;
      yPos[i] = initial
        ? Math.random() * (height + 200)
        : height + Math.random() * 100;
      xVel[i] = Math.random() * 0.6 - 0.3;
      yVel[i] = -(Math.random() * BASE_SPEED * 0.7 + BASE_SPEED * 0.8);
      radius[i] = Math.random() * 2.5 + 1;
      alpha[i] = Math.random() * 0.6 + 0.2;
    };

    for (let i = 0; i < particleCount; i++) {
      resetParticle(i, true);
    }

    let startTime: number | null = null;
    let currentOpacity = 0;
    let phase: 'fadeIn' | 'hold' = 'fadeIn';

    const warmColors = [
      { r: 201, g: 168, b: 76 },
      { r: 212, g: 165, b: 116 },
      { r: 212, g: 196, b: 164 },
      { r: 249, g: 248, b: 242 },
      { r: 245, g: 240, b: 232 },
      { r: 195, g: 154, b: 101 },
    ];

    let rafId: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (phase === 'fadeIn') {
        currentOpacity = Math.min(elapsed / fadeInDuration, 1);
        if (elapsed >= fadeInDuration) phase = 'hold';
      } else {
        currentOpacity = 1;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particleCount; i++) {
        xPos[i] += xVel[i];
        yPos[i] += yVel[i];

        const color = warmColors[i % warmColors.length];
        const finalAlpha = alpha[i] * currentOpacity;

        const gradient = ctx.createRadialGradient(
          xPos[i], yPos[i], radius[i] * 0.2,
          xPos[i], yPos[i], radius[i]
        );
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${finalAlpha})`);
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(xPos[i], yPos[i], radius[i], 0, Math.PI * 2);
        ctx.fill();

        if (yPos[i] < -50 || xPos[i] < -50 || xPos[i] > width + 50) {
          resetParticle(i);
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount]);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none',
      opacity,
    }}>
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
