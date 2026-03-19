const team = [
  {
    name: "Aryan Sharma",
    role: "Master Colorist",
    image: "/assets/generated/stylist-2.dim_600x800.jpg",
    bio: "Specialist in balayage and color correction with 8+ years experience.",
  },
  {
    name: "Priya Nair",
    role: "Hair Artistry Director",
    image: "/assets/generated/stylist-1.dim_600x800.jpg",
    bio: "Award-winning stylist trained in Paris and Mumbai's top fashion houses.",
  },
  {
    name: "Meera Rao",
    role: "Skin Rituals Expert",
    image: "/assets/generated/stylist-3.dim_600x800.jpg",
    bio: "Certified dermal therapist specializing in advanced skin rejuvenation.",
  },
  {
    name: "Kiran Patel",
    role: "Bridal Couture Specialist",
    image: "/assets/generated/stylist-4.dim_600x800.jpg",
    bio: "Bespoke bridal stylist with over 200 weddings in his portfolio.",
  },
];

export default function TeamSection() {
  return (
    // IMPROVEMENT 2: Team is a gallery — let it breathe generously
    <section
      id="team"
      className="py-28 md:py-40"
      style={{ background: "oklch(0.92 0.02 70)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          {/* IMPROVEMENT 1: Eyebrow with hairlines */}
          <div className="eyebrow-wrap">
            <p
              className="section-eyebrow"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              THE ARTISTS
            </p>
          </div>
          <h2
            className="font-playfair font-bold"
            style={{
              fontSize: "clamp(2.8rem, 5vw, 5rem)",
              color: "oklch(0.22 0.03 50)",
              letterSpacing: "-0.03em",
            }}
          >
            Meet The Artists
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`stylist-card reveal reveal-delay-${i + 1} group cursor-pointer`}
              data-ocid={`team.item.${i + 1}`}
            >
              <div
                className="relative overflow-hidden"
                style={{ height: "400px" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "grayscale(25%) contrast(1.05)" }}
                />
                <div
                  className="bio-overlay absolute inset-0 flex flex-col justify-end p-6"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
                  }}
                >
                  <div
                    className="font-playfair text-sm font-medium italic mb-2"
                    style={{ color: "oklch(0.74 0.07 60)" }}
                  >
                    {member.role}
                  </div>
                  <p
                    className="font-inter text-xs leading-[1.65]"
                    style={{ color: "oklch(0.82 0.01 60)" }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>

              <div
                className="px-5 py-4"
                style={{
                  background: "oklch(0.115 0 0)",
                  borderTop: "1px solid oklch(0.74 0.07 60 / 0.35)",
                }}
              >
                <h3
                  className="font-playfair font-bold"
                  style={{
                    fontSize: "1.1rem",
                    color: "oklch(0.93 0.01 60)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="font-inter text-xs tracking-[0.18em] uppercase mt-1"
                  style={{ color: "oklch(0.74 0.07 60 / 0.8)" }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
