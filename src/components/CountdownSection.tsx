"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const WEDDING_DATE = new Date("2026-07-19T15:48:00+05:30");

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function GoldDivider() {
  return (
    <div className="my-6 flex items-center justify-center gap-3">
      <span className="h-px w-16" style={{ backgroundColor: "var(--color-gold-soft)" }} />
      <span style={{ color: "var(--color-gold-soft)" }} className="text-lg">❀</span>
      <span className="h-px w-16" style={{ backgroundColor: "var(--color-gold-soft)" }} />
    </div>
  );
}

function SectionDecorations() {
  return (
    <>
      <span className="pointer-events-none absolute top-6 left-4 text-4xl opacity-20">🌿</span>
      <span className="pointer-events-none absolute top-12 right-6 text-3xl opacity-20">🌸</span>
      <span className="pointer-events-none absolute bottom-10 left-10 text-3xl opacity-20">🌼</span>
      <span className="pointer-events-none absolute bottom-6 right-4 text-4xl opacity-20">🌿</span>
    </>
  );
}

function ScratchCard({ onReveal }: { onReveal: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);
  const revealed = useRef(false);

  const initCanvas = useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "hsl(36, 55%, 60%)");
    grad.addColorStop(1, "hsl(36, 45%, 45%)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.font = "bold 14px Cinzel, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✦ SCRATCH TO REVEAL ✦", rect.width / 2, rect.height / 2);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    initCanvas(canvas);
  }, [initCanvas]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) cleared++;
    }
    const pct = cleared / (imageData.data.length / 4);
    if (pct > 0.4 && !revealed.current) {
      revealed.current = true;
      onReveal();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
    }
    return { x: (e as React.MouseEvent).clientX - rect.left, y: (e as React.MouseEvent).clientY - rect.top };
  };

  return (
    <div className="relative mx-auto w-full max-w-md h-32 rounded-2xl overflow-hidden border-2 shadow-elegant select-none" style={{ borderColor: "var(--color-gold-soft)" }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ backgroundColor: "var(--color-cream)" }}>
        <p
          className="tracking-[0.35em] text-base"
          style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--color-sage-deep)" }}
        >
          SAVE THE DATE
        </p>
        <p
          className="mt-1 text-4xl"
          style={{ fontFamily: "var(--font-great-vibes), cursive", color: "var(--color-rose-deep)" }}
        >
          19th July 2026
        </p>
      </div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none"
        onMouseDown={(e) => { isDrawing.current = true; const p = getPos(e); scratch(p.x, p.y); }}
        onMouseMove={(e) => { if (!isDrawing.current) return; const p = getPos(e); scratch(p.x, p.y); }}
        onMouseUp={() => { isDrawing.current = false; }}
        onMouseLeave={() => { isDrawing.current = false; }}
        onTouchStart={(e) => { isDrawing.current = true; const p = getPos(e); scratch(p.x, p.y); }}
        onTouchMove={(e) => { if (!isDrawing.current) return; const p = getPos(e); scratch(p.x, p.y); }}
        onTouchEnd={() => { isDrawing.current = false; }}
      />
    </div>
  );
}

export default function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft());
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <section className="relative py-20 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
      <SectionDecorations />
      <div className="relative max-w-3xl mx-auto text-center">
        <GoldDivider />

        <div className="mb-10">
          <ScratchCard onReveal={() => setShowCountdown(true)} />
        </div>

        <div
          className={`transition-all duration-700 ${showCountdown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden"}`}
          aria-hidden={!showCountdown}
        >
          <div className="flex justify-center gap-3 sm:gap-6">
            {units.map((u) => (
              <div key={u.label} className="flex flex-col items-center min-w-[68px] sm:min-w-[90px]">
                <div
                  className="w-full aspect-square rounded-2xl border flex items-center justify-center backdrop-blur-sm"
                  style={{ backgroundColor: "var(--color-cream)", borderColor: "var(--color-gold-soft)", boxShadow: "var(--shadow-soft)" }}
                >
                  <span
                    className="text-2xl sm:text-4xl tabular-nums"
                    style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--color-rose-deep)" }}
                  >
                    {String(u.value).padStart(2, "0")}
                  </span>
                </div>
                <span
                  className="mt-2 text-xs sm:text-sm tracking-widest uppercase"
                  style={{ color: "var(--color-sage-deep)" }}
                >
                  {u.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
