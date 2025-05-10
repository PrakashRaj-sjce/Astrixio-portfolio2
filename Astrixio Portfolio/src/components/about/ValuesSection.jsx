import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
    icon: "💡"
  },
  {
    title: "Client Success",
    description: "Your success is our priority. We work closely with you to achieve your digital goals.",
    icon: "🎯"
  },
  {
    title: "Technical Excellence",
    description: "We maintain the highest standards in code quality, performance, and security.",
    icon: "⚡"
  },
  {
    title: "Continuous Learning",
    description: "We stay ahead of the curve by constantly learning and adapting to new technologies.",
    icon: "📚"
  },
  {
    title: "Integrity & Transparency",
    description: "We believe in ethical practices, trust, and open communication at every stage of collaboration.",
    icon: "🛡️"
  },
  {
    title: "Scalability & Performance",
    description: "We design robust architectures that scale efficiently while maintaining peak performance.",
    icon: "🚀"
  },
  {
    title: "User-Centric Design",
    description: "Our solutions prioritize user experience, making interactions smooth, engaging, and intuitive.",
    icon: "👨‍💻"
  },
  {
    title: "Collaboration & Teamwork",
    description: "We foster a culture of collaboration where every idea contributes to better innovation.",
    icon: "🤝"
  },
];

const teamMembers = [
  { name: "Prakash", role: "Lead Developer", img: "/images/prakash.jpg" },
  { name: "Anjali", role: "UI/UX Designer", img: "/images/anjali.jpg" },
  { name: "Rahul", role: "Data Scientist", img: "/images/rahul.jpg" },
  { name: "Meera", role: "Cloud Engineer", img: "/images/meera.jpg" },
  { name: "Vikram", role: "Cybersecurity Specialist", img: "/images/vikram.jpg" },
];

const ValuesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-background/50 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-primary/10 transition-all hover:shadow-xl"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl mb-4"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Team Details Section
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Meet Our Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-background/50 backdrop-blur-md rounded-xl p-6 shadow-lg border border-primary/10 transition-all hover:shadow-lg text-center"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary"
                  />
                  <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                  <p className="text-foreground/80">{member.role}</p>
                </motion.div>
              ))}
            </div> */}
          {/* </motion.div> */}

        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;