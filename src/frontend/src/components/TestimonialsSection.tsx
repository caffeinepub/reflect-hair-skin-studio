import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Absolutely transformed my look. The attention to detail is unmatched.",
    name: "Priya S.",
    location: "Mysuru",
  },
  {
    quote: "Best salon experience I've ever had. Truly luxury level.",
    name: "Arjun K.",
    location: "Bangalore",
  },
  {
    quote:
      "The bridal styling was beyond perfect. Every guest complimented me.",
    name: "Sneha R.",
    location: "Mysuru",
  },
];

function StarRating({ visible }: { visible: boolean }) {
  return (
    <div className={`star-animate mb-6 ${visible ? "visible" : ""}`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className="text-xl"
          style={{ color: "oklch(0.74 0.07 60)" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            for (const el of entry.target.querySelectorAll(".star-animate")) {
              el.classList.add("visible");
            }
          }
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    // IMPROVEMENT 2: Medium breathing — testimonials need presence
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-28 md:py-44"
      style={{ background: "oklch(0.06 0 0)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          {/* IMPROVEMENT 1: Eyebrow with hairlines */}
          <div className="eyebrow-wrap">
            <p
              className="section-eyebrow"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              CLIENT STORIES
            </p>
          </div>
          <h2
            className="font-playfair font-bold"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              color: "oklch(0.74 0.07 60)",
              letterSpacing: "-0.03em",
            }}
          >
            A Legacy of Elegance
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} p-10`}
              style={{
                borderTop: "1px solid oklch(0.74 0.07 60 / 0.35)",
                background: "oklch(0.095 0 0)",
              }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <StarRating visible={false} />
              {/* Opening quote mark as decorative element */}
              <div
                className="font-playfair mb-2 leading-none"
                style={{
                  fontSize: "4rem",
                  color: "oklch(0.74 0.07 60 / 0.25)",
                  lineHeight: 0.8,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <blockquote
                className="font-playfair italic leading-[1.6] mb-8"
                style={{ fontSize: "1.1rem", color: "oklch(0.85 0.01 60)" }}
              >
                {t.quote}
              </blockquote>
              <div
                className="pt-5"
                style={{ borderTop: "1px solid oklch(0.74 0.07 60 / 0.15)" }}
              >
                <div
                  className="font-inter font-semibold text-xs tracking-[0.22em] uppercase"
                  style={{ color: "oklch(0.74 0.07 60)" }}
                >
                  {t.name}
                </div>
                <div
                  className="font-inter text-xs mt-1.5 tracking-wide"
                  style={{ color: "oklch(0.45 0.01 60)" }}
                >
                  {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
