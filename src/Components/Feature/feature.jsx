import React from "react";
import './feature.css';

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <h2 className="features-title">
        Everything you need to manage projects
      </h2>

      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-card">
          <div className="icon-box blue">
            <span className="icon">✔</span>
          </div>
          <h3>Task Management</h3>
          <p>
            Create, assign, and track tasks with our intuitive kanban boards.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <div className="icon-box purple">
            <span className="icon">👥</span>
          </div>
          <h3>Team Collaboration</h3>
          <p>
            Keep your team aligned with real-time updates and notifications.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <div className="icon-box green">
            <span className="icon">⚡</span>
          </div>
          <h3>Lightning Fast</h3>
          <p>
            Built for speed with modern technology that keeps up with your team.
          </p>
        </div>
      </div>
    </section>
  );
}
