import { ChevronDown } from "lucide-react";

interface Props {
  onBook: () => void;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  id: string;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `p${i}`,
    x: (i * 37 + 11) % 97,
    y: (i * 53 + 7) % 89,
    size: (i % 3) + 1.5,
    duration: 6 + (i % 8),
    delay: i % 8,
  }));
}

const particles = generateParticles(25);

export default function HeroSection({ onBook }: Props) {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            bottom: `-${p.size * 2}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: 0,
          }}
        />
      ))}

      <div
        className="hero-glow absolute left-1/2 top-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          className="font-inter text-xs tracking-[0.4em] mb-6"
          style={{ color: "oklch(0.74 0.07 60)" }}
        >
          LUXURY HAIR &amp; SKIN STUDIO — MYSURU
        </p>
        <h1
          className="font-playfair font-bold leading-none mb-6 text-white"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Reflect Your
          <br />
          <span style={{ color: "oklch(0.74 0.07 60)" }}>True Power</span>
        </h1>
        <p
          className="font-inter text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "oklch(0.9 0.01 60)" }}
        >
          Luxury Hair &amp; Skin Transformations For The Modern You
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={onBook}
            className="font-inter text-xs tracking-[0.25em] px-10 py-4 font-medium transition-all duration-300 hover:opacity-90"
            style={{
              background: "oklch(0.74 0.07 60)",
              color: "oklch(0.1 0 0)",
            }}
            data-ocid="hero.primary_button"
          >
            BOOK LUXURY SESSION
          </button>
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-inter text-xs tracking-[0.25em] px-10 py-4 border transition-all duration-300 hover:bg-gold/10"
            style={{
              borderColor: "oklch(0.74 0.07 60)",
              color: "oklch(0.74 0.07 60)",
            }}
            data-ocid="hero.secondary_button"
          >
            VIEW SERVICES
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-down">
        <button
          type="button"
          onClick={scrollToServices}
          className="text-gold/60 hover:text-gold transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
