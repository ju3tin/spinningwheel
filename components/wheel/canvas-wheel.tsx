"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { soundEngine } from "@/lib/audio";

interface CanvasWheelProps {
  items: string[];
  colors?: string[];
  soundEnabled?: boolean;
  onSpinEnd?: (result: { index: number; text: string }) => void;
}

const DEFAULT_COLORS = [
  "#FF5964", "#35A7FF", "#FFE74C", "#38E54D",
  "#FF9F1C", "#9B5DE5", "#00BBF9", "#F15BB5",
  "#2EC4B6", "#E71D36", "#FF9F1C", "#011627"
];

export function CanvasWheel({
  items,
  colors = DEFAULT_COLORS,
  soundEnabled = true,
  onSpinEnd,
}: CanvasWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const currentAngleRef = useRef(0);
  const lastTickRef = useRef(-1);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 420;
    const radius = size / 2 - 16;
    const centerX = size / 2;
    const centerY = size / 2;
    const count = items.length;
    const arc = (2 * Math.PI) / count;

    ctx.clearRect(0, 0, size, size);

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(currentAngleRef.current);

    // Wheel outer rim
    ctx.beginPath();
    ctx.arc(0, 0, radius + 6, 0, 2 * Math.PI);
    ctx.fillStyle = "#1e293b";
    ctx.fill();

    // Slices
    for (let i = 0; i < count; i++) {
      const sliceAngle = i * arc;
      ctx.beginPath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, sliceAngle, sliceAngle + arc);
      ctx.lineTo(0, 0);
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Text
      ctx.save();
      ctx.rotate(sliceAngle + arc / 2);
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";

      const fontSize = Math.max(12, Math.min(18, Math.floor(radius / 10)));
      ctx.font = `bold ${fontSize}px sans-serif`;
      ctx.shadowColor = "rgba(0,0,0,0.4)";
      ctx.shadowBlur = 4;

      let text = items[i] || "";
      if (text.length > 18) text = text.slice(0, 16) + "...";
      ctx.fillText(text, radius - 20, 0);
      ctx.restore();
    }

    // Center Hub
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.18, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.strokeStyle = "#0f172a";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.08, 0, 2 * Math.PI);
    ctx.fillStyle = "#f97316";
    ctx.fill();

    ctx.restore();

    // Top Pointer
    ctx.save();
    ctx.translate(centerX, 12);
    ctx.beginPath();
    ctx.moveTo(-14, 0);
    ctx.lineTo(14, 0);
    ctx.lineTo(0, 26);
    ctx.closePath();
    ctx.fillStyle = "#ef4444";
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 2, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.restore();
  }, [items, colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 420 * dpr;
    canvas.height = 420 * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
    draw();
  }, [draw]);

  const spin = () => {
    if (isSpinning || items.length < 2) return;
    setIsSpinning(true);

    const count = items.length;
    const arc = (2 * Math.PI) / count;
    const minSpins = 5;
    const maxSpins = 8;
    const totalRotation = (minSpins + Math.random() * (maxSpins - minSpins)) * 2 * Math.PI + Math.random() * 2 * Math.PI;

    const startAngle = currentAngleRef.current;
    const targetAngle = startAngle + totalRotation;
    const startTime = performance.now();
    const duration = 4500;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);

      currentAngleRef.current = startAngle + (targetAngle - startAngle) * eased;

      // Calculate tick sound
      const normalized = (3 * Math.PI / 2 - (currentAngleRef.current % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      const segment = Math.floor(normalized / arc);
      if (segment !== lastTickRef.current) {
        lastTickRef.current = segment;
        if (soundEnabled) soundEngine.playTick();
      }

      draw();

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        const winningIndex = segment % count;
        const winner = items[winningIndex];
        if (onSpinEnd) {
          onSpinEnd({ index: winningIndex, text: winner });
        }
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative aspect-square w-full max-w-[420px] drop-shadow-2xl">
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%" }}
          className="cursor-pointer"
          onClick={spin}
        />
      </div>

      <button
        onClick={spin}
        disabled={isSpinning || items.length < 2}
        className="w-full max-w-xs rounded-full bg-gradient-to-r from-brand-500 to-amber-500 py-3.5 text-lg font-extrabold uppercase tracking-wider text-white shadow-xl shadow-brand-500/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel"}
      </button>
    </div>
  );
}
