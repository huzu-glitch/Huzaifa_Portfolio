import { motion } from "framer-motion";

interface SkillCardProps {
  skill: string;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(56, 189, 248, 0.3)",
      }}
      className="skill-card-bg rounded-xl p-6 text-center cursor-pointer transition-all duration-300 border border-border hover:border-accent"
    >
      <p className="text-lg font-medium">{skill}</p>
    </motion.div>
  );
};

export default SkillCard;
