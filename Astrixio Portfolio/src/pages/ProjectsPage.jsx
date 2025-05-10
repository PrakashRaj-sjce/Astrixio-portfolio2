
import React, { useState } from 'react';
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

// Project categories
const categories = ['All', 'Web Development', 'Social-Media', 'E-Commerce', 'Education', 'ML-Integrated','UI/UX'];

// Project data
const projects = [
  {
    id: 1,
    title: 'Agrios',
    category: 'E-Commerce',
    description: 'Agrios is a modern, eco-conscious agriculture products website that provides a seamless shopping experience for customers seeking fresh and organic farm products. Designed with a green-themed UI to reflect sustainability, this site blends earthy aesthetics with cutting-edge technology.',
    imageSrc: 'images/Agrio.jpg',
    imageAlt: 'E-commerce platform screenshot',
    link: 'https://preview.themeforest.net/item/agrios-agriculture-farming-wordpress-theme/full_screen_preview/38851227?_ga=2.14428149.332354376.1745414575-336190834.1745323513',
    keyfeatures: 'Dynamic Product Catalog , Smart Filtering System, Farm-to-Table Integration, Subscription-Based Deliveries, Farmer Stories & Blog Section, Multi-language Support, Mobile-First Design.',
    techonologies: 'React, Node.js, MongoDB, Express.js, Stripe API, AWS S3, Tailwind CSS, Redux Toolkit, Next.js'
  },
  {
    id: 2,
    title: 'SunTech Computer',
    category: 'Education',
    description: 'Sun Tech is an advanced educational portal for a computer training institute offering online and offline courses in IT, coding, hardware, and software. Asterixio crafted this platform with a professional academic UI and student-centric features to foster a strong digital learning environment.',
    imageAlt: 'Financial dashboard interface',
    link: 'http://www.suntechcomputer.in',
    imageSrc: 'images/SunTech2.jpg',
    techonologies: 'React, Node.js, MongoDB, Express.js, Stripe API, AWS S3, Tailwind CSS, Redux Toolkit, Next.js',
    keyfeatures: 'Online Course Catalog, Student Login Portal, Live Class Integration, Admin Dashboard, Automated Certificates, Placement Assistance Section, Blog & Updates'
  },
  
  {
    id: 3,
    title: 'Shop All Shoes–Shoe Retailer Website',
    category: 'E-Commerce',
    description: 'Shop All Shoes is a sleek and fashionable shoe retailer platform offering a vast collection of footwear for men, women, and kids. Asterixio designed the site with a bold yet intuitive interface emphasizing high-quality product visuals, real-time inventory, and a smooth shopping experience.',
    imageAlt: 'Social media app interface',
    imageSrc: 'images/shoes.jpg',
    link: 'https://www.figma.com/proto/7EC7jLw4ksLKHOzl2O8dNN?node-id=0:1',
    techonologies: 'React, Node.js, MongoDB, Express.js, Stripe API, AWS S3, Tailwind CSS, Redux Toolkit, Next.js',
    keyfeatures: 'Visual Product Grid, Custom Shoe Finder, Wishlist & Try-At-Home Feature, Live Chat Assistant, Loyalty Rewards Program,Integrated Reviews & Ratings'
    
  },
  {
    id: 4,
    title: 'Nepal Mountaineering-Desgin Template',
    category: 'UI/UX',
    description: 'Nepal–Where Adventure Meets Serenity Nepal, the land of towering Himalayan peaks and spiritual richness, welcomes mountain lovers from across the globe. Trek through the legendary trails of Everest, Annapurna, or Langtang while experiencing the warmth of Nepali culture, ancient monasteries, and breathtaking landscapes. Whether you\'re seeking high-altitude thrills or peaceful village escapes, Nepal offers an unforgettable mountain adventure.',
    imageAlt: 'Social media app interface',
    imageSrc: 'images/nepal.jpg',
    link: 'https://www.figma.com/proto/cyvluJ22z7E6djZwOCks7h?node-id=0:1',
    techonologies: 'React, Node.js, MongoDB, Express.js, Stripe API, AWS S3, Tailwind CSS, Redux Toolkit, Next.js',
    keyfeatures: 'Visual Product Grid, Custom Shoe Finder, Wishlist & Try-At-Home Feature, Live Chat Assistant, Loyalty Rewards Program,Integrated Reviews & Ratings'
    
  },
  {
    id: 5,
    title: 'E-commerce-Desgin Template',
    category: 'UI/UX',
    description: 'King Watches – Timeless Royalty on Your Wrist Crafted for those who command elegance and power, King Watches combine precision engineering with luxurious design. Each timepiece reflects strength, sophistication, and timeless class—perfect for leaders, achievers, and style icons. With water resistance, premium materials, and a bold aesthetic, King Watches arent just accessories—they are statements.',
    imageAlt: 'Social media app interface',
    imageSrc: 'images/watch.jpg',
    link: 'https://www.figma.com/proto/cyvluJ22z7E6djZwOCks7h?node-id=0:1',
    techonologies: 'React, Node.js, MongoDB, Express.js, Stripe API, AWS S3, Tailwind CSS, Redux Toolkit, Next.js',
    keyfeatures: 'Visual Product Grid, Custom Shoe Finder, Wishlist & Try-At-Home Feature, Live Chat Assistant, Loyalty Rewards Program,Integrated Reviews & Ratings'
    
  },

  // {
  //   id: 4,
  //   title: 'Healthcare Portal',
  //   category: 'Web Development',
  //   description: 'Secure patient portal for healthcare providers with appointment scheduling and medical records.',
  //   imageAlt: 'Healthcare portal interface',
  //   tags: ['Angular', 'Node.js', 'PostgreSQL']
  // },
  // {
  //   id: 5,
  //   title: 'Inventory Management System',
  //   category: 'Dashboard',
  //   description: 'Comprehensive inventory tracking system for retail businesses with barcode scanning and reporting.',
  //   imageAlt: 'Inventory management system',
  //   tags: ['React', 'Express', 'MySQL']
  // },
  // {
  //   id: 6,
  //   title: 'Travel Booking Platform',
  //   category: 'E-Commerce',
  //   description: 'Online travel booking service with flight, hotel, and car rental reservations.',
  //   imageAlt: 'Travel booking platform',
  //   tags: ['Next.js', 'Stripe', 'MongoDB']
  // },
  // {
  //   id: 7,
  //   title: 'Restaurant Ordering System',
  //   category: 'Mobile',
  //   description: 'Mobile app for restaurant ordering with real-time order tracking and payment processing.',
  //   imageAlt: 'Restaurant ordering app',
  //   tags: ['Flutter', 'Firebase', 'Stripe']
  // },
  // {
  //   id: 8,
  //   title: 'Content Management System',
  //   category: 'Web Development',
  //   description: 'Custom CMS for digital publishers with advanced content editing and publishing workflows.',
  //   imageAlt: 'Content management system',
  //   tags: ['React', 'GraphQL', 'PostgreSQL']
  // },
  // {
  //   id: 9,
  //   title: 'Payment Processing API',
  //   category: 'API',
  //   description: 'Secure payment processing API with support for multiple payment methods and currencies.',
  //   imageAlt: 'Payment API documentation',
  //   tags: ['Node.js', 'Express', 'MongoDB']
  // }
];

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
              Our Portfolio
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Our Latest Work
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Explore our portfolio of successful projects across various industries and technologies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                imageSrc={project.imageSrc}
                link={project.link}
                imageAlt={project.imageAlt}
                techonologies={project.techonologies}
                keyfeatures={project.keyfeatures}
              />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
              <p className="text-xl text-muted-foreground mb-8">Let's discuss how we can help bring your ideas to life with our fullstack development expertise.</p>
              <Button size="lg" className="rounded-full">
                <Link to="/contact">Start a Project</Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
