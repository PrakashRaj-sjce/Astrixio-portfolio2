import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const StorySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Story
          </h2>

          <div className="space-y-12">
            <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Startup Spirit, Big Impact</h3>
                <p className="text-foreground/80">
                  Astrixio is an ambitious, fast-growing startup, redefining digital innovation with smart web solutions, AI integration, and cutting-edge cloud technologies.
                  We specialize in high-performance digital platforms for businesses, educational institutes, healthcare providers, and e-commerce brands.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
            </motion.div>

            {/* Expanded Domains with Content Sections */}
            <motion.div {...fadeInUp} className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">AI & Machine Learning</h3>
                <p className="text-foreground/80">
                  AI-driven solutions are shaping the future. From automated chatbots to advanced predictive analytics,
                  we craft intelligent applications that elevate business efficiency and user engagement.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-4xl">🤖</span>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Data Science & Big Data Analytics</h3>
                <p className="text-foreground/80">
                  We transform raw data into actionable insights using AI-powered analytics, visualization tools, and dynamic dashboards,
                  helping businesses make data-driven decisions with precision.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Cloud Computing & DevOps</h3>
                <p className="text-foreground/80">
                  Scalable infrastructure is the backbone of modern digital solutions. Using Docker, Kubernetes, and hybrid cloud models,
                  we deploy secure, high-performance applications that grow with business demands.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-4xl">☁️</span>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Cybersecurity & Blockchain</h3>
                <p className="text-foreground/80">
                  Security is at the core of digital transformation. We provide end-to-end encryption, blockchain authentication, and cybersecurity frameworks
                  to protect data and transactions.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-4xl">🔒</span>
              </div>
            </motion.div>

            {/* Additional Domains */}
            <motion.div {...fadeInUp} className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Internet of Things (IoT)</h3>
                <p className="text-foreground/80">
                  IoT applications revolutionize industries by enabling real-time data exchange and automation for smart devices.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-4xl">📡</span>
              </div>
            </motion.div>

            {/* Featured Real-World Projects */}
            <motion.div {...fadeInUp} className="mt-16">
              <h3 className="text-3xl font-semibold text-primary mb-6">Featured Projects</h3>
              <ul className="list-disc pl-5 text-lg text-foreground/80 space-y-3">
                <li>Agrios – AI-powered Agricultural E-commerce Platform</li>
                <li>Shop All Shoes – Next-gen Footwear Retail Experience with ML-based Product Recommendations</li>
                <li>Sun Tech Computers – Smart Educational Institute AI Dashboard</li>
                <li>Web3 Energy Trading – Blockchain-driven decentralized Energy Sharing Marketplace</li>
              </ul>
            </motion.div>

            {/* Teamwork & Problem-Solving */}
            <motion.div {...fadeInUp} className="mt-12 text-center">
              <h3 className="text-3xl font-semibold text-primary mb-6">Teamwork & Real-World Problem Solving</h3>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto mb-8">
                At Astrixio, collaboration is at the heart of everything we do. Our team of engineers, strategists, and designers work together to develop
                innovative solutions, tackling industry challenges with a problem-solving approach that ensures reliability, security, and future-ready applications.
              </p>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#contact"
                className="inline-block px-6 py-3 rounded-full bg-primary hover:bg-secondary transition-all text-white font-semibold text-lg shadow-md"
              >
                Join Our Mission
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;