interface Props {
  onBook: () => void;
}

export default function CtaBanner({ onBook }: Props) {
  return (
    // IMPROVEMENT 2: The climax of the page — maximum breathing room, feel epic
    <section
      className="py-44 md:py-60 relative overflow-hidden"
      style={{ background: "oklch(0.07 0 0)" }}
    >
      {/* Top hairline */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.74 0.07 60 / 0.45), transparent)",
        }}
      />

      {/* Subtle radial glow behind button */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 70%, oklch(0.74 0.07 60 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center reveal">
        {/* IMPROVEMENT 1: Eyebrow with hairlines */}
        <div className="eyebrow-wrap mb-8">
          <p
            className="section-eyebrow"
            style={{ color: "oklch(0.74 0.07 60)" }}
          >
            BEGIN YOUR TRANSFORMATION
          </p>
        </div>
        <h2
          className="font-playfair font-bold leading-none mb-5"
          style={{
            fontSize: "clamp(3rem, 6vw, 6rem)",
            color: "oklch(0.95 0.01 60)",
            letterSpacing: "-0.03em",
          }}
        >
          Your Transformation
          <br />
          <em style={{ color: "oklch(0.74 0.07 60)", fontStyle: "italic" }}>
            Begins Today
          </em>
        </h2>
        <p
          className="font-inter mb-14 tracking-wide"
          style={{
            fontSize: "1.05rem",
            color: "oklch(0.52 0.01 60)",
            lineHeight: 1.7,
          }}
        >
          Step in ordinary. Walk out unforgettable.
        </p>
        <button
          type="button"
          onClick={onBook}
          className="pulse-gold font-inter text-xs tracking-[0.32em] px-16 py-5 transition-all duration-300 hover:opacity-88"
          style={{ background: "oklch(0.74 0.07 60)", color: "oklch(0.1 0 0)" }}
          data-ocid="cta.primary_button"
        >
          BOOK APPOINTMENT NOW
        </button>
      </div>

      {/* Bottom hairline */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.74 0.07 60 / 0.45), transparent)",
        }}
      />
    </section>
  );
}
