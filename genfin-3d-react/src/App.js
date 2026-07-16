import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WorkflowQueues from './components/WorkflowQueues';
import ExpandableSections from './components/ExpandableSections';
import Controls from './components/Controls';

function App() {
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [perspective, setPerspective] = useState(1200);
  const [tableData] = useState([
    { id: 104, cf: 'CF', type: 'Complete Application Forms', task: 'Waiting For Statements', date: '2024-99999-24', note: 'Whatsapp Testing 24', user: 'SYSTEM', time1: '2025-07-25 08:44', time2: '2025-07-31 11:32:08', duration: '359 Days 21 Hours 01 Minutes' },
    { id: 105, cf: 'CF', type: 'Complete Application Forms', task: 'Loan Application', date: '2024-079578-24', note: 'Whatsapp Demo', user: 'SYSTEM', time1: '2025-11-13 09:48:53', time2: '2025-07-25 09:04:26', duration: '355 Days 23 Hours 29 Minutes' },
    { id: 106, cf: 'CF', type: 'Complete Application Forms', task: 'Loan Application', date: '2024-079578-24', note: 'Whatsapp Demo', user: 'SYSTEM', time1: '2025-11-13 09:37:58', time2: '2025-07-25 09:04:27', duration: '355 Days 23 Hours 29 Minutes' },
    { id: 107, cf: 'CF', type: 'Complete Application Forms', task: 'Loan Application', date: '2024-079578-24', note: 'Whatsapp Demo', user: 'SYSTEM', time1: '2025-11-13 09:34:12', time2: '2025-07-25 09:04:27', duration: '355 Days 23 Hours 29 Minutes' },
    { id: 108, cf: 'CF', type: 'Complete Application Forms', task: 'Bureau Check', date: '2024-079578-24', note: 'Whatsapp Demo', user: 'SYSTEM', time1: '2025-11-10 08:58:32', time2: '2025-07-25 09:04:27', duration: '355 Days 23 Hours 29 Minutes' },
    { id: 109, cf: 'CF', type: 'Complete Application Forms', task: 'Contact Customer for Statements', date: '2024-079578-24', note: 'Whatsapp Demo', user: 'SYSTEM', time1: '2025-08-25 13:05:06', time2: '2025-07-25 09:04:27', duration: '355 Days 23 Hours 29 Minutes' },
    { id: 110, cf: 'CF', type: 'Complete Application Forms', task: 'Bureau Check', date: '2024-079578-24', note: 'Whatsapp Demo', user: 'SYSTEM', time1: '2025-07-31 11:52:00', time2: '2025-07-25 09:04:27', duration: '355 Days 23 Hours 29 Minutes' },
    { id: 111, cf: 'CF', type: 'Complete Application Forms', task: 'Bureau Check', date: '2024-079578-24', note: 'Whatsapp Demo', user: 'SYSTEM', time1: '2025-07-29 14:03:43', time2: '2025-07-25 09:04:27', duration: '355 Days 23 Hours 29 Minutes' },
    { id: 112, cf: 'CF', type: 'Complete Application Forms', task: 'Bureau Check', date: '2024-079578-24', note: 'Whatsapp Demo', user: 'SYSTEM', time1: '2025-07-28 11:18:20', time2: '2025-07-25 09:04:27', duration: '355 Days 23 Hours 29 Minutes' },
  ]);

  const handleRotate = (deltaX, deltaY) => {
    setRotationY(prev => prev + deltaX * 0.5);
    setRotationX(prev => Math.max(-15, Math.min(15, prev + deltaY * 0.5)));
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
    setPerspective(prev => Math.max(800, Math.min(1800, prev + delta)));
  };

  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <Controls 
        onRotate={handleRotateButton} 
        onReset={handleResetView} 
        onZoom={handleZoom}
      />
      <WorkflowQueues 
        data={tableData}
        rotationX={rotationX}
        rotationY={rotationY}
        perspective={perspective}
        onRotate={handleRotate}
        onZoom={handleZoom}
      />
      <ExpandableSections />
    </div>
  );
}

export default App;