import React from "react";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const stats = [
  { number: 25, suffix: "+", label: "Successful Projects", icon: "🚀" },
  { number: 10, suffix: "+", label: "Global Clients", icon: "🌎" },
  { number: 95, suffix: "%", label: "Satisfaction Rate", icon: "✅" },
  { number: 10, suffix: "+", label: "Goals Achieved A Year", icon: "🏆" },
  { number: 24, suffix: "/7", label: "Support Availability", icon: "📞" },
  { number: 15, suffix: "+", label: "Industry Domains Served", icon: "📊" },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-md rounded-xl p-10 text-center border border-primary/10 shadow-lg"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-extrabold text-primary">
                  <CountUp
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <p className="text-lg text-foreground/80 font-medium mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Partner with us to experience cutting-edge technologies, scalable solutions, and an unmatched commitment to excellence.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="/contact"
              className="mt-6 inline-block px-6 py-3 rounded-full bg-primary hover:bg-secondary transition-all text-white font-semibold text-lg shadow-md"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;