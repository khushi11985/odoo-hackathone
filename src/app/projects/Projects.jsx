import React from "react";
/*import Navbar from "../../Components/Navbar";*/
import "./project.css";
export default function projects() {
  return (
    <>
      
      <div className="projects-page">
        {/* Header with Button */}
        <div className="projects-header">
          <div>
            <h1>Projects</h1>
            <p>Manage and track all your team projects in one place</p>
          </div>
          <button className="new-project-btn">+ New Project</button>
        </div>

        {/* Search and Filters */}
        <div className="projects-filters">
          <input type="text" placeholder="Search projects..." />
          <button className="filter-btn">Filters</button>
        </div>

        {/* Stats */}
        <div className="projects-stats">
          <div className="stat-box">
            <h2>6</h2>
            <p>Total Projects</p>
          </div>
          <div className="stat-box">
            <h2>4</h2>
            <p>Active</p>
          </div>
          <div className="stat-box">
            <h2>2</h2>
            <p>Completed</p>
          </div>
          <div className="stat-box">
            <h2>132</h2>
            <p>Total Tasks</p>
          </div>
        </div>

        {/* Project Cards */}
        <div className="projects-grid">
          {/* Card 1 */}
          <div className="project-card">
            <h3>Website Redesign <span className="status active">Active</span></h3>
            <p>Modernizing our company website with new branding and improved UX design system.</p>
            <div className="card-info">
              <span>12 tasks</span> | <span>4 members</span> | <span>Due 2/15/2024</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "67%" }}></div>
            </div>
            <small>High Priority</small>
          </div>

          {/* Card 2 */}
          <div className="project-card">
            <h3>Mobile App Development <span className="status active">Active</span></h3>
            <p>Building a native mobile app for iOS and Android platforms with React Native.</p>
            <div className="card-info">
              <span>24 tasks</span> | <span>6 members</span> | <span>Due 3/1/2024</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "67%" }}></div>
            </div>
            <small>High Priority</small>
          </div>

          {/* Card 3 */}
          <div className="project-card">
            <h3>Marketing Campaign <span className="status completed">Completed</span></h3>
            <p>Q4 product launch marketing campaign across all digital channels.</p>
            <div className="card-info">
              <span>8 tasks</span> | <span>3 members</span> | <span>Due 2/25/2024</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "100%" }}></div>
            </div>
            <small>Medium Priority</small>
          </div>

          {/* Card 4 */}
          <div className="project-card">
            <h3>CRM Integration <span className="status active">Active</span></h3>
            <p>Integrating CRM system to manage leads and improve sales workflow.</p>
            <div className="card-info">
              <span>18 tasks</span> | <span>5 members</span> | <span>Due 3/10/2024</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "45%" }}></div>
            </div>
            <small>High Priority</small>
          </div>

          {/* Card 5 */}
          <div className="project-card">
            <h3>Internal Dashboard <span className="status active">Active</span></h3>
            <p>Building a dashboard for internal reporting and analytics.</p>
            <div className="card-info">
              <span>10 tasks</span> | <span>2 members</span> | <span>Due 2/28/2024</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "30%" }}></div>
            </div>
            <small>Medium Priority</small>
          </div>

          {/* Card 6 */}
          <div className="project-card">
            <h3>Onboarding Flow <span className="status completed">Completed</span></h3>
            <p>Improving the onboarding process for new users to increase retention.</p>
            <div className="card-info">
              <span>6 tasks</span> | <span>2 members</span> | <span>Due 1/15/2024</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "100%" }}></div>
            </div>
            <small>Low Priority</small>
          </div>
        </div>
      </div>
    </>
  );
}
