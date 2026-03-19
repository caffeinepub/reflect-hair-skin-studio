import { Facebook, Instagram, Youtube } from "lucide-react";

const services = [
  "Hair Artistry",
  "Skin Rituals",
  "Color Mastery",
  "Hair Therapy",
  "Bridal Couture",
  "Men's Grooming",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const cafeLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer style={{ background: "oklch(0.07 0 0)" }}>
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.74 0.07 60 / 0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div
              className="font-playfair text-2xl tracking-[0.25em] font-bold mb-4"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              REFLECT
            </div>
            <p
              className="font-inter text-sm leading-relaxed mb-6"
              style={{ color: "oklch(0.55 0.01 60)" }}
            >
              Where Confidence Meets Luxury. Mysuru's premier hair and skin
              studio for the modern you.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                style={{ color: "oklch(0.74 0.07 60)" }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                style={{ color: "oklch(0.74 0.07 60)" }}
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                style={{ color: "oklch(0.74 0.07 60)" }}
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4
              className="font-inter text-xs tracking-[0.25em] mb-6"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              SERVICES
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .querySelector("#services")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="font-inter text-sm hover:opacity-70 transition-opacity text-left"
                    style={{ color: "oklch(0.55 0.01 60)" }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-inter text-xs tracking-[0.25em] mb-6"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              CONTACT
            </h4>
            <div
              className="font-inter text-sm space-y-3"
              style={{ color: "oklch(0.55 0.01 60)" }}
            >
              <p>556, Contour Rd, Gokulam 3rd Stage</p>
              <p>Mysuru, Karnataka</p>
              <a
                href="tel:+919916265586"
                className="block hover:opacity-70 transition-opacity"
              >
                +91 99162 65586
              </a>
              <p>Mon–Sat: 9 AM – 8 PM</p>
              <p>Sun: 10 AM – 6 PM</p>
            </div>
          </div>

          <div>
            <h4
              className="font-inter text-xs tracking-[0.25em] mb-6"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              STAY IN TOUCH
            </h4>
            <p
              className="font-inter text-sm mb-4"
              style={{ color: "oklch(0.55 0.01 60)" }}
            >
              Subscribe for exclusive offers and luxury tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 font-inter text-xs bg-transparent border border-r-0 outline-none placeholder:opacity-40"
                style={{
                  borderColor: "oklch(0.74 0.07 60 / 0.4)",
                  color: "oklch(0.9 0.01 60)",
                }}
                data-ocid="footer.input"
              />
              <button
                type="button"
                className="font-inter text-xs tracking-widest px-4 py-2.5 transition-opacity hover:opacity-80"
                style={{
                  background: "oklch(0.74 0.07 60)",
                  color: "oklch(0.1 0 0)",
                }}
                data-ocid="footer.submit_button"
              >
                GO
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="border-t px-6 py-5"
        style={{ borderColor: "oklch(0.74 0.07 60 / 0.15)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="font-inter text-xs"
            style={{ color: "oklch(0.4 0.01 60)" }}
          >
            &copy; {year} Reflect – Hair &amp; Skin Studio. All rights reserved.
          </p>
          <p
            className="font-inter text-xs"
            style={{ color: "oklch(0.4 0.01 60)" }}
          >
            Built with ❤️ using{" "}
            <a
              href={cafeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
