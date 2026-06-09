"use client";

import Image from "next/image";

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

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/wedding-hero.jpg"
        alt="Rushikesh and Prajakta wedding illustration"
        fill
        className="object-cover"
        priority
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(249,244,236,0.3), transparent, rgb(249,244,236))" }}
      />
      <SectionDecorations />

      <div className="relative z-10 min-h-screen flex flex-col items-center pt-12 sm:pt-20 px-6 text-center">
        <div className="animate-fade-up" style={{ color: "var(--color-rose-deep)" }}>
          <Image
            src="/images/ganesh-idol.png"
            alt="Lord Ganesha"
            width={96}
            height={96}
            className="mx-auto h-24 w-24 object-contain drop-shadow-md"
          />
          <p
            className="mt-2 italic text-lg sm:text-xl"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            ‖ Shree Ganeshaya Namah ‖
          </p>
        </div>

        <p
          className="mt-8 max-w-md text-base sm:text-lg animate-fade-up delay-200"
          style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-rose-deep)" }}
        >
          We cordially invite you to witness the beginning of our forever and celebrate the wedding ceremony of
        </p>

        <h1 className="mt-6 animate-fade-up delay-300">
          <span
            className="block leading-none"
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "clamp(60px, 10vw, 128px)",
              color: "var(--color-maroon)",
            }}
          >
            Rushikesh
          </span>
        </h1>

        <p
          className="mt-3 text-base sm:text-lg"
          style={{ fontFamily: "var(--font-cormorant), serif", color: "rgba(60, 44, 32, 0.8)" }}
        >
          S/o Mr. Sanjay Deshmukh
          <br />
          &amp; Mrs. Seema Deshmukh
        </p>

        <p
          className="mt-5 italic text-3xl sm:text-4xl"
          style={{ fontFamily: "var(--font-great-vibes), cursive", color: "var(--color-rose-deep)" }}
        >
          with
        </p>

        <h1 className="mt-2">
          <span
            className="block leading-none"
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: "clamp(54px, 9vw, 128px)",
              color: "var(--color-maroon)",
            }}
          >
            Prajakta
          </span>
        </h1>

        <p
          className="mt-3 pb-12 text-base sm:text-lg"
          style={{ fontFamily: "var(--font-cormorant), serif", color: "rgba(60, 44, 32, 0.8)" }}
        >
          D/o Mr. Dasharath Yadav
          <br />
          &amp; Mrs. Ujjwala Yadav
        </p>
      </div>
    </section>
  );
}
