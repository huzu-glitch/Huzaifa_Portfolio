import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("home")}
            className="hover:bg-secondary transition-colors"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("skills")}
            className="hover:bg-secondary transition-colors"
          >
            Skills
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("projects")}
            className="hover:bg-secondary transition-colors"
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contact")}
            className="hover:bg-secondary transition-colors"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
