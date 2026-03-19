const stats = [
  { value: "4.5★", label: "Rating" },
  { value: "100+", label: "Happy Clients" },
  { value: "6", label: "Expert Services" },
  { value: "5+", label: "Years Excellence" },
];

export default function AboutSection() {
  return (
    // IMPROVEMENT 2: More breathing room — py-32 md:py-48 vs the old py-24 md:py-32
    <section
      id="about"
      className="py-32 md:py-48"
      style={{ background: "oklch(0.92 0.02 70)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            {/* IMPROVEMENT 1: Eyebrow with flanking hairline rules */}
            <div className="eyebrow-wrap-left mb-7">
              <p
                className="section-eyebrow"
                style={{ color: "oklch(0.74 0.07 60)" }}
              >
                OUR ESSENCE
              </p>
            </div>
            <h2
              className="font-playfair font-bold mb-8"
              style={{
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
                color: "oklch(0.22 0.03 50)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
              }}
            >
              Luxury Is A<br />
              <em style={{ fontStyle: "italic", color: "oklch(0.45 0.04 55)" }}>
                Reflection
              </em>{" "}
              Of You
            </h2>
            <p
              className="font-inter leading-[1.85] mb-14"
              style={{ fontSize: "1.05rem", color: "oklch(0.38 0.02 50)" }}
            >
              Reflect Hair &amp; Skin Studio redefines modern grooming with
              premium hair artistry, advanced skin science, and a personalized
              luxury experience designed for both men and women.
            </p>

            {/* Stats — wider spacing, larger numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal reveal-delay-${i + 1}`}
                >
                  <div
                    className="font-playfair font-bold mb-1"
                    style={{
                      fontSize: "2.25rem",
                      color: "oklch(0.74 0.07 60)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-inter text-xs tracking-[0.2em] uppercase mt-2"
                    style={{ color: "oklch(0.5 0.02 50)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image — larger corner offset for more depth */}
          <div className="reveal reveal-delay-2">
            <div className="relative">
              <img
                src="/assets/generated/stylist-1.dim_600x800.jpg"
                alt="Reflect Salon Stylist"
                className="w-full object-cover"
                style={{ maxHeight: "640px", filter: "grayscale(15%)" }}
              />
              {/* Double corner frame — editorial depth */}
              <div
                className="absolute -bottom-5 -right-5 w-56 h-56"
                style={{ border: "1px solid oklch(0.74 0.07 60 / 0.6)" }}
              />
              <div
                className="absolute -bottom-2 -right-2 w-20 h-20"
                style={{ border: "2px solid oklch(0.74 0.07 60)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
