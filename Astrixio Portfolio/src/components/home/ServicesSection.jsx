
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Layers, Zap } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function ServicesSection() {
  return (
    <section className="py-20 bg-secondary/20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="inline-block py-1 px-3 mb-5 text-sm font-medium rounded-full bg-primary/10 text-primary">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do Best</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Our comprehensive suite of development services designed to meet all your digital needs.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServiceCard 
            icon={<Code className="h-10 w-10 text-primary" />}
            title="Frontend Development"
            description="We create responsive, intuitive user interfaces using modern frameworks like React, Vue, and Angular."
          />
          <ServiceCard 
            icon={<Database className="h-10 w-10 text-primary" />}
            title="Backend Development"
            description="Robust server-side solutions with Node.js, Python, and Java to power your applications."
          />
          <ServiceCard 
            icon={<Globe className="h-10 w-10 text-primary" />}
            title="Web Applications"
            description="Full-featured web applications that deliver exceptional user experiences across all devices."
          />
          <ServiceCard 
            icon={<Layers className="h-10 w-10 text-primary" />}
            title="API Development"
            description="Custom API solutions that connect your systems and enable seamless data exchange."
          />
          <ServiceCard 
            icon={<Zap className="h-10 w-10 text-primary" />}
            title="Performance Optimization"
            description="Speed up your applications with our expert optimization techniques."
          />
          <ServiceCard 
            icon={<Code className="h-10 w-10 text-primary" />}
            title="DevOps & Deployment"
            description="Streamlined deployment processes and infrastructure management for reliable applications."
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
