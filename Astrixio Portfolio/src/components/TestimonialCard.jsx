
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

function TestimonialCard({ quote, author, position }) {
  return (
    <motion.div 
      className="bg-background p-8 rounded-xl card-hover"
      variants={fadeIn}
    >
      <Quote className="h-8 w-8 text-primary/40 mb-4" />
      <p className="text-lg mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-4">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold">{author}</h4>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
