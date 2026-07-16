import React from 'react';
import { motion } from 'framer-motion';
import './Controls.css';

const Controls = ({ onRotate, onReset, onZoom }) => {
  return (
    <div className="bottom-controls">
      <motion.button 
        className="control-btn"
        title="Rotate 90°"
        onClick={onRotate}
        whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(102, 126, 234, 0.8)' }}
        whileTap={{ scale: 0.9 }}
      >
        🔄
      </motion.button>
      
      <motion.button 
        className="control-btn"
        title="Reset View"
        onClick={onReset}
        whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(102, 126, 234, 0.8)' }}
        whileTap={{ scale: 0.9 }}
      >
        🏠
      </motion.button>
      
      <motion.button 
        className="control-btn"
        title="Export"
        onClick={() => alert('Export feature: Screenshot or data export')}
        whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(102, 126, 234, 0.8)' }}
        whileTap={{ scale: 0.9 }}
      >
        📊
      </motion.button>
    </div>
  );
};

export default Controls;