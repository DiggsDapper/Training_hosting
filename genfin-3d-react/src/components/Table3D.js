import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Table3D.css';

const Table3D = ({ data, rotationX, rotationY, perspective, onRotate, onZoom }) => {
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
      className="table-3d-container"
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
          className="table-3d"
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
          {/* Header Row */}
          <motion.div className="table-row header-row">
            <div className="cell header-cell" style={{ width: '60px' }}>ID</div>
            <div className="cell header-cell" style={{ width: '50px' }}>CF</div>
            <div className="cell header-cell" style={{ width: '250px' }}>Type</div>
            <div className="cell header-cell" style={{ width: '300px' }}>Task</div>
            <div className="cell header-cell" style={{ width: '150px' }}>Date</div>
            <div className="cell header-cell" style={{ width: '120px' }}>Time In</div>
            <div className="cell header-cell" style={{ width: '120px' }}>Time Out</div>
            <div className="cell header-cell" style={{ width: '80px' }}>Days</div>
          </motion.div>

          {/* Data Rows */}
          {data.map((row, index) => (
            <motion.div 
              key={index}
              className={`table-row data-row ${index % 2 === 0 ? 'even' : 'odd'}`}
              onHoverStart={() => setIsHovering(index)}
              onHoverEnd={() => setIsHovering(null)}
              whileHover={{
                scale: 1.02,
                x: 10,
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="cell" style={{ width: '60px' }}>{row.id}</div>
              <div className="cell" style={{ width: '50px' }}>{row.cf}</div>
              <div className="cell" style={{ width: '250px', textAlign: 'left' }}>{row.type}</div>
              <div className="cell" style={{ width: '300px', textAlign: 'left' }}>{row.task}</div>
              <div className="cell" style={{ width: '150px' }}>{row.date}</div>
              <div className="cell" style={{ width: '120px' }}>{row.time1}</div>
              <div className="cell" style={{ width: '120px' }}>{row.time2}</div>
              <div className="cell" style={{ width: '80px', color: '#667eea', fontWeight: 'bold' }}>{row.days}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Table3D;