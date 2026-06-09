export default function FooterSection() {
  return (
    <footer
      className="py-16 px-6 text-center"
      style={{ backgroundColor: "var(--color-brown)" }}
    >
      <p
        className="text-xs tracking-[0.4em]"
        style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--color-gold-soft)" }}
      >
        WITH LOVE
      </p>
      <h3
        className="mt-3 text-5xl sm:text-6xl"
        style={{ fontFamily: "var(--font-great-vibes), cursive", color: "var(--color-cream)" }}
      >
        Rushikesh & Prajakta
      </h3>
      <div className="my-5 flex items-center justify-center gap-3">
        <span className="h-px w-12" style={{ backgroundColor: "rgba(201,169,110,0.4)" }} />
        <span className="text-2xl">💐</span>
        <span className="h-px w-12" style={{ backgroundColor: "rgba(201,169,110,0.4)" }} />
      </div>
      <p
        className="italic text-lg"
        style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-cream)" }}
      >
        19th July 2026
      </p>
      <p
        className="mt-3 text-xs tracking-widest"
        style={{ fontFamily: "var(--font-cinzel), serif", color: "rgba(249,246,241,0.7)" }}
      >
        #RUSHIKIPRAJU
      </p>
    </footer>
  );
}
