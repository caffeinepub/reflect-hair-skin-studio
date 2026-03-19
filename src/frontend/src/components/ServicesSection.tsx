interface Props {
  onBook: (service: string) => void;
}

const services = [
  {
    name: "Hair Artistry",
    image: "/assets/generated/service-hair.dim_600x700.jpg",
    desc: "Precision cuts and styling for every hair type and personality.",
  },
  {
    name: "Skin Rituals",
    image: "/assets/generated/service-skin.dim_600x700.jpg",
    desc: "Advanced skin science treatments for radiant, glowing skin.",
  },
  {
    name: "Color Mastery",
    image: "/assets/generated/service-color.dim_600x700.jpg",
    desc: "Bespoke color techniques from balayage to bold transformations.",
  },
  {
    name: "Hair Therapy",
    image: "/assets/generated/service-therapy.dim_600x700.jpg",
    desc: "Restorative treatments to heal, nourish, and strengthen your hair.",
  },
  {
    name: "Bridal Couture",
    image: "/assets/generated/service-bridal.dim_600x700.jpg",
    desc: "Complete bridal styling packages for your most unforgettable day.",
  },
  {
    name: "Men's Grooming",
    image: "/assets/generated/service-mens.dim_600x700.jpg",
    desc: "Premium cuts, beard artistry, and grooming rituals for the modern man.",
  },
];

const ordinals = ["01", "02", "03", "04", "05", "06"];

export default function ServicesSection({ onBook }: Props) {
  return (
    // IMPROVEMENT 2: Slightly tighter than about — dense grid sections breathe less
    <section id="services" className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        {/* IMPROVEMENT 1: Eyebrow with flanking hairlines */}
        <div className="text-center mb-16 reveal">
          <div className="eyebrow-wrap">
            <p
              className="section-eyebrow"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              CURATED SERVICES
            </p>
          </div>
          <h2
            className="font-playfair font-bold"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
              color: "oklch(0.93 0.01 60)",
              letterSpacing: "-0.03em",
            }}
          >
            Artistry Beyond{" "}
            <em style={{ color: "oklch(0.74 0.07 60)", fontStyle: "italic" }}>
              Compare
            </em>
          </h2>
        </div>

        {/* IMPROVEMENT 3: Taller images (360px), editorial number overlay,
            service name in off-white (gold only for CTA link) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <div
              key={svc.name}
              className={`service-card reveal reveal-delay-${(i % 3) + 1} group cursor-pointer border`}
              style={{ borderColor: "oklch(0.74 0.07 60 / 0.25)" }}
              data-ocid="services.card"
            >
              {/* Image — taller, with number watermark */}
              <div
                className="relative overflow-hidden"
                style={{ height: "360px" }}
              >
                <img
                  src={svc.image}
                  alt={svc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Editorial ordinal number overlay */}
                <div className="service-card-number">{ordinals[i]}</div>
                {/* Subtle gradient at base for text readability on hover */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  }}
                />
              </div>

              {/* Content — more padding, cleaner hierarchy */}
              <div className="p-8" style={{ background: "oklch(0.115 0 0)" }}>
                {/* Service name in off-white — hierarchy: name first, gold for action */}
                <h3
                  className="font-playfair font-bold mb-3"
                  style={{
                    fontSize: "1.25rem",
                    color: "oklch(0.93 0.01 60)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {svc.name}
                </h3>
                <p
                  className="font-inter text-sm leading-[1.7] mb-6"
                  style={{ color: "oklch(0.58 0.01 60)" }}
                >
                  {svc.desc}
                </p>
                {/* Gold reserved only for the CTA action — clear hierarchy */}
                <button
                  type="button"
                  onClick={() => onBook(svc.name)}
                  className="group/btn inline-flex items-center gap-2 font-inter text-xs tracking-[0.22em] transition-all duration-300 hover:gap-3"
                  style={{ color: "oklch(0.74 0.07 60)" }}
                  data-ocid="services.primary_button"
                >
                  EXPERIENCE THIS SERVICE
                  <span
                    className="inline-block border-b transition-all duration-300"
                    style={{
                      borderColor: "oklch(0.74 0.07 60 / 0.5)",
                      width: "20px",
                    }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
