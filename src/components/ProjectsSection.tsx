import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const projects = [
    {
      title: "Movie Discovery App",
      description:
        "Movie discovery app built with React and Node.js using the TMDB API. Allows users to browse, search, and explore movie details through an intuitive and responsive interface.",
      githubUrl: "https://github.com/huzu-glitch/Film-Fest",
      liveUrl: "https://plotwist-1.netlify.app/",
    },
    {
      title: "Task Management App",
      description:
        "A simple and responsive task management app built with React. Enables users to add, edit, and delete tasks with smooth local state handling and real-time updates..",
      githubUrl: "https://github.com/huzu-glitch/React-to-do",
      liveUrl: "https://todolist-web1.netlify.app/",
    },
    {
      title: "Food Finder App",
      description:
        "Full-stack recipe finder app that lets users search for dishes, view details, and save favorites. Includes user authentication, session management, and local PostgreSQL database integration using the Spoonacular API.",
      githubUrl: "https://github.com/huzu-glitch/FoodFinder",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 bg-secondary/30"
    >
      <div className="container mx-auto px-6">
        <motion.div style={{ y }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Featured <span className="accent-glow">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
