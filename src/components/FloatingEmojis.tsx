"use client";

const PETALS = [
  { emoji: "🌸", left: 37.7, size: 25, duration: 20.5, delay: 3.2 },
  { emoji: "🌸", left: 74.1, size: 28.7, duration: 29.3, delay: 8.0 },
  { emoji: "🌿", left: 69.2, size: 25.7, duration: 14.2, delay: 1.0 },
  { emoji: "🌸", left: 37.5, size: 33.1, duration: 16.4, delay: 4.0 },
  { emoji: "🌼", left: 94.8, size: 14.0, duration: 15.0, delay: 10.2 },
  { emoji: "🌿", left: 15.0, size: 28.5, duration: 25.5, delay: 11.2 },
  { emoji: "🌸", left: 65.5, size: 21.1, duration: 20.7, delay: 10.1 },
  { emoji: "🌸", left: 81.7, size: 25.5, duration: 14.8, delay: 10.4 },
  { emoji: "🌸", left: 75.9, size: 30.6, duration: 21.5, delay: 6.9 },
  { emoji: "🌿", left: 7.2, size: 33.7, duration: 18.9, delay: 3.3 },
  { emoji: "🌸", left: 61.5, size: 31.7, duration: 21.7, delay: 1.7 },
  { emoji: "🌼", left: 75.6, size: 22.3, duration: 19.5, delay: 5.2 },
  { emoji: "🌿", left: 37.0, size: 22.3, duration: 22.8, delay: 10.2 },
  { emoji: "🌸", left: 81.8, size: 23.5, duration: 23.8, delay: 3.6 },
  { emoji: "🌸", left: 73.0, size: 33.1, duration: 25.2, delay: 9.7 },
  { emoji: "🌸", left: 59.5, size: 22.7, duration: 24.8, delay: 0.02 },
  { emoji: "🌿", left: 65.4, size: 35.7, duration: 26.8, delay: 2.2 },
  { emoji: "🌸", left: 7.4, size: 35.9, duration: 27.0, delay: 2.9 },
];

export default function FloatingEmojis() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="absolute animate-float-petal"
          style={{
            left: `${p.left}%`,
            top: "-10vh",
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            filter: "drop-shadow(0 2px 4px rgba(60,44,32,0.1))",
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
