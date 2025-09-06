"use client";
import React from "react";
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h2>
          Welcome back, <span className="highlight">John!</span> 👋
        </h2>
        <p>Here’s what’s happening with your projects today.</p>
        <button className="new-project-btn">+ New Project</button>
      </div>

      {/* Stats Section */}
      <div className="stats-grid">
        <div className="stat-card blue">
          <h3>3</h3>
          <p>Active Projects</p>
        </div>
        <div className="stat-card purple">
          <h3>44</h3>
          <p>Total Tasks</p>
        </div>
        <div className="stat-card green">
          <h3>13</h3>
          <p>Team Members</p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section">
        <h3>Your Projects</h3>
        <div className="projects-grid">
          <div className="project-card">
            <span className="status blue-dot"></span>
            <h4>Website Redesign</h4>
            <p>
              Modernizing our company website with new branding and improved UX
            </p>
            <div className="project-stats">
              <span>12 TASKS</span>
              <span>4 MEMBERS</span>
            </div>
            <p className="updated">Updated 2 hours ago</p>
          </div>

          <div className="project-card">
            <span className="status purple-dot"></span>
            <h4>Mobile App Development</h4>
            <p>
              Building a native mobile app for iOS and Android platforms
            </p>
            <div className="project-stats">
              <span>24 TASKS</span>
              <span>6 MEMBERS</span>
            </div>
            <p className="updated">Updated 1 day ago</p>
          </div>

          <div className="project-card">
            <span className="status green-dot"></span>
            <h4>Marketing Campaign</h4>
            <p>
              Q4 product launch marketing campaign across all channels
            </p>
            <div className="project-stats">
              <span>8 TASKS</span>
              <span>3 MEMBERS</span>
            </div>
            <p className="updated">Updated 3 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
