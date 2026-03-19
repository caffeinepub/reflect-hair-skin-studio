interface Props {
  onBook: () => void;
}

const tiers = [
  {
    name: "Silver",
    price: "₹2,999",
    period: "/month",
    perks: [
      "10% off all services",
      "Priority booking",
      "Monthly hair consultation",
      "Welcome gift kit",
    ],
    featured: false,
  },
  {
    name: "Gold",
    price: "₹5,999",
    period: "/month",
    perks: [
      "20% off all services",
      "Express priority booking",
      "Bi-weekly skin consultation",
      "Premium product samples",
      "Birthday special treatment",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    price: "₹9,999",
    period: "/month",
    perks: [
      "30% off all services",
      "Dedicated personal stylist",
      "Unlimited consultations",
      "Quarterly luxury kit",
      "VIP event invitations",
      "Free monthly treatment",
    ],
    featured: false,
  },
];

const offers = [
  {
    title: "Bridal Season Special",
    desc: "Complete bridal package at 25% off. Book 3+ months in advance.",
    tag: "LIMITED TIME",
  },
  {
    title: "First Visit Welcome",
    desc: "New clients receive 15% off their first service and a complimentary consultation.",
    tag: "NEW CLIENTS",
  },
  {
    title: "Referral Rewards",
    desc: "Refer a friend and both receive ₹500 credit toward any service.",
    tag: "ONGOING",
  },
];

export default function MembershipSection({ onBook }: Props) {
  return (
    // IMPROVEMENT 2: Dense section — tighter vertical padding
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          {/* IMPROVEMENT 1: Eyebrow with hairlines */}
          <div className="eyebrow-wrap">
            <p
              className="section-eyebrow"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              EXCLUSIVE PRIVILEGES
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
            Exclusive Membership
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-24">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`membership-card reveal reveal-delay-${i + 1} p-9 border`}
              style={{
                borderColor: tier.featured
                  ? "oklch(0.74 0.07 60)"
                  : "oklch(0.74 0.07 60 / 0.25)",
                background: tier.featured
                  ? "oklch(0.15 0 0)"
                  : "oklch(0.115 0 0)",
                position: "relative",
              }}
              data-ocid={`membership.item.${i + 1}`}
            >
              {tier.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 font-inter text-xs tracking-widest px-4 py-1"
                  style={{
                    background: "oklch(0.74 0.07 60)",
                    color: "oklch(0.1 0 0)",
                  }}
                >
                  MOST POPULAR
                </div>
              )}
              <div
                className="font-inter text-xs tracking-[0.3em] mb-5"
                style={{ color: "oklch(0.74 0.07 60)" }}
              >
                {tier.name.toUpperCase()} TIER
              </div>
              <div className="flex items-baseline gap-1.5 mb-7">
                <span
                  className="font-playfair font-bold"
                  style={{
                    fontSize: "2.75rem",
                    color: "oklch(0.95 0.01 60)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {tier.price}
                </span>
                <span
                  className="font-inter text-sm"
                  style={{ color: "oklch(0.48 0.01 60)" }}
                >
                  {tier.period}
                </span>
              </div>
              <ul className="space-y-3.5 mb-9">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "oklch(0.74 0.07 60)" }}
                    >
                      ✦
                    </span>
                    <span
                      className="font-inter text-sm leading-snug"
                      style={{ color: "oklch(0.7 0.01 60)" }}
                    >
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={onBook}
                className="w-full font-inter text-xs tracking-[0.22em] py-3.5 border transition-all duration-300 hover:opacity-85"
                style={{
                  borderColor: "oklch(0.74 0.07 60)",
                  color: tier.featured
                    ? "oklch(0.1 0 0)"
                    : "oklch(0.74 0.07 60)",
                  background: tier.featured
                    ? "oklch(0.74 0.07 60)"
                    : "transparent",
                }}
                data-ocid="membership.primary_button"
              >
                JOIN {tier.name.toUpperCase()}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mb-14 reveal">
          <div className="eyebrow-wrap">
            <p
              className="section-eyebrow"
              style={{ color: "oklch(0.74 0.07 60)" }}
            >
              CURRENT PROMOTIONS
            </p>
          </div>
          <h2
            className="font-playfair font-bold"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "oklch(0.74 0.07 60)",
              letterSpacing: "-0.03em",
            }}
          >
            Exclusive Offers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {offers.map((offer, i) => (
            <div
              key={offer.title}
              className={`reveal reveal-delay-${i + 1} p-8 border-l-2`}
              style={{
                borderColor: "oklch(0.74 0.07 60)",
                background: "oklch(0.115 0 0)",
              }}
              data-ocid={`offers.item.${i + 1}`}
            >
              <div
                className="font-inter text-xs tracking-[0.22em] mb-4 inline-block px-3 py-1"
                style={{
                  background: "oklch(0.74 0.07 60 / 0.12)",
                  color: "oklch(0.74 0.07 60)",
                }}
              >
                {offer.tag}
              </div>
              <h3
                className="font-playfair font-bold mb-3"
                style={{
                  fontSize: "1.2rem",
                  color: "oklch(0.93 0.01 60)",
                  letterSpacing: "-0.01em",
                }}
              >
                {offer.title}
              </h3>
              <p
                className="font-inter text-sm leading-[1.7]"
                style={{ color: "oklch(0.58 0.01 60)" }}
              >
                {offer.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
