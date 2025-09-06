"use client";   

import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      {/* About Header */}
      <section className="about-header">
        <h1>About TeamFlow</h1>
        <p>
          We're building the future of team collaboration, one project at a time.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            TeamFlow was born out of frustration with existing project
            management tools that were either too complex or too simple. We
            wanted to create something that was powerful enough for enterprise
            teams but simple enough for anyone to use.
          </p>
          <p>
            Founded in 2020 by a team of engineers and designers who had worked
            at leading tech companies, we've grown from a small startup to a
            platform trusted by teams worldwide.
          </p>
          <p>
            Today, we're proud to help thousands of teams streamline their
            workflow and achieve their goals more efficiently than ever before.
          </p>
        </div>

        <div className="story-stats">
          <div className="stat-card">
            <h3>50K+</h3>
            <p>Active Teams</p>
          </div>
          <div className="stat-card">
            <h3>2M+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3>99.9%</h3>
            <p>Uptime</p>
          </div>
          <div className="stat-card">
            <h3>150+</h3>
            <p>Countries</p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="our-values">
        <h2>Our Values</h2>
        <p>
          These core values guide everything we do and help us stay focused on
          what matters most.
        </p>
        <div className="values-grid">
          <div className="value-card">
            <span className="icon">🎯</span>
            <h3>Mission Driven</h3>
            <p>
              We're on a mission to make team collaboration effortless and
              productive for everyone.
            </p>
          </div>
          <div className="value-card">
            <span className="icon">👥</span>
            <h3>People First</h3>
            <p>
              Great products are built by great teams who put people at the
              center of everything.
            </p>
          </div>
          <div className="value-card">
            <span className="icon">🏆</span>
            <h3>Excellence</h3>
            <p>
              We strive for excellence in everything we do, from product design
              to customer support.
            </p>
          </div>
          <div className="value-card">
            <span className="icon">🌍</span>
            <h3>Global Impact</h3>
            <p>
              Our goal is to empower teams worldwide to achieve their full
              potential together.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
