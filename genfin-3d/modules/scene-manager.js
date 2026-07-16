export class SceneManager {
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0a0e1a);
        this.scene.fog = new THREE.Fog(0x0a0e1a, 200, 1000);
        
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        
        this.canvas = document.getElementById('canvas');
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance'
        });
        
        this.rotation = { x: 0, y: 0 };
        this.tableGroup = new THREE.Group();
        this.scene.add(this.tableGroup);
        
        this.setupRenderer();
        this.setupCamera();
        this.setupLighting();
        this.setupBackground();
    }
    
    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
    }
    
    setupRenderer() {
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShadowShadowMap;
    }
    
    setupCamera() {
        this.camera.position.set(0, 2.5, 15);
        this.camera.lookAt(0, 0, 0);
    }
    
    setupLighting() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
        this.scene.add(ambientLight);
        
        // Main directional light
        const directionalLight = new THREE.DirectionalLight(0x667eea, 0.75);
        directionalLight.position.set(20, 20, 20);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.1;
        directionalLight.shadow.camera.far = 150;
        directionalLight.shadow.camera.left = -40;
        directionalLight.shadow.camera.right = 40;
        directionalLight.shadow.camera.top = 40;
        directionalLight.shadow.camera.bottom = -40;
        this.scene.add(directionalLight);
        
        // Fill lights
        const fillLight1 = new THREE.PointLight(0x764ba2, 0.3);
        fillLight1.position.set(-25, 15, -25);
        this.scene.add(fillLight1);
        
        const fillLight2 = new THREE.PointLight(0x667eea, 0.25);
        fillLight2.position.set(25, 10, -20);
        this.scene.add(fillLight2);
    }
    
    setupBackground() {
        // Grid background
        const gridHelper = new THREE.GridHelper(80, 80, 0x667eea, 0x1a2540);
        gridHelper.position.y = -5;
        this.scene.add(gridHelper);
        
        // Subtle background plane
        const bgGeom = new THREE.PlaneGeometry(200, 200);
        const bgMat = new THREE.MeshStandardMaterial({
            color: 0x0a0e1a,
            metalness: 0,
            roughness: 1,
            emissive: 0x0d1025
        });
        const bgMesh = new THREE.Mesh(bgGeom, bgMat);
        bgMesh.position.z = -50;
        bgMesh.receiveShadow = true;
        this.scene.add(bgMesh);
    }
    
    rotateView(deltaX, deltaY) {
        this.rotation.y += deltaX;
        this.rotation.x += deltaY;
        
        // Clamp X rotation
        this.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, this.rotation.x));
        
        this.tableGroup.rotation.y = this.rotation.y;
        this.tableGroup.rotation.x = this.rotation.x;
    }
    
    zoom(delta) {
        this.camera.position.z += delta;
        this.camera.position.z = Math.max(5, Math.min(40, this.camera.position.z));
    }
    
    resetView() {
        this.rotation = { x: 0, y: 0 };
        this.tableGroup.rotation.set(0, 0, 0);
        this.camera.position.set(0, 2.5, 15);
    }
    
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    startAnimation() {
        const animate = () => {
            requestAnimationFrame(animate);
            this.renderer.render(this.scene, this.camera);
        };
        animate();
    }
    
    addMeshToTable(mesh) {
        this.tableGroup.add(mesh);
    }
    
    getScene() {
        return this.scene;
    }
    
    getTableGroup() {
        return this.tableGroup;
    }
}