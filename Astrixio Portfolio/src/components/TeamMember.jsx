
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

function TeamMember({ name, position, bio }) {
  // Generate initials for the placeholder
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <motion.div 
      className="bg-background rounded-xl overflow-hidden card-hover"
      variants={fadeIn}
    >
      <div className="relative h-64 overflow-hidden bg-primary/10">
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary">
          {initials}
        </div>
        <img  className="w-full h-full object-cover" alt={`${name}, ${position} at Astrixio`} src="https://images.unsplash.com/photo-1692976001563-41fa7497d81d" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary mb-3">{position}</p>
        <p className="text-muted-foreground mb-4">{bio}</p>
        <div className="flex space-x-3">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default TeamMember;
