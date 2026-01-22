'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect, useMemo } from 'react';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, 
  FaChevronUp, FaRocket, FaCode, FaHeart, FaStar,
  FaArrowRight, FaBolt, FaShieldAlt, FaCloud, FaBrain,
  FaPython, FaNodeJs, FaJava, FaAws
} from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker, HiOutlineSparkles } from 'react-icons/hi';
import { 
  SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiFlutter, SiLaravel, SiAngular, SiVuedotjs,
  SiDjango, SiSpringboot, SiExpress, SiMongodb,
  SiPostgresql, SiDocker, SiKubernetes, SiGraphql
} from 'react-icons/si';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showMoreTech, setShowMoreTech] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Initialize client-side state
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if mobile - only on client side
  useEffect(() => {
    if (!isClient) return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isClient]);

  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', color: 'hover:bg-blue-600/20 hover:text-blue-400' },
    { icon: <FaTwitter />, name: 'Twitter', color: 'hover:bg-sky-500/20 hover:text-sky-400' },
    { icon: <FaInstagram />, name: 'Instagram', color: 'hover:bg-pink-600/20 hover:text-pink-400' },
    { icon: <FaLinkedin />, name: 'LinkedIn', color: 'hover:bg-blue-700/20 hover:text-blue-300' },
    { icon: <FaGithub />, name: 'GitHub', color: 'hover:bg-gray-800/20 hover:text-gray-300' }
  ];

  const services = [
    { name: 'Custom Software', icon: <FaCode />, color: 'text-blue-400' },
    { name: 'Cloud Solutions', icon: <FaCloud />, color: 'text-cyan-400' },
    { name: 'AI Integration', icon: <FaBrain />, color: 'text-purple-400' },
    { name: 'Cybersecurity', icon: <FaShieldAlt />, color: 'text-red-400' },
    { name: 'UX/UI Design', icon: <FaBolt />, color: 'text-amber-400' }
  ];

  const companyLinks = [
    'About Us',
    'Our Team',
    'Careers',
    'Blog',
    'Contact',
    'Press Kit'
  ];

  // Tech stack icons - Main and additional
  const mainTechStack = [
    { Icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
    { Icon: SiReact, name: 'React', color: 'text-cyan-300' },
    { Icon: SiTypescript, name: 'TypeScript', color: 'text-blue-300' },
    { Icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-400' },
    { Icon: FaPython, name: 'Python', color: 'text-blue-400' },
    { Icon: SiFlutter, name: 'Flutter', color: 'text-blue-300' },
  ];

  const additionalTechStack = [
    { Icon: SiLaravel, name: 'Laravel', color: 'text-red-400' },
    { Icon: SiAngular, name: 'Angular', color: 'text-red-500' },
    { Icon: SiVuedotjs, name: 'Vue.js', color: 'text-green-400' },
    { Icon: SiDjango, name: 'Django', color: 'text-green-300' },
    { Icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    { Icon: SiSpringboot, name: 'Spring', color: 'text-green-400' },
    { Icon: SiExpress, name: 'Express', color: 'text-gray-300' },
    { Icon: FaJava, name: 'Java', color: 'text-red-400' },
    { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-400' },
    { Icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-400' },
    { Icon: SiGraphql, name: 'GraphQL', color: 'text-pink-400' },
    { Icon: FaAws, name: 'AWS', color: 'text-yellow-400' },
    { Icon: SiDocker, name: 'Docker', color: 'text-blue-400' },
    { Icon: SiKubernetes, name: 'Kubernetes', color: 'text-blue-300' },
  ];

  // Display tech based on screen size and showMoreTech state
  const displayedTech = useMemo(() => {
    if (!isClient) return mainTechStack.slice(0, 4);
    return isMobile 
      ? mainTechStack.slice(0, 4)
      : showMoreTech 
        ? [...mainTechStack, ...additionalTechStack]
        : mainTechStack;
  }, [isClient, isMobile, showMoreTech]);

  useEffect(() => {
    if (!isClient) return;
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed:', email);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    if (!isClient) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pre-defined positions and sizes to avoid Math.random() during SSR
  const floatingElements = useMemo(() => {
    if (!isClient) return [];
    
    const elementCount = isMobile ? 8 : 15;
    const icons = [
      <SiReact key="react" className="text-cyan-400/30 sm:text-cyan-400/40" />,
      <SiTypescript key="ts" className="text-blue-400/30 sm:text-blue-400/40" />,
      <SiNextdotjs key="next" className="text-white/30 sm:text-white/40" />,
      <SiTailwindcss key="tailwind" className="text-cyan-300/30 sm:text-cyan-300/40" />,
      <FaStar key="star" className="text-amber-300/20 sm:text-amber-300/30" />,
      <FaCode key="code" className="text-emerald-300/30 sm:text-emerald-300/40" />,
      <FaPython key="python" className="text-blue-400/30 sm:text-blue-400/40" />,
      <SiFlutter key="flutter" className="text-blue-300/30 sm:text-blue-300/40" />,
    ];
    
    return Array.from({ length: elementCount }).map((_, i) => {
      // Use deterministic values based on index instead of Math.random()
      const size = 12 + (i % 8) * 2 + (isMobile ? 4 : 8);
      const top = (i * 7) % 100;
      const left = (i * 11) % 100;
      const icon = icons[i % icons.length];
      const yOffset = 10 + (i % 5) * 6;
      const xOffset = 5 + (i % 4) * 5;
      
      return {
        id: i,
        size,
        top: `${top}%`,
        left: `${left}%`,
        icon,
        yOffset,
        xOffset,
        duration: 12 + (i % 8) * 2,
        delay: (i % 5) * 0.5
      };
    });
  }, [isClient, isMobile]);

  // Pre-defined particle positions
  const particlePositions = useMemo(() => {
    if (!isClient) return [];
    
    const particleCount = isMobile ? 4 : 8;
    
    return Array.from({ length: particleCount }).map((_, i) => {
      const top = 20 + (i * 12) % 60;
      const left = (i * 15) % 100;
      const delay = (i % 4) * 0.3;
      
      return {
        id: `particle-${i}`,
        top: `${top}%`,
        left: `${left}%`,
        delay
      };
    });
  }, [isClient, isMobile]);

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 text-white pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 sm:opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)'
        }}></div>
        
        {/* Animated grid lines - Fixed animation that doesn't use random values */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 39px, rgba(14, 165, 233, 0.1) 40px, transparent 41px),
              linear-gradient(0deg, transparent 39px, rgba(14, 165, 233, 0.1) 40px, transparent 41px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Orbs with Animation - Fixed animations */}
      <div className="absolute top-1/4 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-500/10 sm:bg-blue-500/20 rounded-full blur-2xl sm:blur-3xl">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 sm:from-blue-500/30 to-cyan-500/20 sm:to-cyan-500/30 rounded-full"
        />
      </div>
      
      <div className="absolute bottom-1/4 -right-20 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-500/10 sm:bg-cyan-500/20 rounded-full blur-2xl sm:blur-3xl">
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 sm:from-cyan-500/30 to-blue-500/20 sm:to-blue-500/30 rounded-full"
        />
      </div>

      {/* Floating Tech Elements - Using deterministic values */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isClient && floatingElements.map((element) => (
          <motion.div
            key={element.id}
            initial={{ 
              y: 0,
              x: 0,
              rotate: 0,
              opacity: 0.05
            }}
            animate={{ 
              y: [0, -element.yOffset, 0],
              x: [0, element.xOffset, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              fontSize: `${element.size}px`,
              top: element.top,
              left: element.left,
            }}
          >
            {element.icon}
          </motion.div>
        ))}

        {/* Glowing particles - Using deterministic positions */}
        {isClient && particlePositions.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full blur-sm"
            style={{
              top: particle.top,
              left: particle.left,
            }}
          />
        ))}
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isClient && showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 md:bottom-8 md:right-8 z-50 p-3 sm:p-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full shadow-xl hover:shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 group"
            aria-label="Back to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 rounded-full animate-ping bg-cyan-300/40" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 p-6 sm:p-8 rounded-2xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(59, 130, 246, 0.1))',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(14, 165, 233, 0.25)',
            boxShadow: '0 8px 32px rgba(14, 165, 233, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Newsletter background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`
            }} />
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 sm:mb-4">
                <HiOutlineSparkles className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-300" />
                <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white">
                  Stay Ahead in Tech
                </h3>
              </div>
              <p className="text-sm sm:text-base text-cyan-100/80">
                Get exclusive insights on emerging tech trends and innovation. 
                Join 5000+ tech leaders who read our newsletter.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex-1 w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-white/5 border border-cyan-500/30 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 text-white placeholder-cyan-200/50 backdrop-blur-sm text-sm sm:text-base"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:shadow-lg hover:shadow-cyan-400/30 transition-all flex items-center justify-center gap-2 group text-sm sm:text-base"
                >
                  Subscribe
                  <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
              <p className="text-xs sm:text-sm text-cyan-300/70 mt-2 sm:mt-3 flex items-center justify-center sm:justify-start gap-2">
                <FaShieldAlt className="w-3 h-3 flex-shrink-0" />
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative group"
          >
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg"
                >
                  <FaRocket className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
                <span className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300">
                  Tecso<span className="text-cyan-300 animate-pulse">.</span>
                </span>
              </div>
              <p className="text-sm sm:text-base text-cyan-100/80 mb-6 sm:mb-8 leading-relaxed text-center sm:text-left">
                Building tomorrow&apos;s technology today. We create digital experiences that transform businesses and inspire innovation.
              </p>
              
              <div className="flex justify-center sm:justify-start gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    className={`p-2.5 sm:p-3 rounded-xl transition-all duration-300 ${social.color} group relative`}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    whileHover={{ y: -3 }}
                    aria-label={social.name}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5">
                      {social.icon}
                    </div>
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-cyan-500/20">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-8 sm:mt-0"
          >
            <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-1.5 h-6 sm:h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                Our Services
              </span>
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {services.map((service, i) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredService(service.name)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <a
                    href="#"
                    className="group flex items-center gap-3 sm:gap-4 p-3 rounded-xl transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div className={`p-2 rounded-lg ${service.color} group-hover:scale-110 transition-transform flex-shrink-0`}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {service.icon}
                    </div>
                    <span className="text-sm sm:text-base text-cyan-100/80 group-hover:text-cyan-100 transition-colors flex-1">
                      {service.name}
                    </span>
                    <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all flex-shrink-0">
                      <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-300" />
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-8 sm:mt-0"
          >
            <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-1.5 h-6 sm:h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Company
              </span>
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {companyLinks.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="group flex items-center p-3 rounded-xl transition-all duration-300 relative"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <span className="text-sm sm:text-base text-cyan-100/80 group-hover:text-cyan-100 transition-colors relative z-10">
                      {link}
                    </span>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative mt-8 sm:mt-0"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-500/10 sm:from-cyan-500/15 to-blue-500/10 sm:to-blue-500/15 rounded-full blur-xl" />
            
            <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 flex items-center gap-3 justify-center sm:justify-start relative z-10">
              <div className="w-1.5 h-6 sm:h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                Contact
              </span>
            </h4>
            
            <address className="not-italic space-y-4 sm:space-y-6 relative z-10">
              {[
                { icon: <HiLocationMarker />, content: '2115 Samora Avenue Dar es Salaam, Tanzania', color: 'text-cyan-300' },
                { icon: <HiMail />, content: 'hello@tecso.co.tz', href: 'mailto:hello@tecso.co.tz', color: 'text-blue-300' },
                { icon: <HiPhone />, content: '+255 (0) 712 343-287', href: 'tel:+25512343287', color: 'text-cyan-300' }
              ].map((contact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`p-2 rounded-lg ${contact.color} group-hover:scale-110 transition-transform flex-shrink-0`}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      {contact.href ? (
                        <a 
                          href={contact.href} 
                          className="text-sm sm:text-base text-cyan-100/80 hover:text-cyan-100 transition-colors block group-hover:translate-x-2 transition-transform break-words"
                        >
                          {contact.content}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-cyan-100/80 group-hover:text-cyan-100 transition-colors group-hover:translate-x-2 transition-transform">
                          {contact.content}
                        </p>
                      )}
                      <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 mt-2" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </address>
            
            {/* Tech Stack */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-cyan-500/20">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="text-sm text-cyan-300/70">Built with:</p>
                {isClient && !isMobile && (
                  <button
                    onClick={() => setShowMoreTech(!showMoreTech)}
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    {showMoreTech ? 'Show Less' : 'Show More'}
                    <FaArrowRight className={`w-3 h-3 transition-transform ${showMoreTech ? 'rotate-90' : ''}`} />
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                {displayedTech.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="p-2 rounded-lg transition-colors cursor-help group relative flex-shrink-0"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    title={tech.name}
                  >
                    <tech.Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
                  </motion.div>
                ))}
                {isClient && isMobile && (
                  <motion.button
                    onClick={() => setShowMoreTech(!showMoreTech)}
                    className="p-2 rounded-lg transition-colors cursor-help group relative flex-shrink-0"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <span className="text-xs text-cyan-400">
                      {showMoreTech ? '-' : '+'}
                    </span>
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider with gradient */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent mb-6 sm:mb-8 md:mb-10"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-sm sm:text-base text-cyan-200/80">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaHeart className="text-red-400 w-4 h-4" />
              </motion.div>
              <span>© {new Date().getFullYear()} Tecso Technologies</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center">
            {['Privacy', 'Terms', 'Cookies', 'Security', 'Sitemap'].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                className="text-xs sm:text-sm text-cyan-300/70 hover:text-cyan-200 transition-colors relative group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                viewport={{ once: true }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-300 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
          
          <div className="text-xs sm:text-sm text-cyan-300/60 text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end gap-2">
              <span>Innovating daily with</span>
              <span className="inline-flex items-center gap-1">
                <SiReact className="text-cyan-300 w-4 h-4" />
                <SiTypescript className="text-blue-300 w-4 h-4" />
                <FaPython className="text-blue-400 w-4 h-4" />
              </span>
            </p>
          </div>
        </motion.div>

        {/* Secret Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 sm:mt-8"
        >
          <p className="text-xs text-cyan-400/40 hover:text-cyan-300/60 transition-colors cursor-default">
            Crafting digital excellence since 2023 • Always pushing boundaries
          </p>
        </motion.div>
      </div>

      {/* Hover Service Effect */}
      <AnimatePresence>
        {isClient && hoveredService && !isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            className="fixed pointer-events-none text-cyan-300 font-black text-6xl sm:text-8xl z-0"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {hoveredService}
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;