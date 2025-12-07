import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [servicesExpanded, setServicesExpanded] = useState(true);
  const [invoicesExpanded, setInvoicesExpanded] = useState(true);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="user-profile">
          <div className="user-name">Anurag Yadav</div>
        </div>
        <div className="sidebar-dropdown">▼</div>
      </div>
      <nav className="sidebar-nav">
        <div className="nav-item">Dashboard</div>
        <div className="nav-item">Nexus</div>
        <div className="nav-item">Intake</div>
        <div className="nav-section">
          <div className="nav-section-header" onClick={() => setServicesExpanded(!servicesExpanded)}>
            Services <span className="arrow">{servicesExpanded ? '▼' : '▶'}</span>
          </div>
          {servicesExpanded && (
            <div className="nav-section-items">
              <label className="nav-radio">
                <input type="radio" name="services" value="pre-active" />
                <span className="radio-custom"></span>
                <span className="radio-label">Pre-active</span>
              </label>
              <label className="nav-radio">
                <input type="radio" name="services" value="active" />
                <span className="radio-custom"></span>
                <span className="radio-label">Active</span>
              </label>
              <label className="nav-radio">
                <input type="radio" name="services" value="blocked" />
                <span className="radio-custom"></span>
                <span className="radio-label">Blocked</span>
              </label>
              <label className="nav-radio">
                <input type="radio" name="services" value="closed" defaultChecked />
                <span className="radio-custom"></span>
                <span className="radio-label">Closed</span>
              </label>
            </div>
          )}
        </div>
        <div className="nav-section">
          <div className="nav-section-header" onClick={() => setInvoicesExpanded(!invoicesExpanded)}>
            Invoices <span className="arrow">{invoicesExpanded ? '▼' : '▶'}</span>
          </div>
          {invoicesExpanded && (
            <div className="nav-section-items no-padding">
              <div className="nav-item selected">Proforma Invoices</div>
              <div className="nav-item">Final Invoices</div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
