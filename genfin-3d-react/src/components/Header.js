import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-row">
        <div className="logo">
          <div className="logo-icon">G</div>
          <span>GENFIN 3D</span>
        </div>
        <nav className="nav-menu">
          <div className="nav-item active">TASKS</div>
          <div className="nav-item">WORKFLOW</div>
          <div className="nav-item">PAGE TASKS</div>
          <div className="nav-item">HELP</div>
        </nav>
        <div className="time-display">58:29</div>
      </div>
      <div className="header-row">
        <div className="tab-group">
          <div className="tab active">QUEUES</div>
          <div className="tab">EMAILS</div>
          <div className="tab escalation">ESCALATIONS</div>
        </div>
      </div>
    </header>
  );
};

export default Header;