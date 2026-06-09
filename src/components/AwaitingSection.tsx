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

export default function AwaitingSection() {
  return (
    <section className="relative py-24 px-6 text-center" style={{ backgroundColor: "var(--color-cream)" }}>
      <SectionDecorations />
      <div className="relative max-w-2xl mx-auto">
        <h2
          className="text-5xl sm:text-6xl"
          style={{ fontFamily: "var(--font-great-vibes), cursive", color: "var(--color-rose-deep)" }}
        >
          Awaiting Your Noble Presence
        </h2>
        <div className="my-6 flex items-center justify-center gap-3">
          <span className="h-px w-16" style={{ backgroundColor: "var(--color-gold-soft)" }} />
          <span style={{ color: "var(--color-gold-soft)" }} className="text-lg">❀</span>
          <span className="h-px w-16" style={{ backgroundColor: "var(--color-gold-soft)" }} />
        </div>
        <p
          className="italic text-xl leading-relaxed"
          style={{ fontFamily: "var(--font-cormorant), serif", color: "rgba(60, 44, 32, 0.8)" }}
        >
          Because meeting two souls requires twice the fun — and you!
        </p>
      </div>
    </section>
  );
}
