import { motion } from "framer-motion";
import heroProfile from "@/assets/hero-profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-gradient pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
              <img
                src={heroProfile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -inset-4 rounded-full bg-accent/20 -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center md:text-left max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="accent-glow text-bold">Huzaifa</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-dim mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-dim leading-relaxed">
              I'm a React and Node JS Web Developer, with hands on experience in Postgres Database.
            </p>
            <div className="mt-12 space-y-6 mb-2.5">
          <p className="text-lg flex items-start fascinate-regular">
            <span className="mr-2">✔︎</span> Experience with React and modern JavaScript frameworks
          </p>
          <p className="text-lg flex items-start fascinate-regular">
            <span className="mr-2">✔︎</span> Proficient in Node.js backend development
          </p>
          <p className="text-lg flex items-start fascinate-regular">
            <span className="mr-2">✔︎</span> Knowledgeable in Postgres Database management
          </p>
        </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
