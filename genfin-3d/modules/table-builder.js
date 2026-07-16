export class TableBuilder {
    constructor(sceneManager) {
        this.sceneManager = sceneManager;
        this.tableGroup = sceneManager.getTableGroup();
        this.scene = sceneManager.getScene();
        
        // Table configuration
        this.cellWidth = 1.2;
        this.cellHeight = 0.35;
        this.cellDepth = 0.15;
        
        // Column definitions matching original interface
        this.columns = [
            { name: 'ID', width: 0.6, align: 'center' },
            { name: 'CF', width: 0.5, align: 'center' },
            { name: 'Type', width: 2.5, align: 'left' },
            { name: 'Task', width: 3.0, align: 'left' },
            { name: 'Date', width: 1.5, align: 'center' },
            { name: 'Time In', width: 1.2, align: 'center' },
            { name: 'Time Out', width: 1.2, align: 'center' },
            { name: 'Days', width: 0.8, align: 'center' }
        ];
        
        // Materials
        this.materials = {
            headerRow: new THREE.MeshStandardMaterial({
                color: 0x667eea,
                metalness: 0.3,
                roughness: 0.7,
                emissive: 0x4a5fc7
            }),
            dataRowEven: new THREE.MeshStandardMaterial({
                color: 0x1a2847,
                metalness: 0.15,
                roughness: 0.85,
                emissive: 0x0f1529
            }),
            dataRowOdd: new THREE.MeshStandardMaterial({
                color: 0x0f1529,
                metalness: 0.1,
                roughness: 0.9,
                emissive: 0x0a0e1a
            })
        };
    }
    
    buildTable(data) {
        console.log('Building 3D table with', data.length, 'rows');
        
        // Calculate total width
        const totalWidth = this.columns.reduce((sum, col) => sum + col.width, 0);
        const startX = -totalWidth / 2;
        
        let yOffset = 5;
        
        // Build header row
        this.buildHeaderRow(startX, yOffset);
        yOffset -= this.cellHeight + 0.1;
        
        // Build data rows
        data.forEach((row, rowIndex) => {
            this.buildDataRow(row, rowIndex, startX, yOffset);
            yOffset -= this.cellHeight + 0.05;
        });
        
        console.log('Table built successfully');
    }
    
    buildHeaderRow(startX, yOffset) {
        let xOffset = startX;
        
        this.columns.forEach((col, colIndex) => {
            // Create cell background
            const geom = new THREE.BoxGeometry(col.width, this.cellHeight, this.cellDepth);
            const cell = new THREE.Mesh(geom, this.materials.headerRow);
            cell.position.set(xOffset + col.width / 2, yOffset, 0);
            cell.castShadow = true;
            cell.receiveShadow = true;
            this.tableGroup.add(cell);
            
            // Add text as canvas texture
            this.addCellText(xOffset + col.width / 2, yOffset, 0.08, col.name, '#ffffff', true);
            
            xOffset += col.width;
        });
    }
    
    buildDataRow(row, rowIndex, startX, yOffset) {
        const isEvenRow = rowIndex % 2 === 0;
        const material = isEvenRow ? this.materials.dataRowEven : this.materials.dataRowOdd;
        
        let xOffset = startX;
        const cellData = [
            (152 + rowIndex).toString(),
            row.cf,
            row.type,
            row.task,
            row.date,
            row.time1,
            row.time2,
            row.days.toString()
        ];
        
        this.columns.forEach((col, colIndex) => {
            // Create cell background
            const geom = new THREE.BoxGeometry(col.width, this.cellHeight, this.cellDepth);
            const cell = new THREE.Mesh(geom, material);
            cell.position.set(xOffset + col.width / 2, yOffset, 0);
            cell.castShadow = true;
            cell.receiveShadow = true;
            this.tableGroup.add(cell);
            
            // Add text
            const textColor = colIndex === 0 ? '#667eea' : '#e0e0e0';
            this.addCellText(xOffset + col.width / 2, yOffset, 0.08, cellData[colIndex], textColor, false);
            
            xOffset += col.width;
        });
    }
    
    addCellText(x, y, z, text, color, isBold) {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 64;
        
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#0a0e1a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = color;
        ctx.font = (isBold ? 'bold ' : '') + '28px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text.substring(0, 20), canvas.width / 2, canvas.height / 2);
        
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            metalness: 0,
            roughness: 1,
            emissive: 0x000000
        });
        
        const geom = new THREE.PlaneGeometry(1.0, 0.25);
        const mesh = new THREE.Mesh(geom, material);
        mesh.position.set(x, y, z + 0.1);
        this.tableGroup.add(mesh);
    }
}