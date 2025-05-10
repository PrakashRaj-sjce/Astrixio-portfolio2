
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Globe, Layers, Zap, Server, Shield, Smartphone, Cpu, BarChart, Workflow, ZapOff, DatabaseZap, SearchCheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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

function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="hero-blob"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.span 
              className="inline-block py-1 px-3 mb-5 text-sm font-medium rounded-full bg-primary/10 text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Services
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Comprehensive Development Solutions
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              From concept to deployment, we offer end-to-end development services tailored to your unique business needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
              description="We create responsive, intuitive user interfaces using modern frameworks like React, Vue, and Angular. Our frontend solutions are optimized for performance and user experience across all devices."
              detailed={true}
            />
            <ServiceCard 
              icon={<Database className="h-10 w-10 text-primary" />}
              title="Backend Development"
              description="Robust server-side solutions with Node.js, Python, and Java to power your applications. We build scalable, secure backends that can handle your business logic and data management needs."
              detailed={true}
            />
            <ServiceCard 
              icon={<Globe className="h-10 w-10 text-primary" />}
              title="Web Applications"
              description="Full-featured web applications that deliver exceptional user experiences across all devices. From simple websites to complex web platforms, we build solutions that engage users and drive results."
              detailed={true}
            />
            <ServiceCard 
              icon={<Layers className="h-10 w-10 text-primary" />}
              title="API Development"
              description="Custom API solutions that connect your systems and enable seamless data exchange. We design and implement RESTful and GraphQL APIs that are secure, well-documented, and optimized for performance."
              detailed={true}
            />
            <ServiceCard 
              icon={<Zap className="h-10 w-10 text-primary" />}
              title="Performance Optimization"
              description="Speed up your applications with our expert optimization techniques. We analyze and improve your existing applications to enhance loading times, reduce resource usage, and provide a smoother user experience."
              detailed={true}
            />
            <ServiceCard 
              icon={<Server className="h-10 w-10 text-primary" />}
              title="DevOps & Deployment"
              description="Streamlined deployment processes and infrastructure management for reliable applications. We set up CI/CD pipelines, containerization, and cloud infrastructure to ensure your applications run smoothly."
              detailed={true}
            />
            <ServiceCard 
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="Security Implementation"
              description="Protect your applications and data with our comprehensive security solutions. We implement authentication, authorization, encryption, and other security measures to safeguard your digital assets."
              detailed={true}
            />
            <ServiceCard 
              icon={<Smartphone className="h-10 w-10 text-primary" />}
              title="Mobile Development"
              description="Cross-platform and native mobile applications that provide seamless experiences on iOS and Android. We use React Native, Flutter, and native technologies to build high-performance mobile apps."
              detailed={true}
            />
            <ServiceCard 
              icon={<Cpu className="h-10 w-10 text-primary" />}
              title="AI & Machine Learning"
              description="Intelligent solutions that leverage the power of AI and machine learning. We integrate AI capabilities into your applications to enable data analysis, predictive features, and automation."
              detailed={true}
            />
            <ServiceCard 
              icon={<BarChart className="h-10 w-10 text-primary" />}
              title="Data Visualization"
              description="Transform complex data into intuitive, interactive visualizations. We create dashboards and reports that help you understand your data and make informed decisions."
              detailed={true}
            />
            
            <ServiceCard 
              icon={<Workflow className="h-10 w-10 text-primary" />}
              title="Workflow Automation"
              description="Streamline your business processes with custom automation solutions. We build tools that reduce manual work, minimize errors, and increase productivity across your organization."
              detailed={true}
            />
             <ServiceCard 
              icon={<SearchCheckIcon className="h-10 w-10 text-primary" />}
              title="Search Engine Optimization"
              description="SEO (Search Engine Optimization) is the process of improving a website's visibility on search engines like Google. The main goal of SEO is to increase organic (non-paid) traffic by ensuring that the website appears higher in search engine results for relevant queries."
              detailed={true}
            />
            

          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block py-1 px-3 mb-5 text-sm font-medium rounded-full bg-primary/10 text-primary">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our proven development methodology ensures successful project delivery.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-background p-8 rounded-xl card-hover relative"
              variants={fadeIn}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-4 mt-4">Discovery</h3>
              <p className="text-muted-foreground">We start by understanding your business, goals, and requirements through in-depth consultations.</p>
            </motion.div>
            
            <motion.div 
              className="bg-background p-8 rounded-xl card-hover relative"
              variants={fadeIn}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-4 mt-4">Planning</h3>
              <p className="text-muted-foreground">We create detailed project plans, architecture designs, and wireframes to map out the development process.</p>
            </motion.div>
            
            <motion.div 
              className="bg-background p-8 rounded-xl card-hover relative"
              variants={fadeIn}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-4 mt-4">Development</h3>
              <p className="text-muted-foreground">Our team builds your solution using agile methodologies, with regular updates and feedback cycles.</p>
            </motion.div>
            
            <motion.div 
              className="bg-background p-8 rounded-xl card-hover relative"
              variants={fadeIn}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">4</div>
              <h3 className="text-xl font-bold mb-4 mt-4">Delivery & Support</h3>
              <p className="text-muted-foreground">We deploy your solution and provide ongoing maintenance and support to ensure long-term success.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="inline-block py-1 px-3 mb-5 text-sm font-medium rounded-full bg-primary/10 text-primary">Our Tech Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We leverage the latest technologies and frameworks to build modern, scalable solutions.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Docker', 'GraphQL', 'Vue.js', 'Next.js', 'TailwindCSS'].map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-background p-6 rounded-xl text-center card-hover"
                variants={fadeIn}
              >
                <p className="font-bold">{tech}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-primary/10 rounded-3xl p-10 md:p-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 grid-pattern opacity-20"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-muted-foreground mb-8">Contact us today to discuss your requirements and how we can help bring your vision to life.</p>
              <Button size="lg" className="rounded-full">
                <Link to="/contact">Get in Touch</Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
