
import React from 'react';
import { motion } from 'framer-motion';

function BackgroundAnimation() {
  return (
    <div className="background-animation" aria-hidden="true">
      <motion.div 
        className="background-animation-shape"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div 
        className="background-animation-shape"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      />
       <motion.div 
        className="background-animation-shape"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeOut" }}
      />
       <motion.div 
        className="background-animation-shape"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
      />
    </div>
  );
}

export default BackgroundAnimation;
