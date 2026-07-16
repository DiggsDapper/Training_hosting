import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ExpandableSections.css';

const ExpandableSections = () => {
  const [expanded, setExpanded] = useState({});

  const sections = [
    { id: 1, title: 'TASKS NOT ATTENDED TO (64 Items)', items: 64 },
    { id: 2, title: 'MY TASKS THAT HAVE BEEN ESCALATED (0 Items)', items: 0 },
    { id: 3, title: 'MY TASKS ON HOLD (2 Items)', items: 2 },
    { id: 4, title: 'TASKS ESCALATED TO ME (0 Items)', items: 0 },
    { id: 5, title: 'QUORUM TASKS (0 Items)', items: 0 },
    { id: 6, title: 'STANDIN', items: null }
  ];

  const toggleSection = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="expandable-sections">
      {sections.map((section) => (
        <motion.div 
          key={section.id}
          className="expandable-section"
        >
          <motion.button
            className="section-header"
            onClick={() => toggleSection(section.id)}
            whileHover={{ backgroundColor: '#f0f2f5' }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span 
              className="expand-icon"
              animate={{ rotate: expanded[section.id] ? 90 : 0 }}
            >
              ▶
            </motion.span>
            <span className="section-title">{section.title}</span>
          </motion.button>
          
          <motion.div
            className="section-content"
            initial={false}
            animate={{
              height: expanded[section.id] ? 'auto' : 0,
              opacity: expanded[section.id] ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {section.items !== null && (
              <div className="content-placeholder">
                {section.items > 0 ? `${section.items} items loaded` : 'No items'}
              </div>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExpandableSections;