import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "huzafaameen0900@gmail.com",
      link: "mailto:huzafaameen0900@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/huzu-glitch",
      link: "https://github.com/huzu-glitch",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/huzaifa-amin-09001p/e",
      link: "https://www.linkedin.com/in/huzaifa-amin-09001p/",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-6">
        <motion.div style={{ y }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Get In <span className="accent-glow">Touch</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-dim text-lg mb-12"
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </motion.p>

            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-6 rounded-xl border border-border hover:border-accent transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <contact.icon className="w-6 h-6 accent-glow" />
                    </div>
                    <div>
                      <p className="text-sm text-dim">{contact.label}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-accent hover:text-accent-foreground"
                    onClick={() => window.open(contact.link, "_blank")}
                  >
                    Connect
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
