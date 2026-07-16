# GENFIN 3D - Interactive 3D Loan Management System

## Overview

GENFIN 3D is a Three.js-based interactive 3D visualization of the GENFIN loan management system. It recreates the exact layout and data structure of the original 2D interface in an immersive 3D environment.

## Features

✨ **Exact 3D Replica** - Matches the original GENFIN interface layout
- Header with navigation and tabs
- Left sidebar with queue controls
- Right info panel with statistics
- Complete data table in 3D space
- Bottom control buttons

🎮 **Interactive Controls**
- **Drag to Rotate**: Click and drag anywhere on the canvas to rotate the 3D table
- **Scroll to Zoom**: Use mouse wheel to zoom in/out
- **Control Buttons**: Rotate 90°, Reset View, Export

📊 **9 Task Entries** - Displays loan collection data:
- Task IDs (152-160)
- Task types and names
- Collection dates
- Time in/out stamps
- Days-to-action metrics

💡 **Modern Design**
- Dark GENFIN color scheme (#667eea, #764ba2)
- Real-time shadows and lighting
- Smooth animations
- Glass-morphism UI elements
- High-quality rendering

## File Structure

```
genfin-3d/
├── index.html              # Main HTML with UI overlay
├── script.js               # Entry point and main controller
└── modules/
    ├── scene-manager.js    # Three.js scene setup and management
    ├── table-builder.js    # 3D table generation from data
    └── data-processor.js   # Data handling and filtering
```

## Technical Stack

- **Three.js r128** - 3D graphics rendering
- **WebGL** - GPU-accelerated rendering
- **Canvas API** - Dynamic texture generation for text
- **Modern ES6 Modules** - Modular JavaScript architecture

## Usage

1. **Open `index.html`** in a modern web browser (Chrome, Firefox, Safari, Edge)
2. **Interact with the 3D table**:
   - Click and drag to rotate
   - Scroll to zoom
   - Click buttons for actions
3. **View data** - All 9 loan collection tasks displayed in 3D

## Customization

To add more data rows:
1. Edit `modules/data-processor.js` and add entries to `tasksData` array
2. The table automatically renders new rows

To change colors:
1. Edit materials in `modules/table-builder.js`
2. Update color codes (#667eea, #764ba2, etc.)

## Performance

- Optimized for 60 FPS on modern hardware
- Efficient mesh batching
- GPU-accelerated shadow mapping
- Dynamic texture generation

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## License

MIT - Feel free to use and modify

---

**Created**: July 2026 | **Version**: 1.0
