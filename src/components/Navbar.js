import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? 'glass-navbar scale-95' : 'glass-navbar'
      }`}
      style={{ width: 'fit-content' }}
    >
      <div className="px-8 py-4">
        <div className="flex items-center justify-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-12">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.path}
                  className={`nav-link relative z-10 ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
                
                {/* Active indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeNavItem"
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 glass-card hover:bg-white/[0.12] transition-all duration-300 rounded-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <motion.span
                animate={{ 
                  rotate: mobileMenuOpen ? 45 : 0, 
                  y: mobileMenuOpen ? 6 : 0,
                }}
                className="block w-full h-0.5 bg-white/90 transform origin-center transition-all duration-300 rounded-full"
              />
              <motion.span
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                className="block w-full h-0.5 bg-white/90 transition-all duration-300 rounded-full"
              />
              <motion.span
                animate={{ 
                  rotate: mobileMenuOpen ? -45 : 0, 
                  y: mobileMenuOpen ? -6 : 0,
                }}
                className="block w-3/4 h-0.5 bg-white/90 transform origin-center transition-all duration-300 rounded-full"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden liquid-glass mt-3 overflow-hidden rounded-3xl"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="relative"
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block nav-link text-lg py-2 ${
                      location.pathname === item.path ? 'active text-clean' : 'text-white/80'
                    }`}
                  >
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeMobileNavItem"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-5 bg-gradient-to-b from-accent-primary to-accent-secondary rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 