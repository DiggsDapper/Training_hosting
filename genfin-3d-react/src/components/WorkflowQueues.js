import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './WorkflowQueues.css';

const WorkflowQueues = ({ data, rotationX, rotationY, perspective, onRotate, onZoom }) => {
  const [isHovering, setIsHovering] = useState(null);
  let lastX = 0;
  let lastY = 0;
  let isDragging = false;

  const handleMouseDown = (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      onRotate(deltaX, deltaY);
      lastX = e.clientX;
      lastY = e.clientY;
    }
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    onZoom(-e.deltaY);
  };

  return (
    <div 
      className="workflow-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
    >
      <motion.div 
        className="table-wrapper"
        style={{
          perspective: `${perspective}px`,
        }}
      >
        <motion.div 
          className="workflow-table"
          animate={{
            rotateX: rotationX,
            rotateY: rotationY,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            mass: 1,
          }}
        >
          {/* Table Header */}
          <div className="table-header-row">
            <div className="header-cell" style={{ width: '50px' }}>ID</div>
            <div className="header-cell" style={{ width: '40px' }}>CF</div>
            <div className="header-cell" style={{ width: '160px' }}>Type</div>
            <div className="header-cell" style={{ width: '180px' }}>Task</div>
            <div className="header-cell" style={{ width: '120px' }}>Date</div>
            <div className="header-cell" style={{ width: '130px' }}>Note</div>
            <div className="header-cell" style={{ width: '70px' }}>User</div>
            <div className="header-cell" style={{ width: '150px' }}>Time In</div>
            <div className="header-cell" style={{ width: '150px' }}>Time Out</div>
            <div className="header-cell" style={{ width: '140px' }}>Duration</div>
            <div className="header-cell" style={{ width: '100px' }}>Actions</div>
          </div>

          {/* Table Rows */}
          {data.map((row, index) => (
            <motion.div 
              key={index}
              className={`table-row ${index % 2 === 0 ? 'even' : 'odd'}`}
              onHoverStart={() => setIsHovering(index)}
              onHoverEnd={() => setIsHovering(null)}
              whileHover={{
                scale: 1.01,
                x: 5,
                backgroundColor: index % 2 === 0 ? '#f0f8ff' : '#f5faff'
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="cell" style={{ width: '50px', color: '#4a5fc7', fontWeight: 'bold' }}>{row.id}</div>
              <div className="cell" style={{ width: '40px' }}>{row.cf}</div>
              <div className="cell" style={{ width: '160px', textAlign: 'left' }}>{row.type}</div>
              <div className="cell" style={{ width: '180px', textAlign: 'left' }}>{row.task}</div>
              <div className="cell" style={{ width: '120px', fontSize: '10px' }}>{row.date}</div>
              <div className="cell" style={{ width: '130px', fontSize: '10px' }}>{row.note}</div>
              <div className="cell" style={{ width: '70px', fontSize: '10px', color: '#666' }}>{row.user}</div>
              <div className="cell" style={{ width: '150px', fontSize: '10px' }}>{row.time1}</div>
              <div className="cell" style={{ width: '150px', fontSize: '10px' }}>{row.time2}</div>
              <div className="cell" style={{ width: '140px', fontSize: '10px', background: '#ffd4d4', padding: '4px' }}>{row.duration}</div>
              <div className="cell" style={{ width: '100px' }}>
                <div className="action-icons">📋 🔗 ✓</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkflowQueues;