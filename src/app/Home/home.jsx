import React from "react";
/*import Navbar from "../components/Navbar";*/
import './home.css';
import FeaturesSection from "../../Components/Feature/feature.jsx";
import Link from "next/link";



export default function Home() {
  return (
    <>
        {/*<Navbar />*/}
            <div className="hero-section">
        <div className="hero-content">
          <h1>
            Collaborate <span className="bold-text">Better</span>, <br />
            <span className="highlight">Deliver Faster</span>
          </h1>
          <p className="hero-description">
            TeamFlow brings your team together with powerful project
            management tools. Track progress, manage tasks, and deliver projects
            on time.
          </p>
          <div className="hero-buttons">
            <Link href="/signin"><button className="btn-primary">Start Free Trial →</button></Link>
            <Link href="/signin"><button className="btn-secondary">Sign In</button></Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="card">
            <div className="card-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="card-body">
              <div className="task-column">
                <h4>TO DO</h4>
                <div className="task-box"></div>
                <div className="task-box"></div>
              </div>
              <div className="task-column">
                <h4>IN PROGRESS</h4>
                <div className="task-box"></div>
              </div>
              <div className="task-column">
                <h4>DONE</h4>
                <div className="task-box"></div>
                <div className="task-box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturesSection />
    </>
  );
}
