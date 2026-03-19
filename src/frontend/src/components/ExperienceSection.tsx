const steps = [
  { number: "01", title: "Consult", desc: "Personalized style consultation" },
  { number: "02", title: "Transform", desc: "Expert hands at work" },
  { number: "03", title: "Glow", desc: "Reveal your radiance" },
  { number: "04", title: "Confidence", desc: "Walk out unforgettable" },
];

export default function ExperienceSection() {
  return (
    // IMPROVEMENT 2: Most expansive section — cinematic breathing room
    <section
      id="experience"
      className="py-32 md:py-52"
      style={{ background: "oklch(0.92 0.02 70)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 reveal">
          {/* IMPROVEMENT 1: Eyebrow with hairlines */}
          <div className="eyebrow-wrap">
            <p
              className="section-eyebrow"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              THE JOURNEY
            </p>
          </div>
          <h2
            className="font-playfair font-bold"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
              color: "oklch(0.22 0.03 50)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
            }}
          >
            Not Just A Salon
          </h2>
          <h2
            className="font-playfair font-bold italic mt-1"
            style={{
              fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
              color: "oklch(0.74 0.07 60)",
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
            }}
          >
            A Transformation Destination
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`timeline-step relative text-center reveal reveal-delay-${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-7 font-inter text-xs font-bold tracking-widest"
                style={{
                  background: "oklch(0.74 0.07 60)",
                  color: "oklch(0.1 0 0)",
                }}
              >
                {step.number}
              </div>
              <h3
                className="font-playfair font-bold mb-3"
                style={{
                  fontSize: "1.5rem",
                  color: "oklch(0.22 0.03 50)",
                  letterSpacing: "-0.02em",
                }}
              >
                {step.title}
              </h3>
              <p
                className="font-inter text-sm leading-relaxed"
                style={{ color: "oklch(0.48 0.02 50)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
