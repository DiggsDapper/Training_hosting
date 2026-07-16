import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-section">
          <div className="logo-icon">G</div>
          <span className="logo-text">GENFIN</span>
        </div>
        <nav className="nav-menu">
          <div className="nav-item active">TASKS</div>
          <div className="nav-item">WORKFLOW</div>
          <div className="nav-item">PAGE TASKS</div>
          <div className="nav-item">HELP</div>
        </nav>
        <div className="time-display">30:00</div>
      </div>
      <div className="header-tabs">
        <div className="tab active">QUEUES</div>
        <div className="tab">EMAILS</div>
        <div className="tab escalation">ESCALATIONS</div>
      </div>
      <div className="workflow-header">WORKFLOW QUEUES</div>
    </header>
  );
};

export default Header;