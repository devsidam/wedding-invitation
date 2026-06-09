"use client";

import Image from "next/image";

const events = [
  {
    title: "Sangeet",
    description: "A spirited night of song, dance and laughter",
    date: "FRI · July 17, 2026",
    time: "08:00 PM onwards",
    venue: "Vikhale, Khatav Taluka, Satara",
    bg: "/images/bg-sangeet.jpg",
    couple: "/images/couple-sangeet.png",
    coupleAlt: "Sangeet couple illustration",
    layout: "left" as const,
  },
  {
    title: "Gavdev",
    description: "Seeking blessings from the village deity",
    date: "SAT · July 18, 2026",
    time: "07:00 PM onwards",
    venue: "Vikhale, Khatav Taluka, Satara",
    bg: "/images/bg-gavdev.jpg",
    couple: "/images/couple-gavdev.png",
    coupleAlt: "Gavdev couple illustration",
    layout: "right" as const,
  },
  {
    title: "Haldi",
    description: "A joyful morning of haldi, blessings and laughter",
    date: "SUN · July 19, 2026",
    time: "11:00 AM onwards",
    venue: "Fulai Garden, Zirapwadi, Phaltan, Satara",
    bg: "/images/bg-haldi.jpg",
    couple: "/images/couple-haldi.png",
    coupleAlt: "Haldi couple illustration",
    layout: "left" as const,
  },
  {
    title: "Sapthapadi",
    description: "The sacred seven vows under the floral mandap",
    date: "SUN · July 19, 2026",
    time: "03:48 PM",
    venue: "Fulai Garden, Zirapwadi, Phaltan, Satara",
    bg: "/images/bg-sapthapadi.jpg",
    couple: "/images/couple-sapthapadi.png",
    coupleAlt: "Sapthapadi couple illustration",
    layout: "right" as const,
  },
  {
    title: "Varmala",
    description: "The exchange of garlands and a joyous celebration",
    date: "SUN · July 19, 2026",
    time: "06:15 PM",
    venue: "Fulai Garden, Zirapwadi, Phaltan, Satara",
    bg: "/images/bg-varmala.jpg",
    couple: "/images/couple-varmala.png",
    coupleAlt: "Varmala couple illustration",
    layout: "left" as const,
  },
];

function GoldDivider({ small }: { small?: boolean }) {
  return (
    <div className={`flex items-center gap-${small ? "2" : "3"} justify-center ${small ? "my-5" : "my-6"}`}>
      <span className={`h-px ${small ? "w-10" : "w-16"}`} style={{ backgroundColor: small ? "rgba(201,169,110,0.6)" : "var(--color-gold-soft)" }} />
      <span style={{ color: "var(--color-gold-soft)" }}>❀</span>
      <span className={`h-px ${small ? "w-10" : "w-16"}`} style={{ backgroundColor: small ? "rgba(201,169,110,0.6)" : "var(--color-gold-soft)" }} />
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

function EventCard({ event }: { event: (typeof events)[0] }) {
  const isLeft = event.layout === "left";

  return (
    <article className="relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 group isolate border" style={{ borderColor: "var(--color-gold-soft)" }}>
      <Image
        src={event.bg}
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative">
        <div className={`grid gap-4 sm:gap-6 items-end p-6 sm:p-8 grid-cols-1 sm:grid-cols-2`}>
          <div className={`flex justify-center items-end h-full ${isLeft ? "order-2 sm:order-1" : "order-2 sm:order-2"}`}>
            <Image
              src={event.couple}
              alt={event.coupleAlt}
              width={220}
              height={394}
              className="w-full max-w-[220px] h-auto object-contain drop-shadow-md"
            />
          </div>
          <div className={`text-center order-1 text-slate-100 flex flex-col justify-center ${isLeft ? "sm:order-2" : "sm:order-1"}`}>
            <h3
              className="text-5xl"
              style={{ fontFamily: "var(--font-great-vibes), cursive", color: "var(--color-cream)" }}
            >
              {event.title}
            </h3>
            <p
              className="mt-2 italic text-base"
              style={{ fontFamily: "var(--font-cormorant), serif", color: "rgba(249,244,236,0.8)" }}
            >
              {event.description}
            </p>
            <GoldDivider small />
            <div className="space-y-3">
              <div>
                <div className="text-sm" style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--color-gold-soft)" }}>Date</div>
                <div className="text-xl mt-1" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-cream)" }}>{event.date}</div>
              </div>
              <div>
                <div className="text-sm" style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--color-gold-soft)" }}>Time</div>
                <div className="text-xl mt-1" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-cream)" }}>{event.time}</div>
              </div>
              <div>
                <div className="text-sm" style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--color-gold-soft)" }}>Venue</div>
                <div className="text-lg mt-1" style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-cream)" }}>{event.venue}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function EventsSection() {
  return (
    <section className="relative py-20 px-6" style={{ backgroundColor: "var(--color-sage)" }}>
      <SectionDecorations />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl sm:text-6xl mt-2"
            style={{ fontFamily: "var(--font-great-vibes), cursive", color: "var(--color-rose-deep)" }}
          >
            Events Schedule
          </h2>
          <GoldDivider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
