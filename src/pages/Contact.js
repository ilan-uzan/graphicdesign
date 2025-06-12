import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Palette, Send, Loader2 } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@ilanuzan.com',
      description: 'Send me an email for project inquiries',
      action: 'mailto:hello@ilanuzan.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+972 50 123 4567',
      description: 'Call me for urgent matters',
      action: 'tel:+972501234567',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/ilanuzan',
      description: 'Connect with me professionally',
      action: 'https://linkedin.com/in/ilanuzan',
    },
    {
      icon: Palette,
      title: 'Behance',
      value: 'behance.net/ilanuzan',
      description: 'View my creative portfolio',
      action: 'https://behance.net/ilanuzan',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen section-spacing container-padding"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
          <h1 className="page-title mb-4 lg:mb-6 tracking-tight">
            Let's Connect
          </h1>
          <p className="text-lg lg:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to bring your vision to life? I'd love to hear about your project and explore 
            how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <GlassCard className="card-spacing rounded-3xl liquid-glass" hover={false}>
              <h2 className="text-xl lg:text-2xl font-bold text-clean mb-4 lg:mb-6 tracking-tight">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                  <div>
                    <label className="block text-white/85 font-semibold mb-2 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full input-field px-4 py-3"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/85 font-semibold mb-2 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full input-field px-4 py-3"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/85 font-semibold mb-2 text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full input-field px-4 py-3"
                    placeholder="Project inquiry"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white/85 font-semibold mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full input-field px-4 py-3 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full button-primary px-6 py-4 rounded-2xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </span>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="space-y-4 lg:space-y-5">
            <h2 className="text-xl lg:text-2xl font-bold text-clean mb-4 lg:mb-6 tracking-tight">
              Get in Touch
            </h2>
            
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <GlassCard className="p-4 lg:p-5 cursor-pointer rounded-2xl glass-card" hover={false}>
                    <div className="flex items-start space-x-3 lg:space-x-4">
                      <div className="flex-shrink-0 p-2 rounded-xl bg-accent-primary/10 border border-accent-primary/20">
                        <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-accent-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base lg:text-lg font-bold text-clean mb-1">
                          {method.title}
                        </h3>
                        <p className="text-accent-primary font-semibold text-xs lg:text-sm mb-1 truncate">
                          {method.value}
                        </p>
                        <p className="text-white/70 text-xs lg:text-sm leading-relaxed">
                          {method.description}
                        </p>
                      </div>
                      <div className="text-white/40 text-base lg:text-lg flex-shrink-0">
                        →
                      </div>
                    </div>
                  </GlassCard>
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div variants={itemVariants}>
          <GlassCard className="text-center p-6 lg:p-8 rounded-3xl liquid-glass">
            <h3 className="text-lg lg:text-xl font-bold text-clean mb-3 lg:mb-4">
              Let's Create Something Amazing
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm lg:text-base px-4">
              Whether you're looking for brand identity, digital design, or creative consultation, 
              I'm here to help bring your vision to life. Let's discuss your project and explore 
              the possibilities together.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact; 