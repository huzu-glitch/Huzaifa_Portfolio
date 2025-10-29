import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const frontendSkills = [
    "React",
    "React Router 7",
    "Tailwind CSS",
    "Javascript",
  ];

  const backendSkills = [
    "Node.js",
    "Express",
    "PostgreSQL",
    "Javascript",
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <div className="container mx-auto px-6">
        <motion.div style={{ y }} className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            My <span className="accent-glow">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Frontend Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center accent-glow">
                Frontend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {frontendSkills.map((skill, index) => (
                  <SkillCard key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center accent-glow">
                Backend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {backendSkills.map((skill, index) => (
                  <SkillCard key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
