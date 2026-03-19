import { Clock, MapPin, Phone } from "lucide-react";

export default function LocationSection() {
  return (
    // IMPROVEMENT 2: Functional section — tighter
    <section id="contact" className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          {/* IMPROVEMENT 1: Eyebrow with hairlines */}
          <div className="eyebrow-wrap">
            <p
              className="section-eyebrow"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              FIND US
            </p>
          </div>
          <h2
            className="font-playfair font-bold"
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)",
              color: "oklch(0.74 0.07 60)",
              letterSpacing: "-0.03em",
            }}
          >
            Visit The Studio Of Transformation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="reveal space-y-8">
            <div className="flex gap-5">
              <MapPin
                size={18}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "oklch(0.74 0.07 60)" }}
              />
              <div>
                <div
                  className="font-inter text-xs tracking-[0.22em] mb-2 uppercase"
                  style={{ color: "oklch(0.74 0.07 60)" }}
                >
                  Address
                </div>
                <p
                  className="font-inter text-sm leading-[1.8]"
                  style={{ color: "oklch(0.72 0.01 60)" }}
                >
                  556, Contour Rd, Gokulam 3rd Stage
                  <br />
                  Mysuru, Karnataka
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Phone
                size={18}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "oklch(0.74 0.07 60)" }}
              />
              <div>
                <div
                  className="font-inter text-xs tracking-[0.22em] mb-2 uppercase"
                  style={{ color: "oklch(0.74 0.07 60)" }}
                >
                  Phone
                </div>
                <a
                  href="tel:+919916265586"
                  className="font-inter text-sm hover:opacity-70 transition-opacity"
                  style={{ color: "oklch(0.72 0.01 60)" }}
                >
                  +91 99162 65586
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <Clock
                size={18}
                className="flex-shrink-0 mt-0.5"
                style={{ color: "oklch(0.74 0.07 60)" }}
              />
              <div>
                <div
                  className="font-inter text-xs tracking-[0.22em] mb-2 uppercase"
                  style={{ color: "oklch(0.74 0.07 60)" }}
                >
                  Hours
                </div>
                <div
                  className="font-inter text-sm space-y-1 leading-[1.8]"
                  style={{ color: "oklch(0.72 0.01 60)" }}
                >
                  <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
                  <p>Sunday: 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <div
              className="p-7 mt-2"
              style={{
                borderLeft: "2px solid oklch(0.74 0.07 60 / 0.6)",
                background: "oklch(0.115 0 0)",
              }}
            >
              <p
                className="font-playfair italic"
                style={{
                  fontSize: "1.15rem",
                  color: "oklch(0.74 0.07 60)",
                  lineHeight: 1.5,
                }}
              >
                &ldquo;Step in ordinary.
                <br />
                Walk out unforgettable.&rdquo;
              </p>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div
              className="overflow-hidden"
              style={{ border: "1px solid oklch(0.74 0.07 60 / 0.35)" }}
            >
              <iframe
                src="https://maps.google.com/maps?q=556+Contour+Road+Gokulam+3rd+Stage+Mysuru+Karnataka&output=embed"
                width="100%"
                height="420"
                style={{
                  border: 0,
                  filter: "grayscale(40%) contrast(1.05) brightness(0.92)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Reflect Studio Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
