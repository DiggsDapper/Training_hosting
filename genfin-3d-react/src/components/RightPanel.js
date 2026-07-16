import React from 'react';
import { motion } from 'framer-motion';
import './RightPanel.css';

const RightPanel = () => {
  return (
    <motion.div 
      className="right-panel"
      initial={{ x: 280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="panel-header">🔍 Queue Info</div>
      
      <motion.div 
        className="panel-stat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <span className="stat-label">Current Items</span>
        <span className="stat-value">200</span>
      </motion.div>
      
      <motion.div 
        className="panel-stat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <span className="stat-label">Collection</span>
        <span className="stat-value">22 Oct 2025</span>
      </motion.div>
      
      <motion.div 
        className="panel-stat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="stat-label">Queue Status</span>
        <span className="stat-value">206 Days</span>
      </motion.div>
      
      <motion.div 
        className="panel-stat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <span className="stat-label">Load Balance</span>
        <span className="stat-value">84%</span>
      </motion.div>
      
      <motion.div 
        className="panel-stat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="stat-label">Priority</span>
        <span className="stat-value">High</span>
      </motion.div>
      
      <motion.div 
        className="panel-stat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <span className="stat-label">Next Refresh</span>
        <span className="stat-value">28 sec</span>
      </motion.div>
    </motion.div>
  );
};

export default RightPanel;