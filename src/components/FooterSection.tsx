// export default function FooterSection() {
//   return (
//     <footer
//       className="py-16 px-6 text-center"
//       style={{ backgroundColor: "var(--color-brown)" }}
//     >
//       <p
//         className="text-xs tracking-[0.4em]"
//         style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--color-gold-soft)" }}
//       >
//         WITH LOVE
//       </p>
//       <h3
//         className="mt-3 text-5xl sm:text-6xl"
//         style={{ fontFamily: "var(--font-great-vibes), cursive", color: "var(--color-cream)" }}
//       >
//         Roshni & Chetan
//       </h3>
//       <div className="my-5 flex items-center justify-center gap-3">
//         <span className="h-px w-12" style={{ backgroundColor: "rgba(201,169,110,0.4)" }} />
//         <span className="text-2xl">💐</span>
//         <span className="h-px w-12" style={{ backgroundColor: "rgba(201,169,110,0.4)" }} />
//       </div>
//       <p
//         className="italic text-lg"
//         style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-cream)" }}
//       >
//         19th June 2026
//       </p>
//       <p
//         className="mt-3 text-xs tracking-widest"
//         style={{ fontFamily: "var(--font-cinzel), serif", color: "rgba(249,246,241,0.7)" }}
//       >
//         #RoshWedsChetan
//       </p>
//     </footer>
//   );
// }

export default function FooterSection() {
  return (
    <footer
      className="relative pt-12 pb-0 px-6 text-center overflow-hidden flex flex-col items-center justify-between min-h-[85svh] sm:min-h-[700px]"
      style={{ backgroundColor: "var(--color-brown)" }}
    >
      {/* 1. TEXT / CONTENT LAYER */}
      <div className="relative z-20 flex flex-col items-center w-full">
        <p
          className="text-[10px] sm:text-xs tracking-[0.4em]"
          style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--color-gold-soft)" }}
        >
          WITH LOVE
        </p>

        <h3
          className="mt-2 text-4xl sm:text-6xl tracking-wide"
          style={{ fontFamily: "var(--font-great-vibes), cursive", color: "var(--color-cream)" }}
        >
          Roshni & Chetan
        </h3>

        <div className="my-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 sm:w-12" style={{ backgroundColor: "rgba(201,169,110,0.3)" }} />
          <span className="text-xl sm:text-2xl">✨</span>
          <span className="h-px w-8 sm:w-12" style={{ backgroundColor: "rgba(201,169,110,0.3)" }} />
        </div>

        <p
          className="italic text-base sm:text-lg"
          style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-cream)" }}
        >
          19th June 2026
        </p>

        <p
          className="mt-2 text-[10px] sm:text-xs tracking-widest"
          style={{ fontFamily: "var(--font-cinzel), serif", color: "rgba(249,246,241,0.6)" }}
        >
          #RoshWedsChetan
        </p>
      </div>

      {/* 2. MOBILE-FIRST CUTOUT CONTAINER */}
      <div className="relative z-10 w-full max-w-[280px] sm:max-w-[360px] mt-auto flex justify-center items-end select-none">
        <img
          src="/images/couple-footer.png" // Replace with your cutout image path
          alt="Roshni & Chetan"
          className="w-full h-auto object-contain max-h-[45svh] sm:max-h-[380px] block"
        />

        {/* 3. GRADIENT BLENDER OVER THE LEGS (Smooves the cut edge into the brown background) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, var(--color-brown) 85%)"
          }}
        />
      </div>
    </footer>
  );
}

// export default function FooterSection() {
//   return (
//     <footer
//       className="relative pt-16 pb-0 px-6 text-center overflow-hidden flex flex-col items-center min-h-[85svh] sm:min-h-[720px] justify-between"
//       style={{ backgroundColor: "var(--color-brown)" }}
//     >
//       {/* 1. TEXT / CONTENT LAYER */}
//       <div className="relative z-20 flex flex-col items-center w-full">
//         <p
//           className="text-[10px] sm:text-xs tracking-[0.4em]"
//           style={{ fontFamily: "var(--font-cinzel), serif", color: "var(--color-gold-soft)" }}
//         >
//           WITH LOVE
//         </p>

//         <h3
//           className="mt-2 text-4xl sm:text-6xl tracking-wide"
//           style={{ fontFamily: "var(--font-great-vibes), cursive", color: "var(--color-cream)" }}
//         >
//           Roshni & Chetan
//         </h3>

//         <div className="my-4 flex items-center justify-center gap-3">
//           <span className="h-px w-8 sm:w-12" style={{ backgroundColor: "rgba(201,169,110,0.3)" }} />
//           <span className="text-xl sm:text-2xl">✨</span>
//           <span className="h-px w-8 sm:w-12" style={{ backgroundColor: "rgba(201,169,110,0.3)" }} />
//         </div>

//         <p
//           className="italic text-base sm:text-lg"
//           style={{ fontFamily: "var(--font-cormorant), serif", color: "var(--color-cream)" }}
//         >
//           19th June 2026
//         </p>

//         <p
//           className="mt-2 text-[10px] sm:text-xs tracking-widest"
//           style={{ fontFamily: "var(--font-cinzel), serif", color: "rgba(249,246,241,0.6)" }}
//         >
//           #RoshWedsChetan
//         </p>
//       </div>

//       {/* 2. THE GRADIENT FADED IMAGE CONTAINER */}
//       <div className="relative z-10 w-full max-w-[290px] sm:max-w-[360px] mt-auto flex justify-center items-end select-none">
//         <img
//           src="/images/couple-footer.png" // Replace with your cutout image path
//           alt="Roshni & Chetan"
//           className="w-full h-auto object-contain max-h-[42svh] sm:max-h-[360px] block"
//           style={{
//             // This applies a smooth transparency mask directly to the image pixels
//             WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 95%)",
//             maskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 95%)"
//           }}
//         />
//       </div>
//     </footer>
//   );
// }