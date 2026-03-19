export default function GiftCardSection() {
  const waLink =
    "https://wa.me/919916265586?text=Hi%20Reflect%2C%20I%27d%20like%20to%20get%20a%20gift%20card";

  return (
    // IMPROVEMENT 2: Mid-weight section — comfortable but not epic
    <section
      className="py-24 md:py-36"
      style={{ background: "oklch(0.92 0.02 70)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          {/* IMPROVEMENT 1: Eyebrow with hairlines */}
          <div className="eyebrow-wrap">
            <p
              className="section-eyebrow"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              GIVE THE GIFT OF LUXURY
            </p>
          </div>
          <h2
            className="font-playfair font-bold"
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)",
              color: "oklch(0.22 0.03 50)",
              letterSpacing: "-0.03em",
            }}
          >
            Gift The Experience Of Luxury
          </h2>
        </div>

        <div className="reveal max-w-lg mx-auto mb-12">
          <div
            className="relative p-12 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.1 0 0) 0%, oklch(0.18 0 0) 100%)",
              border: "1px solid oklch(0.74 0.07 60 / 0.55)",
              boxShadow: "0 0 60px oklch(0.74 0.07 60 / 0.15)",
            }}
          >
            <div
              className="absolute top-3 left-3 w-8 h-8"
              style={{
                borderTop: "1px solid oklch(0.74 0.07 60)",
                borderLeft: "1px solid oklch(0.74 0.07 60)",
              }}
            />
            <div
              className="absolute top-3 right-3 w-8 h-8"
              style={{
                borderTop: "1px solid oklch(0.74 0.07 60)",
                borderRight: "1px solid oklch(0.74 0.07 60)",
              }}
            />
            <div
              className="absolute bottom-3 left-3 w-8 h-8"
              style={{
                borderBottom: "1px solid oklch(0.74 0.07 60)",
                borderLeft: "1px solid oklch(0.74 0.07 60)",
              }}
            />
            <div
              className="absolute bottom-3 right-3 w-8 h-8"
              style={{
                borderBottom: "1px solid oklch(0.74 0.07 60)",
                borderRight: "1px solid oklch(0.74 0.07 60)",
              }}
            />

            <div className="text-center">
              <p
                className="font-inter text-xs tracking-[0.45em] mb-6"
                style={{ color: "oklch(0.74 0.07 60)" }}
              >
                REFLECT STUDIO
              </p>
              <div
                className="font-playfair mb-3"
                style={{
                  fontSize: "4.5rem",
                  color: "oklch(0.74 0.07 60)",
                  lineHeight: 1,
                }}
              >
                ✦
              </div>
              <h3
                className="font-playfair font-bold mb-2"
                style={{
                  fontSize: "1.75rem",
                  color: "oklch(0.95 0.01 60)",
                  letterSpacing: "-0.02em",
                }}
              >
                Gift Card
              </h3>
              <p
                className="font-inter text-sm"
                style={{ color: "oklch(0.58 0.01 60)" }}
              >
                Where Confidence Meets Luxury
              </p>
              <div
                className="mt-8 pt-5"
                style={{ borderTop: "1px solid oklch(0.74 0.07 60 / 0.25)" }}
              >
                <p
                  className="font-inter text-xs tracking-[0.3em]"
                  style={{ color: "oklch(0.48 0.01 60)" }}
                >
                  MYSURU, KARNATAKA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center reveal reveal-delay-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-inter text-xs tracking-[0.28em] px-14 py-4 transition-all duration-300 hover:opacity-85"
            style={{
              background: "oklch(0.74 0.07 60)",
              color: "oklch(0.1 0 0)",
            }}
            data-ocid="giftcard.primary_button"
          >
            GET GIFT CARD
          </a>
        </div>
      </div>
    </section>
  );
}
