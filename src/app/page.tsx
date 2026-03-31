import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import VentureSection from "@/components/sections/VentureSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import AISection from "@/components/sections/AISection";
import ConnectSection from "@/components/sections/ConnectSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <VentureSection />
        <ExpertiseSection />
        <AISection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}
