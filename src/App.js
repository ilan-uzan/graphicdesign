import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="App min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 gradient-bg opacity-40" />
          <div className="absolute inset-0 backdrop-blur-3xl" />
        </div>

        {/* Custom Cursor */}
        <CustomCursor mousePosition={mousePosition} />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10 min-h-screen">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home mousePosition={mousePosition} />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>


      </div>
    </Router>
  );
}

export default App; 