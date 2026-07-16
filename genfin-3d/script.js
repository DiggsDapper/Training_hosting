import { TableBuilder } from './modules/table-builder.js';
import { SceneManager } from './modules/scene-manager.js';
import { DataProcessor } from './modules/data-processor.js';

console.log('=== GENFIN 3D Initialization ===');

// Initialize Scene Manager
const sceneManager = new SceneManager();
sceneManager.init();

// Process data from original interface
const dataProcessor = new DataProcessor();
const processedData = dataProcessor.getTasksData();

// Build 3D table
const tableBuilder = new TableBuilder(sceneManager);
tableBuilder.buildTable(processedData);

// Setup interactions
setupInteractions(sceneManager, tableBuilder);

// Start animation loop
sceneManager.startAnimation();

function setupInteractions(sceneManager, tableBuilder) {
    const canvas = sceneManager.canvas;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    // Mouse drag to rotate
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - previousMousePosition.x;
            const deltaY = e.clientY - previousMousePosition.y;
            
            sceneManager.rotateView(deltaX * 0.005, deltaY * 0.005);
            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    });
    
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    // Scroll to zoom
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        sceneManager.zoom(e.deltaY * 0.01);
    }, { passive: false });
    
    // Window resize
    window.addEventListener('resize', () => {
        sceneManager.onWindowResize();
    });
    
    // Control buttons
    document.querySelectorAll('.control-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (index === 0) { // Rotate
                sceneManager.rotateView(Math.PI / 2, 0);
            } else if (index === 1) { // Reset
                sceneManager.resetView();
            } else if (index === 2) { // Export
                alert('Export feature: Download 3D scene as glTF or screenshot');
            }
        });
    });
}

console.log('=== GENFIN 3D Ready ===');