import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Typewriter } from 'react-simple-typewriter';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function HeroSection() {
  const [phase, setPhase] = useState('zigzag');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('pop');
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-black text-white">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        className="absolute top-0 left-0 w-full h-full z-0"
        init={async (main) => await loadFull(main)}
        options={{
          particles: {
            number: { value: 25 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.2 },
            shape: { type: 'circle' },
          },
          fullScreen: false,
          background: { color: 'transparent' },
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          {/* TEXT BLOCK */}
          <div className="max-w-3xl mb-10 md:mb-0 md:mr-10">
            <motion.span
              className="inline-block py-1 px-3 mb-5 text-sm font-medium rounded-full bg-primary/10 text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Fullstack Development Company
            </motion.span>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.02, textShadow: '0px 0px 8px rgba(255,255,255,0.6)' }}
            >
              We Build Digital Experiences That Matter
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Astrixio transforms your ideas into powerful, scalable, and beautiful digital solutions. We specialize in fullstack development that drives results.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                size="lg"
                className="rounded-full transition-all hover:scale-105 hover:shadow-lg hover:bg-primary/90"
              >
                <Link to="/contact">Get Started</Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full transition-all hover:scale-105 hover:shadow-md"
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </motion.div>
          </div>

          {/* ANIMATED LOGO - ZIGZAG */}
          {phase === 'zigzag' && (
            <motion.div
              className="absolute top-10 left-0 w-24 h-24 md:w-32 md:h-32 z-10"
              initial={{ opacity: 0, x: -100, y: 0, scale: 0.8 }}
              animate={{
                x: [0, 150, 300, 450, 600, 450, 300, 150, 120, 0],
                y: [0, -160, 180, -180, 160, 180, -170, 140, -150],
                opacity: [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 8,
                ease: 'easeInOut',
              }}
            >
              <div className="glow-border p-1">
                <img
                  src="images/Astrixio_Logo-removebg-preview.png"
                  alt="Astrixio Logo"
                  className="w-full h-full object-contain rounded-full bg-primary/10 p-2 shadow-xl"
                />
              </div>
            </motion.div>
          )}

      {/* FINAL LOGO SETTLE + PULSE */}
{phase === 'pop' && (
  <motion.div
    className="absolute top-[19vh] left-[65vw] transform -translate-x-1/2 -translate-y-1/2 w-[12vw] h-[12vw] md:w-[8vw] md:h-[8vw] z-10"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 1,
      scale: [0.8, 2.4, 1.8],
      rotate: [0, 360],
    }}
    transition={{
      opacity: { duration: 0.8 },
      scale: { duration: 1.2, ease: 'easeOut' },
      rotate: {
        repeat: Infinity,
        duration: 20,
        ease: 'linear',
      },
    }}
  >
    <div className="glow-border p-1">
      <motion.img
        src="images/Astrixio_Logo-removebg-preview.png"
        alt="Astrixio Logo"
        className="w-full h-full object-contain rounded-full glow-effect"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  </motion.div>
)}

          {/* TYPEWRITER EFFECT */}
          {phase === 'pop' && (
            <motion.div
              className="absolute top-[55%] left-[82%] text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <Typewriter
                words={['ASTRIXIO']}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
