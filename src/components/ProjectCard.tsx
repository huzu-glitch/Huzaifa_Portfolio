import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="bg-card rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/20"
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-dim mb-6 leading-relaxed">{description}</p>
      
      <div className="flex gap-3">
        <Button
          variant="outline"
          size="sm"
          className="gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
          onClick={() => window.open(githubUrl, "_blank")}
        >
          <Github className="w-4 h-4" />
          GitHub
        </Button>
        
        {liveUrl && (
          <Button
            size="sm"
            className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            onClick={() => window.open(liveUrl, "_blank")}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
