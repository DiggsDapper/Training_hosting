// GENFIN 3D - Three.js Loan Management System
console.log('Script loaded');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0e27);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas, 
    antialias: true, 
    alpha: false,
    powerPreference: 'high-performance'
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowShadowMap;

console.log('Renderer initialized');

camera.position.set(0, 5, 15);
camera.lookAt(0, 0, 0);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0x667eea, 1.2);
directionalLight.position.set(10, 10, 10);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.camera.near = 0.1;
directionalLight.shadow.camera.far = 100;
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0x764ba2, 0.8);
pointLight.position.set(-10, 5, -10);
scene.add(pointLight);

// Background grid
const gridHelper = new THREE.GridHelper(50, 50, 0x667eea, 0x2a2d47);
gridHelper.position.y = -3;
scene.add(gridHelper);

console.log('Lights and grid added');

// Task data
const tasks = [
    { id: 152, type: 'Loan Collection Lead', name: 'Loan Collection Select', date: '22 Oct 2025', days: 206 },
    { id: 153, type: 'Loan Collection Lead', name: 'Generate Collection Batch', date: '22 Oct 2025', days: 206 },
    { id: 154, type: 'Loan Collection Lead', name: 'Generate Collection Batch', date: '22 Oct 2025', days: 206 },
    { id: 155, type: 'Loan Collection Lead', name: 'Generate Collection Batch', date: '27 Oct 2025', days: 201 },
    { id: 156, type: 'Loan Collection Lead', name: 'Loan Collection Select', date: '27 Oct 2025', days: 201 },
    { id: 157, type: 'Loan Collection Lead', name: 'Loan Collection Select', date: '27 Oct 2025', days: 201 },
    { id: 158, type: 'Loan Collection Lead', name: 'Loan Collection Select', date: '27 Oct 2025', days: 201 },
    { id: 159, type: 'Loan Collection Lead', name: 'Loan Collection Select', date: '27 Oct 2025', days: 201 },
    { id: 160, type: 'Loan Collection Lead', name: 'Loan Collection Select', date: '27 Oct 2025', days: 201 },
];

const cards = [];
const group = new THREE.Group();
scene.add(group);

// Create canvas texture
function createCardTexture(task) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = '#1a1f3a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Border
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
    
    // Task ID
    ctx.fillStyle = '#667eea';
    ctx.font = 'bold 48px Arial';
    ctx.fillText(task.id, 40, 80);
    
    // Task type
    ctx.fillStyle = '#aaa';
    ctx.font = '20px Arial';
    ctx.fillText(task.type, 40, 130);
    
    // Task name
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 24px Arial';
    const words = task.name.split(' ');
    let y = 200;
    for (let word of words) {
        ctx.fillText(word, 40, y);
        y += 40;
    }
    
    // Date and days
    ctx.fillStyle = '#764ba2';
    ctx.font = 'bold 20px Arial';
    ctx.fillText(task.date, 40, 400);
    ctx.fillText(task.days + ' Days', 40, 450);
    
    return new THREE.CanvasTexture(canvas);
}

// Create 3D task cards
function createTaskCard(task, index) {
    const geometry = new THREE.BoxGeometry(2, 3, 0.2);
    
    // Create materials for each face
    const texture = createCardTexture(task);
    
    const materials = [
        new THREE.MeshStandardMaterial({ color: 0x667eea, metalness: 0.3, roughness: 0.6 }),
        new THREE.MeshStandardMaterial({ color: 0x667eea, metalness: 0.3, roughness: 0.6 }),
        new THREE.MeshStandardMaterial({ color: 0x764ba2, metalness: 0.5, roughness: 0.5 }),
        new THREE.MeshStandardMaterial({ color: 0x764ba2, metalness: 0.5, roughness: 0.5 }),
        new THREE.MeshStandardMaterial({ map: texture, metalness: 0.2, roughness: 0.8 }),
        new THREE.MeshStandardMaterial({ color: 0x667eea, metalness: 0.3, roughness: 0.6 }),
    ];
    
    const mesh = new THREE.Mesh(geometry, materials);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData = { task, index };
    
    // Position in a circular arrangement
    const angle = (index / tasks.length) * Math.PI * 2;
    const radius = 8;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (index % 3) * 2 - 2;
    
    mesh.position.set(x, y, z);
    mesh.rotation.y = angle + Math.PI / 2;
    
    group.add(mesh);
    cards.push({ mesh, angle, baseY: y, radius });
}

// Create all cards
tasks.forEach((task, index) => {
    createTaskCard(task, index);
});

console.log('Created', cards.length, 'cards');

// Animation variables
let mouse = { x: 0, y: 0 };
let targetRotation = { x: 0, y: 0 };
let currentRotation = { x: 0, y: 0 };

// Mouse tracking
document.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    targetRotation.x = mouse.y * 0.5;
    targetRotation.y = mouse.x * 0.5;
});

// Zoom with scroll
let zoomLevel = 1;
document.addEventListener('wheel', (e) => {
    e.preventDefault();
    zoomLevel += e.deltaY * 0.001;
    zoomLevel = Math.max(0.5, Math.min(3, zoomLevel));
    camera.position.z = 15 * zoomLevel;
}, { passive: false });

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Smooth camera rotation
    currentRotation.x += (targetRotation.x - currentRotation.x) * 0.1;
    currentRotation.y += (targetRotation.y - currentRotation.y) * 0.1;
    
    group.rotation.x = currentRotation.x;
    group.rotation.y = currentRotation.y;
    
    // Animate cards
    cards.forEach((card, index) => {
        card.mesh.rotation.z += 0.002;
        card.mesh.position.y = card.baseY + Math.sin(Date.now() * 0.001 + index) * 0.3;
    });
    
    renderer.render(scene, camera);
}

console.log('Starting animation loop');
animate();

// Control button interactions
document.querySelectorAll('.control-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (index === 0) { // Rotate
            group.rotation.y += Math.PI / 2;
        } else if (index === 1) { // Filter
            alert('Filter mode would allow filtering by task type, date range, or status.');
        } else if (index === 2) { // Export
            alert('Export would download the 3D scene or task data as JSON/CSV.');
        }
    });
});

console.log('Script fully loaded and running');
