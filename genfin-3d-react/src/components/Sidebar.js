import React from 'react';
import { motion } from 'framer-motion';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <motion.div 
      className="left-sidebar"
      initial={{ x: -55 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div 
        className="sidebar-item active"
        whileHover={{ scale: 1.08, boxShadow: '0 0 15px rgba(102, 126, 234, 0.6)' }}
        whileTap={{ scale: 0.95 }}
      >
        📋
      </motion.div>
      <motion.div 
        className="sidebar-item"
        whileHover={{ scale: 1.08, boxShadow: '0 0 15px rgba(102, 126, 234, 0.6)' }}
        whileTap={{ scale: 0.95 }}
      >
        ✉️
      </motion.div>
      <motion.div 
        className="sidebar-item"
        whileHover={{ scale: 1.08, boxShadow: '0 0 15px rgba(102, 126, 234, 0.6)' }}
        whileTap={{ scale: 0.95 }}
      >
        ⚠️
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;