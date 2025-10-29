import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackgroundElements from "@/components/BackgroundElements";

const Index = () => {
  return (
    <div className="relative">
      <BackgroundElements />
      <ScrollProgressBar />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border text-center text-dim scroll-snap-align-none">
        <p>© 2025 Huzaifa Amin. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
