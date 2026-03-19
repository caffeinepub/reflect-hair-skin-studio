import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  onBook: () => void;
}

const navLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "TEAM", href: "#team" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header({ onBook }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      style={{
        borderBottom: scrolled ? "1px solid oklch(0.74 0.07 60 / 0.2)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="font-playfair text-2xl tracking-[0.25em] text-gold font-bold"
          data-ocid="nav.link"
        >
          REFLECT
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNav(link.href)}
              className="font-inter text-xs tracking-[0.2em] text-off-white hover:text-gold transition-colors duration-300"
              data-ocid="nav.link"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={onBook}
            className="font-inter text-xs tracking-[0.2em] px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            data-ocid="nav.primary_button"
          >
            BOOK NOW
          </button>
        </nav>

        <button
          type="button"
          className="md:hidden text-gold"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-charcoal border-t border-gold/20 py-6 px-6">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNav(link.href)}
                className="font-inter text-xs tracking-[0.2em] text-left text-off-white hover:text-gold transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onBook();
              }}
              className="font-inter text-xs tracking-[0.2em] px-6 py-2.5 border border-gold text-gold text-center hover:bg-gold hover:text-charcoal transition-all duration-300 w-full"
              data-ocid="nav.primary_button"
            >
              BOOK NOW
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
