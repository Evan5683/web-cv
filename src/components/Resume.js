import GameBoard from './GameBoard';
import React, { useState } from 'react';
import "../styles/Resume.css";


function Resume() {
    const [activeIndex, setActiveIndex] = useState(0);
    const projects = [<GameBoard />, 'Weather App', 'Calendar Widget']; // Replace these with your projects

    const nextProject = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div className="slider-container">
            <button onClick={prevProject}>Previous</button>
            <div className="project-slide">
                {projects[activeIndex]}
            </div>
            <button onClick={nextProject}>Next</button>
        </div>
    );
}

export default Resume;

