# GENFIN 3D React - Workflow Queues Edition

## 🎯 Overview

A modern React + Framer Motion implementation of the GENFIN Workflow Queues system with **interactive 3D perspective effects** matching the original interface design.

## ✨ Features

✅ **Exact Layout Match**
- Header with navigation and tabs
- Left sidebar with queue controls  
- Workflow Queues data table with 10 columns
- Expandable sections (Tasks not attended, escalated, on hold, etc.)
- Light blue/white color scheme matching original

✅ **3D Perspective Effects**
- Drag to rotate the table in 3D space
- Scroll to zoom perspective in/out
- Smooth spring animations
- Real perspective transforms (not Three.js)

✅ **Interactive Elements**
- Row hover effects with subtle color changes
- Expandable/collapsible sections at bottom
- Control buttons (Rotate, Reset, Export)
- Dynamic action icons

✅ **Modern Design**
- Glass-morphism effects
- Smooth transitions and animations
- Professional color palette
- Responsive to window resize

## 🚀 Quick Start

```bash
cd genfin-3d-react
npm install
npm start
```

Opens at `http://localhost:3000`

## 🎮 Interactions

- **Drag Mouse** - Rotate 3D perspective
- **Scroll Wheel** - Zoom in/out
- **Hover Rows** - Subtle highlight effects
- **Click Section Headers** - Expand/collapse sections
- **Control Buttons** - Rotate/Reset/Export

## 📁 Structure

```
src/
├── App.js & App.css
├── components/
│   ├── Header.js & Header.css
│   ├── Sidebar.js & Sidebar.css
│   ├── WorkflowQueues.js & WorkflowQueues.css
│   ├── ExpandableSections.js & ExpandableSections.css
│   └── Controls.js & Controls.css
├── index.js & index.css
public/
└── index.html
```

## 🎨 Colors

- Primary: #4a90e2 (Blue)
- Secondary: #357abd (Dark Blue)
- Background: #f0f2f5 (Light Gray)
- Text: #333 (Dark Gray)
- Accent: #d32f2f (Red for escalations)

## 🔧 Technologies

- React 18.2
- Framer Motion 10
- CSS3 3D Transforms
- JavaScript ES6+

## 📊 Data Format

Each workflow entry:
```javascript
{
  id: 104,
  cf: 'CF',
  type: 'Complete Application Forms',
  task: 'Waiting For Statements',
  date: '2024-99999-24',
  note: 'Whatsapp Testing 24',
  user: 'SYSTEM',
  time1: '2025-07-25 08:44',
  time2: '2025-07-31 11:32:08',
  duration: '359 Days 21 Hours 01 Minutes'
}
```

---

**Version**: 1.0 | **Status**: Production Ready ✨