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

export default function VenueSection() {
  return (
    <section className="relative py-20 px-6" style={{ backgroundColor: "var(--color-cream)" }}>
      <SectionDecorations />
      <div className="relative max-w-4xl mx-auto text-center">
        <p
          className="text-xs tracking-widest"
          style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--color-sage-deep)" }}
        >
          WEDDING VENUE
        </p>
        <h2
          className="mt-2 text-5xl sm:text-6xl"
          style={{ fontFamily: "var(--font-great-vibes), cursive", color: "var(--color-rose-deep)" }}
        >
          Where We Celebrate
        </h2>
        <div className="my-6 flex items-center justify-center gap-3">
          <span className="h-px w-16" style={{ backgroundColor: "var(--color-gold-soft)" }} />
          <span style={{ color: "var(--color-gold-soft)" }} className="text-lg">❀</span>
          <span className="h-px w-16" style={{ backgroundColor: "var(--color-gold-soft)" }} />
        </div>

        <p
          className="text-lg sm:text-xl max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-cormorant), serif", color: "rgba(60, 44, 32, 0.8)" }}
        >
          R K Celebration Hall, Armori Road, Gadchiroli
        </p>

        <div className="mt-10 rounded-2xl overflow-hidden border shadow-elegant" style={{ borderColor: "var(--color-gold-soft)" }}>
          {/* <iframe
            title="Venue map"
            src="https://www.google.com/maps?q=Fulai+Garden+Zirapwadi+Phaltan+Satara&output=embed"
            className="w-full h-[360px]"
            loading="lazy"
          /> */}
          <iframe
            title="Venue map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.660603705764!2d80.00396867517678!3d20.1898520812577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2cfbeb0bd0f9c1%3A0x2cacc2263c69473a!2sR%20K%20Celebration%20Hall!5e0!3m2!1sen!2sin!4v1781031760766!5m2!1sen!2sin"
            className="w-full h-[360px]"
            loading="lazy"
          />
        </div>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=R+K+Celebration+Hall,+Road+(NH-353C,+road,+Sai+Nagar,+Armori,+Gadchiroli,+Maharashtra+442605"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8"
        >
          <button
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 h-11 text-white border-0 hover:opacity-90 transition-colors gradient-gold shadow-gold"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Get Directions
          </button>
        </a>
      </div>
    </section>
  );
}
