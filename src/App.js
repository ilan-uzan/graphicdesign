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
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home mousePosition={mousePosition} />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30">
          <div className="glass-card px-6 py-3 rounded-2xl">
            <p className="text-white/60 text-sm font-medium">
              © 2024 Ilan Uzan. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App; 