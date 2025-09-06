"use client";
import React from "react";
import "./feature.css";

function Features() {
    const features = [
        {
            icon: "👥",
            title: "Team Collaboration",
            description: "Work together seamlessly with real-time collaboration tools and shared workspaces.",
        },
        {
            icon: "📅",
            title: "Project Management",
            description: "Keep track of deadlines, milestones, and project progress with intuitive planning tools.",
        },
        {
            icon: "📊",
            title: "Analytics & Insights",
            description: "Get valuable insights into team performance and project metrics with detailed analytics.",
        },
        {
            icon: "🛡️",
            title: "Enterprise Security",
            description: "Bank-level security with end-to-end encryption and compliance with industry standards.",
        },
        {
            icon: "⚡",
            title: "Fast Performance",
            description: "Lightning-fast load times and responsive interface that scales with your team.",
        },
        {
            icon: "✅",
            title: "Task Management",
            description: "Organize tasks, set priorities, and track completion with our powerful task management system.",
        },
    ];

    return (
        <div className="features-container">
            <div className="features-header">
                <h2>Powerful Features for Modern Teams</h2>
                <p>
                    Everything you need to manage projects, collaborate with your team, and
                    deliver exceptional results.
                </p>
            </div>

            <div className="features-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
