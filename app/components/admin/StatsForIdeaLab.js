import React from 'react';
import "./styles/StatsForIdeaLab.css";

// StatsForIdeaLab.js

export default function StatsForIdeaLab({ stats }) {
    const { staffCount, printerCount, projectsCompleted, activeUsers } = stats;

    return (
        <div className="stats-idea-lab">
            <h1>IdeaLab Statistics</h1>
            <div className="stats-grid">
                <div className="stat-item">
                    <h2>Staff Members</h2>
                    <p>{staffCount}</p>
                </div>
                <div className="stat-item">
                    <h2>3D Printers</h2>
                    <p>{printerCount}</p>
                </div>
                <div className="stat-item">
                    <h2>Projects Completed</h2>
                    <p>{projectsCompleted}</p>
                </div>
                <div className="stat-item">
                    <h2>Active Users</h2>
                    <p>{activeUsers}</p>
                </div>
            </div>
        </div>
    );
}