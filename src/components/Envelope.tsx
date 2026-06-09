"use client";

import { useState } from "react";
import Image from "next/image";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    setOpening(true);
    setTimeout(onOpen, 1200);
  };

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-1000 ${
        opening ? "pointer-events-none opacity-0" : ""
      }`}
      style={{ backgroundColor: "var(--color-sage)" }}
    >
      {/* Corner decorations */}
      <span className="absolute left-4 top-4 text-3xl animate-float" style={{ "--delay": "0s" } as React.CSSProperties}>🌸</span>
      <span className="absolute right-4 top-4 text-2xl animate-float" style={{ "--delay": "1s" } as React.CSSProperties}>🌼</span>
      <span className="absolute bottom-16 left-6 text-3xl animate-float" style={{ "--delay": "2s" } as React.CSSProperties}>🌿</span>
      <span className="absolute bottom-16 right-6 text-3xl animate-float" style={{ "--delay": "1.5s" } as React.CSSProperties}>🌿</span>

      <button
        onClick={handleClick}
        className={`group relative cursor-pointer transition-transform duration-500 hover:scale-105 ${
          opening ? "animate-envelope-open" : ""
        }`}
        style={{ perspective: "1000px" }}
        aria-label="Open invitation"
      >
        <Image
          src="/images/envelope.png"
          alt="Wedding invitation envelope"
          width={1080}
          height={1920}
          className="w-[280px] sm:w-[360px] md:w-[420px] h-auto drop-shadow-2xl"
          priority
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center animate-shimmer"
            style={{
              background: "linear-gradient(135deg, hsl(36 55% 60%), hsl(36 45% 45%))",
              boxShadow: "0 10px 40px -10px hsl(36 55% 45% / .4)",
            }}
          >
            <span
              className="text-xs text-white/90"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              R & P
            </span>
          </span>
        </span>
      </button>

      {/* Text below envelope */}
      <div className="mt-8 text-center">
        <h2
          className="text-3xl sm:text-4xl"
          style={{ fontFamily: "var(--font-great-vibes), cursive", color: "var(--color-maroon)" }}
        >
          You&apos;re Invited
        </h2>
        <p
          className="mt-2 text-sm sm:text-base"
          style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-brown-80)" }}
        >
          Tap the envelope to open your invitation
        </p>
      </div>
    </div>
  );
}
