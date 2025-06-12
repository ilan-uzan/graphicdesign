import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ 
  children, 
  className = '', 
  hover = true, 
  onClick,
  delay = 0,
  variant = 'default',
  ...props 
}) => {
  const hoverEffects = hover ? {
    scale: 1.01,
    y: -2,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  } : {};

  const baseClass = variant === 'liquid' ? 'liquid-glass' : 'glass-card';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={hoverEffects}
      whileTap={hover ? { scale: 0.995 } : {}}
      onClick={onClick}
      className={`${baseClass} ${hover ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard; 