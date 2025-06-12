# 🎨 Ilan Uzan - Portfolio Website

A stunning, Apple VisionOS-inspired portfolio website built with React, showcasing modern glassmorphism design and smooth animations.

## ✨ Features

### 🎯 Design System
- **Apple VisionOS Aesthetic**: Inspired by Apple's latest design language
- **Glassmorphism UI**: Frosted glass effects with backdrop blur
- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Optimized for all devices (mobile-first approach)
- **Custom Cursor**: Interactive cursor with hover effects
- **Gradient Backgrounds**: Animated gradient backgrounds

### 🏗️ Technical Stack
- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Advanced animation library
- **React Router**: Client-side routing
- **Custom Glass Components**: Reusable UI components

### 📱 Pages & Components
- **Home**: Hero section with parallax effects and call-to-action
- **Projects**: Interactive project grid with modal details
- **About**: Personal timeline, skills, and CV download
- **Contact**: Contact form with social media links
- **Navigation**: Floating glass navbar with smooth transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
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
- **Glass Cards**: Reusable components with backdrop blur
- **Floating Navigation**: Transparent navbar that adapts on scroll
- **Modal Overlays**: Project details with smooth transitions
- **Form Elements**: Glass-styled inputs and buttons

### Animations & Interactions
- **Page Transitions**: Smooth fade and slide animations
- **Hover Effects**: Scale and glow effects on interactive elements
- **Stagger Animations**: Sequential element animations
- **Parallax Effects**: Mouse-tracking parallax on hero section
- **Custom Cursor**: Dynamic cursor that responds to hover states

### Mobile Optimization
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Touch Interactions**: Optimized for mobile gestures
- **Mobile Navigation**: Collapsible hamburger menu
- **Performance**: Optimized animations for mobile devices

## 🔧 Customization

### Colors
Edit the gradient colors in `tailwind.config.js`:
```javascript
colors: {
  gradient: {
    purple: '#b388eb',
    blue: '#81ecec',
    pink: '#fab1a0',
    orange: '#fd79a8',
  }
}
```

### Content
- **Projects**: Edit `src/data/projects.js` to add your projects
- **Personal Info**: Update content in `src/pages/About.js`
- **Contact Details**: Modify contact information in `src/pages/Contact.js`

### Styling
- **Glass Effects**: Customize in `src/index.css`
- **Animations**: Adjust timing and effects in component files
- **Typography**: Font settings in `tailwind.config.js`

## 📂 Project Structure
```
src/
├── components/
│   ├── CustomCursor.js      # Interactive cursor
│   ├── GlassCard.js         # Reusable glass card component
│   ├── Navbar.js            # Navigation component
│   └── ProjectModal.js      # Project detail modal
├── data/
│   └── projects.js          # Project data
├── pages/
│   ├── Home.js              # Landing page
│   ├── Projects.js          # Portfolio showcase
│   ├── About.js             # Personal information
│   └── Contact.js           # Contact form
├── App.js                   # Main app component
├── index.css                # Global styles & utilities
└── index.js                 # App entry point
```

## 🎯 Performance Features
- **Lazy Loading**: Optimized component loading
- **Smooth Scrolling**: Hardware-accelerated animations
- **Efficient Rendering**: React optimization techniques
- **Compressed Assets**: Optimized images and fonts

## 🌟 Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License
This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

## 📧 Contact
- **Email**: hello@ilanuzan.com
- **LinkedIn**: [linkedin.com/in/ilanuzan](https://linkedin.com/in/ilanuzan)
- **Behance**: [behance.net/ilanuzan](https://behance.net/ilanuzan)

---

Made with ❤️ by Ilan Uzan 