import React from "react";
import { motion } from "framer-motion";

const domainTags = [
  { label: "Artificial Intelligence", icon: "🧠" },
  { label: "Machine Learning", icon: "📈" },
  { label: "Cloud Computing", icon: "☁️" },
  { label: "Data Science", icon: "📊" },
  { label: "Cyber Security", icon: "🔒" },
  { label: "Blockchain", icon: "🔗" },
  { label: "IoT", icon: "📡" },
  { label: "DevOps", icon: "⚙️" },
  { label: "AR / VR", icon: "🎮" },
  { label: "Quantum Computing", icon: "⚛️" }
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-primary/5 to-background py-24 px-4 flex items-center">
      {/* Hero Content */}
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6 leading-tight">
            Elevating Digital Innovation
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-8"
          >
            Pioneering cutting-edge technologies to deliver intelligent, scalable, and future-proof solutions.
          </motion.p>

          {/* Professional Domain Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex justify-center gap-3 flex-wrap mt-6"
          >
            {domainTags.map((tag, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center py-2 px-4 rounded-md bg-primary/10 hover:bg-primary/20 transition-all cursor-pointer text-sm font-medium flex items-center gap-2"
              >
                <span className="text-primary text-lg">{tag.icon}</span>
                <p>{tag.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-To-Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-8 flex justify-center gap-6 flex-wrap"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-4 px-8 rounded-full bg-primary hover:bg-secondary transition-all cursor-pointer text-white text-lg font-semibold shadow-lg"
            >
              🚀 Get Started
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/contact"
              className="text-center py-4 px-8 rounded-full bg-primary/10 hover:bg-primary/20 transition-all cursor-pointer text-primary text-lg font-semibold"
            >
              🔍 Explore Solutions
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Background Animation */}
      <motion.div
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 w-full h-[200px] bg-gradient-to-t from-background/80 to-transparent z-0"
      ></motion.div>
    </section>
  );
};

export default HeroSection;