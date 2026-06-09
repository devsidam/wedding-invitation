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

function GoldDivider({ small }: { small?: boolean }) {
  return (
    <div className={`flex items-center justify-center gap-${small ? "2" : "3"} ${small ? "my-4" : "my-6"}`}>
      <span className={`h-px ${small ? "w-8" : "w-16"}`} style={{ backgroundColor: "var(--color-gold-soft)" }} />
      <span style={{ color: "var(--color-gold-soft)" }}>❀</span>
      <span className={`h-px ${small ? "w-8" : "w-16"}`} style={{ backgroundColor: "var(--color-gold-soft)" }} />
    </div>
  );
}

export default function FamiliesSection() {
  return (
    <section className="relative py-20 px-6" style={{ backgroundColor: "var(--color-sage)" }}>
      <SectionDecorations />
      <div className="relative max-w-5xl mx-auto text-center">
        <p
          className="text-xs tracking-widest"
          style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--color-sage-deep)" }}
        >
          WITH LOVE
        </p>
        <h2
          className="text-5xl sm:text-6xl mt-2"
          style={{ fontFamily: "var(--font-great-vibes), cursive", color: "var(--color-rose-deep)" }}
        >
          The Families
        </h2>
        <GoldDivider />

        <div className="mt-10">
          <div
            className="backdrop-blur-sm rounded-2xl p-8 shadow-soft border"
            style={{ backgroundColor: "rgba(249,244,236,0.8)", borderColor: "var(--color-gold-soft)" }}
          >
            <p
              className="text-xs tracking-widest"
              style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--color-sage-deep)" }}
            >
              AWAITING YOUR GRACIOUS PRESENCE
            </p>
            <GoldDivider small />
            <p
              className="text-xl my-1"
              style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-brown)" }}
            >
              Mr. Sanjay Deshmukh
            </p>
            <p
              className="text-xl my-1"
              style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-brown)" }}
            >
              Mrs. Seema Deshmukh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
