import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import BookingModal from "./components/BookingModal";
import CtaBanner from "./components/CtaBanner";
import CustomCursor from "./components/CustomCursor";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import GiftCardSection from "./components/GiftCardSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LocationSection from "./components/LocationSection";
import MembershipSection from "./components/MembershipSection";
import ServicesSection from "./components/ServicesSection";
import SoundToggle from "./components/SoundToggle";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 },
    );
    const els = document.querySelectorAll(".reveal");
    for (const el of els) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const openBooking = (service = "") => {
    setSelectedService(service);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-charcoal">
      <CustomCursor />
      <SoundToggle />
      <Header onBook={() => openBooking()} />
      <main>
        <HeroSection onBook={() => openBooking()} />
        <AboutSection />
        <ServicesSection onBook={openBooking} />
        <ExperienceSection />
        <GallerySection />
        <TestimonialsSection />
        <TeamSection />
        <MembershipSection onBook={() => openBooking()} />
        <GiftCardSection />
        <LocationSection />
        <CtaBanner onBook={() => openBooking()} />
      </main>
      <Footer />
      <WhatsAppButton />
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
