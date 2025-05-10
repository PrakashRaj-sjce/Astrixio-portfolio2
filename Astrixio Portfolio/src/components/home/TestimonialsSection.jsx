
import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';

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

function TestimonialsSection() {
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
          <span className="inline-block py-1 px-3 mb-5 text-sm font-medium rounded-full bg-primary/10 text-primary">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Don't just take our word for it. Here's what our clients have to say about working with us.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TestimonialCard 
            quote="Astrixio transformed our outdated platform into a modern, user-friendly system that has significantly improved our customer engagement."
            author="Santhosh"
            position="SunTech Computer."
          />
          <TestimonialCard 
            quote="The team at Astrixio delivered our project on time and exceeded our expectations. Their technical expertise and attention to detail is impressive."
            author="Selva Kumar"
            position="Agrio Solutions"
          />
          <TestimonialCard 
            quote="Working with Astrixio was a game-changer for our business. They understood our needs and delivered a solution that has helped us scale rapidly."
            author="Vikram"
            position="Shoe-Retailer"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
