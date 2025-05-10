
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProjectCard from '@/components/ProjectCard';

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

function ProjectsSection() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="inline-block py-1 px-3 mb-5 text-sm font-medium rounded-full bg-primary/10 text-primary">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Explore some of our recent work that showcases our expertise and creativity.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectCard 
            title="E-Commerce Platform"
            category="Web Development"
            imageSrc= "images/e-commerce.jpg"
            link="https://www.figma.com/proto/o9uLNmQ8BfqnjQbyrswmKy/NFT-Design--astrixio-?node-id=1-279&p=f&t=hSrEtzbvAfs8Vat8-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            description="A full-featured online store with payment processing, inventory management, and customer accounts."
            imageAlt="E-commerce platform screenshot"
          />
          <ProjectCard 
            title="Financial Dashboard"
            category="Web Application"
            imageSrc= "images/dashborad.jpg"
            link="#"
            description="Real-time financial data visualization dashboard for enterprise clients with advanced analytics."
            imageAlt="Financial dashboard interface"
          />
          <ProjectCard 
            title="Social Media App"
            category="Mobile & Web"
            imageSrc= "images/socialapp.jpg"
            link="https://www.figma.com/proto/9RlboBE0OJZgMzqREUJf0Q/Fitness-Application-Design---Prototypes--Community-?node-id=1-2&p=f&t=NWTlhYtBzgGNZGiX-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1404"
            description="Cross-platform social networking application with real-time messaging and content sharing."
            imageAlt="Social media app interface"
          />
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg" className="rounded-full">
            <Link to="/projects">View All Projects</Link>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
