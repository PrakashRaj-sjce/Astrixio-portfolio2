
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

function ServiceCard({ icon, title, description, detailed = false }) {
  return (
    <motion.div 
      className="bg-background p-8 rounded-xl card-hover"
      variants={fadeIn}
    >
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      {detailed && (
        <Link 
          to="/contact" 
          className="inline-flex items-center text-primary hover:underline"
        >
          <span>Learn more</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </motion.div>
  );
}

export default ServiceCard;
