import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { EventSection } from "@/components/EventSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { MembersSection } from "@/components/MemberSection";
import { BackToTopButton } from "@/components/BackToTopSection";

export const OrchestraLandingPage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 500);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080706] text-[#f8f1e7]">
      <Header />
      <BackToTopButton show={showButton} />
      <HeroSection />
      <EventSection />
      <MembersSection />
      <ContactSection />
      <Footer />
    </main>
  );
};
