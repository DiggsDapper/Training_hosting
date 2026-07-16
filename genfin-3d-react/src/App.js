import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Table3D from './components/Table3D';
import RightPanel from './components/RightPanel';
import Controls from './components/Controls';

function App() {
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [perspective, setPerspective] = useState(1200);
  const [tableData, setTableData] = useState([
    { id: 152, cf: 'CF', type: 'Loan Collection Lead', task: 'Loan Collection Select', date: '2025-10-22', time1: '10:11', time2: '10:11', days: 206 },
    { id: 153, cf: 'CF', type: 'Loan Collection Lead', task: 'Generate Collection Batch', date: '2025-10-22', time1: '10:39', time2: '10:21', days: 206 },
    { id: 154, cf: 'CF', type: 'Loan Collection Lead', task: 'Generate Collection Batch', date: '2025-10-22', time1: '10:37', time2: '10:31', days: 206 },
    { id: 155, cf: 'CF', type: 'Loan Collection Lead', task: 'Generate Collection Batch', date: '2025-10-27', time1: '09:28', time2: '09:23', days: 201 },
    { id: 156, cf: 'CF', type: 'Loan Collection Lead', task: 'Loan Collection Select', date: '2025-10-27', time1: '09:29', time2: '09:29', days: 201 },
    { id: 157, cf: 'CF', type: 'Loan Collection Lead', task: 'Loan Collection Select', date: '2025-10-27', time1: '11:28', time2: '11:28', days: 201 },
    { id: 158, cf: 'CF', type: 'Loan Collection Lead', task: 'Loan Collection Select', date: '2025-10-27', time1: '11:34', time2: '11:34', days: 201 },
    { id: 159, cf: 'CF', type: 'Loan Collection Lead', task: 'Loan Collection Select', date: '2025-10-27', time1: '12:22', time2: '12:22', days: 201 },
    { id: 160, cf: 'CF', type: 'Loan Collection Lead', task: 'Loan Collection Select', date: '2025-10-27', time1: '12:45', time2: '12:45', days: 201 }
  ]);

  const handleRotate = (deltaX, deltaY) => {
    setRotationY(prev => prev + deltaX * 0.5);
    setRotationX(prev => Math.max(-20, Math.min(20, prev + deltaY * 0.5)));
  };

  const handleRotateButton = () => {
    setRotationY(prev => prev + 90);
  };

  const handleResetView = () => {
    setRotationY(0);
    setRotationX(0);
    setPerspective(1200);
  };

  const handleZoom = (delta) => {
    setPerspective(prev => Math.max(600, Math.min(2000, prev + delta)));
  };

  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <RightPanel />
      <Controls 
        onRotate={handleRotateButton} 
        onReset={handleResetView} 
        onZoom={handleZoom}
      />
      <Table3D 
        data={tableData}
        rotationX={rotationX}
        rotationY={rotationY}
        perspective={perspective}
        onRotate={handleRotate}
        onZoom={handleZoom}
      />
    </div>
  );
}

export default App;