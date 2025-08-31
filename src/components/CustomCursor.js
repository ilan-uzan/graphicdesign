import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = ({ mousePosition }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 400, mass: 0.8 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || 
                           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (mousePosition) {
      cursorX.set(mousePosition.x);
      cursorY.set(mousePosition.y);
    }
  }, [mousePosition, cursorX, cursorY]);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      
      if (target.matches('button, a, .interactive-card, .nav-link, input, textarea')) {
        setIsHovering(true);
        
        if (target.matches('button, .button-primary, .button-secondary')) {
          setCursorVariant('button');
        } else if (target.matches('a, .nav-link')) {
          setCursorVariant('link');
        } else if (target.matches('.interactive-card')) {
          setCursorVariant('card');
        } else if (target.matches('input, textarea')) {
          setCursorVariant('input');
        }
      } else {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const cursorVariants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: 'rgba(0, 122, 255, 0.8)',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 0 20px rgba(0, 122, 255, 0.4)',
    },
    button: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 122, 255, 0.2)',
      border: '2px solid rgba(0, 122, 255, 0.5)',
      backdropFilter: 'blur(15px)',
      boxShadow: '0 0 30px rgba(0, 122, 255, 0.3)',
    },
    link: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(88, 86, 214, 0.2)',
      border: '2px solid rgba(88, 86, 214, 0.5)',
      backdropFilter: 'blur(15px)',
      boxShadow: '0 0 25px rgba(88, 86, 214, 0.3)',
    },
    card: {
      width: 50,
      height: 50,
      backgroundColor: 'rgba(175, 82, 222, 0.15)',
      border: '2px solid rgba(175, 82, 222, 0.4)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 0 35px rgba(175, 82, 222, 0.25)',
    },
    input: {
      width: 3,
      height: 20,
      backgroundColor: 'rgba(0, 122, 255, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      borderRadius: '2px',
      backdropFilter: 'blur(5px)',
      boxShadow: '0 0 15px rgba(0, 122, 255, 0.6)',
    },
  };

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[10000] rounded-full"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
        }}
        animate={cursorVariants[cursorVariant]}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
          mass: 0.6,
        }}
      />

      {/* Cursor Trail */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          width: isHovering ? 80 : 24,
          height: isHovering ? 80 : 24,
          backgroundColor: isHovering 
            ? 'rgba(0, 122, 255, 0.05)' 
            : 'rgba(0, 122, 255, 0.1)',
          border: isHovering 
            ? '1px solid rgba(0, 122, 255, 0.2)' 
            : '1px solid rgba(0, 122, 255, 0.3)',
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 200,
          mass: 1,
        }}
      />
    </>
  );
};

export default CustomCursor; 