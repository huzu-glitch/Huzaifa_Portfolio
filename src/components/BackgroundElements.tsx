import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const BackgroundElements = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Large Circle - Top Right */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
      />

      {/* Medium Circle - Left */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-accent/10 blur-2xl"
      />

      {/* Small Accent Circle */}
      <motion.div
        style={{ y: y3, rotate }}
        className="absolute top-2/3 right-1/4 w-32 h-32 rounded-full border-2 border-accent/20"
      />

      {/* Decorative Lines */}
      <motion.svg
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 w-64 h-64 opacity-10"
        viewBox="0 0 200 200"
      >
        <path
          d="M10,80 Q95,10 180,80 T350,80"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-accent"
        />
        <path
          d="M10,120 Q95,50 180,120 T350,120"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-accent"
        />
      </motion.svg>

      {/* Grid Dots Pattern */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-1/3 grid grid-cols-6 gap-4"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-accent/30"
          />
        ))}
      </motion.div>

      {/* Curved Line - Bottom */}
      <motion.svg
        style={{ y: y3 }}
        className="absolute bottom-0 left-0 w-full h-64 opacity-5"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0,150 Q300,50 600,150 T1200,150 L1200,300 L0,300 Z"
          fill="currentColor"
          className="text-accent"
        />
      </motion.svg>

      {/* Floating Shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/3 w-16 h-16 border border-accent/20 rounded-lg"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-accent/5 rounded-full"
      />
    </div>
  );
};

export default BackgroundElements;
