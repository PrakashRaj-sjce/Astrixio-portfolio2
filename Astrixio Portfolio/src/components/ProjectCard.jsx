import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

function ProjectCard({ title, category, description, imageAlt, imageSrc, link }) {
  return (
    <motion.div 
      className="bg-background rounded-xl overflow-hidden card-hover"
      variants={fadeIn}
    >
      <div className="relative h-56 overflow-hidden">
        <img className="w-full h-full object-cover" alt={imageAlt} src={imageSrc} />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4">
          <span className="inline-block py-1 px-3 text-xs font-medium rounded-full bg-primary/20 text-primary">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:underline"
        >
          <span>View Project</span>
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;



{/*         
        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block py-1 px-2 text-xs rounded-md bg-secondary/50 text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )} */}