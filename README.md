# 🎨 Ilan Uzan - Portfolio Website

A stunning, modern portfolio website built with React and Tailwind CSS, showcasing full-stack engineering projects with a focus on mobile-first responsive design and smooth user experience.

## ✨ Features

### 🎯 Design System
- **Modern Glassmorphism**: Frosted glass effects with backdrop blur
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Smooth Animations**: Lightweight CSS animations for optimal performance
- **Custom Cursor**: Interactive cursor (hidden on mobile for touch devices)
- **Gradient Backgrounds**: Subtle animated gradient backgrounds
- **Professional Typography**: Clean, readable text with proper hierarchy

### 🏗️ Technical Stack
- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Framer Motion**: Lightweight animations for smooth interactions
- **React Router**: Client-side routing with Netlify optimization
- **Custom Components**: Reusable UI components with glass effects
- **Mobile-First**: Optimized for touch devices and mobile performance

### 📱 Pages & Components
- **Home**: Hero section with GitHub contribution graph and call-to-action buttons
- **Projects**: Interactive project showcase with real project details and modal previews
- **About**: Skills & expertise section with full-stack engineering focus
- **Contact**: Contact form with social media integration
- **Navigation**: Responsive navbar with mobile dropdown and social links

### 🚀 Real Projects Showcased
- **🛡️ Sentinel**: Advanced cybersecurity monitoring tool with Python, FastAPI, PostgreSQL
- **🚀 Kesef Plus**: Next-generation fintech platform with React Native, Node.js, Supabase
- **🤖 CeeVee AI**: AI-powered CV generator with Next.js, TypeScript, Google Gemini
- **🎮 Galactic Defenders**: Retro arcade game with Python, Tkinter, SQLite

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/ilan-uzan/graphicdesign.git
cd graphicdesignportfoliowebsite

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 🎨 Design Features

### Glassmorphism Components
- **Glass Cards**: Reusable components with backdrop blur effects
- **Responsive Navigation**: Desktop-centered navbar with mobile dropdown
- **Project Modals**: Interactive project previews with smooth animations
- **Form Elements**: Glass-styled inputs and buttons

### Animations & Interactions
- **Page Transitions**: Smooth fade animations for better UX
- **Project Cards**: Staggered animations with CSS keyframes
- **Modal Interactions**: Smooth open/close transitions
- **Mobile Optimized**: Touch-friendly interactions without performance issues

### Mobile-First Optimization
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Touch Interactions**: Optimized for mobile gestures and touch events
- **Mobile Navigation**: Top-left dropdown menu with social links
- **Performance**: Lightweight animations and CSS for mobile devices
- **Touch Event Handling**: Proper event handling to prevent double-click issues

## 🔧 Customization

### Colors & Theme
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  accent: {
    primary: '#2A9D8F',
    secondary: '#E9C46A',
    tertiary: '#F4A261',
  }
}
```

### Content Management
- **Projects**: Edit `src/data/projects.js` to add/modify projects
- **Personal Info**: Update content in `src/pages/About.js`
- **Contact Details**: Modify contact information in `src/pages/Contact.js`
- **Skills**: Update skills and expertise in the About page

### Styling & Components
- **Glass Effects**: Customize in `src/index.css`
- **Animations**: Adjust timing and effects in component files
- **Responsive Breakpoints**: Modify in `tailwind.config.js`

## 📂 Project Structure
```
src/
├── components/
│   ├── CustomCursor.js      # Interactive cursor (hidden on mobile)
│   ├── GlassCard.js         # Reusable glass card component
│   ├── Navbar.js            # Responsive navigation component
│   └── ProjectModal.js      # Project detail modal with mobile optimization
├── data/
│   └── projects.js          # Real project data and details
├── pages/
│   ├── Home.js              # Landing page with GitHub graph
│   ├── Projects.js          # Portfolio showcase with mobile touch handling
│   ├── About.js             # Skills and expertise section
│   └── Contact.js           # Contact form and social links
├── assets/
│   └── images/              # Project logos and images
├── App.js                   # Main app component with routing
├── index.css                # Global styles & mobile optimizations
└── index.js                 # App entry point
```

## 🎯 Performance Features
- **Mobile Optimization**: Touch event handling and performance improvements
- **Lightweight Animations**: CSS-based animations instead of heavy JS
- **Image Optimization**: Lazy loading and proper sizing for mobile
- **Responsive Design**: Optimized for all screen sizes and devices
- **Touch-Friendly**: Proper touch event handling for mobile devices

## 🌐 Deployment

### Netlify Deployment
- **Automatic Deployment**: Connected to GitHub for continuous deployment
- **Custom Domain**: Configured for `ilanuzan.dev`
- **SPA Routing**: Proper handling of client-side routes
- **Performance**: Optimized for production with compression

### Build Configuration
- **Homepage Field**: Configured for custom domain deployment
- **Redirects**: Netlify-specific routing configuration
- **Headers**: Security and performance headers
- **404 Page**: Custom error page with auto-redirect

## 🌟 Browser Support
- **Desktop**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Touch Devices**: Optimized for all touch interactions
- **Performance**: Smooth experience across all devices

## 📱 Mobile Experience
- **Touch Optimization**: Single-tap project opening (no double-click needed)
- **Responsive Navigation**: Mobile-friendly dropdown menu
- **Performance**: Lightweight animations for smooth mobile experience
- **Touch Events**: Proper handling of mobile touch interactions
- **Responsive Images**: Optimized image display for all screen sizes

## 📝 License
This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

## 📧 Contact & Social
- **Website**: [ilanuzan.dev](https://ilanuzan.dev)
- **LinkedIn**: [linkedin.com/in/ilanuzan](https://linkedin.com/in/ilanuzan)
- **GitHub**: [github.com/ilan-uzan](https://github.com/ilan-uzan)

---

**Built with modern web technologies and optimized for the best user experience across all devices.** 🚀✨

Made with ❤️ by Ilan Uzan 