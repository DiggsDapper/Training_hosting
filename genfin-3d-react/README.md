# GENFIN 3D React - Modern 3D Loan Management System

## 🎯 Overview

A modern React + Framer Motion implementation of the GENFIN loan management system with **faked 3D perspective effects** and smooth animations.

## ✨ Features

- **React 18** with functional components and hooks
- **Framer Motion** for smooth 3D perspective animations
- **Perspective Transform** effects for 3D appearance
- **Interactive Drag to Rotate** - grab and drag to rotate the table
- **Scroll to Zoom** - scroll wheel to adjust perspective
- **Hover Effects** - rows scale and highlight on hover
- **Modern UI** - glass-morphism design with glows
- **9 Loan Entries** - real data from original GENFIN
- **Responsive** - works on all modern browsers

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed

### Installation

```bash
# Navigate to project folder
cd genfin-3d-react

# Install dependencies
npm install

# Start development server
npm start
```

Browser will open at `http://localhost:3000`

## 🎮 Interactions

- **Drag Mouse** - Rotate the 3D perspective
- **Scroll Wheel** - Zoom in/out
- **Rotate Button** - Quick 90° rotation
- **Reset Button** - Back to default view
- **Export Button** - Screenshot or data export (demo)

## 📁 Project Structure

```
genfin-3d-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Sidebar.js & Sidebar.css
│   │   ├── Table3D.js & Table3D.css
│   │   ├── RightPanel.js & RightPanel.css
│   │   └── Controls.js & Controls.css
│   ├── App.js & App.css
│   ├── index.js & index.css
│   └── App.test.js
├── package.json
└── README.md
```

## 🎨 Design

- **Color Scheme**: #667eea (primary), #764ba2 (secondary), #0a0e1a (background)
- **Fonts**: System fonts (Segoe UI, Roboto, etc.)
- **Effects**: 
  - CSS 3D transforms
  - Box shadows and glows
  - Backdrop blur effects
  - Smooth spring animations

## 🛠️ Built With

- **React 18.2** - UI library
- **Framer Motion 10** - Animation library
- **CSS3** - Styling and 3D effects
- **JavaScript ES6+** - Modern syntax

## 📊 Data Format

Each task entry contains:
```javascript
{
  id: 152,
  cf: 'CF',
  type: 'Loan Collection Lead',
  task: 'Loan Collection Select',
  date: '2025-10-22',
  time1: '10:11',
  time2: '10:11',
  days: 206
}
```

## 🔮 "3D" Implementation

The 3D effect is **faked** using CSS transforms:
- `perspective()` on wrapper
- `rotateX()` and `rotateY()` on table
- Smooth easing animations
- Shadow and lighting effects
- No heavy Three.js library needed
- **Much faster** and **more responsive**

## 🚀 Performance

- 60 FPS animations
- Optimized re-renders with React hooks
- Lazy animation delays
- Smooth spring physics

## 📝 Available Scripts

```bash
npm start      # Run dev server
npm build      # Build for production
npm test       # Run tests
eject          # Not recommended
```

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📜 License

MIT

---

**Created**: July 2026 | **Version**: 1.0 | **Status**: Production Ready ✨