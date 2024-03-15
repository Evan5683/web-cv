import React from 'react';
import '../styles/Home.css'; // Import the CSS file

function Home() {
    return (
        <div className="about-me">
            <img className="profile-photo" src="your-photo-url" alt="Your Name" />

            <div className="about-me">
                <h1 className="line-animation" style={{ animationDelay: '0.5s' }}>About Me</h1>
                <p className="line-animation" style={{ animationDelay: '1s' }}>My name is [Your Name].</p>
                <p className="line-animation" style={{ animationDelay: '1.5s' }}>I am a [Your Profession] based in [Your Location].</p>
                <p className="line-animation" style={{ animationDelay: '2s' }}>[A few sentences about your background, experience, and interests.]</p>
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    {/* More skills */}
                </ul>
            </div>

            <div className="contact">
                <h3>Contact Me</h3>
                <p>Email: your-email@example.com</p>
                {/* Icons can be used here for social media links */}
            </div>

            <a className="resume-link" href="your-resume-link" download>Download My Resume</a>
        </div>
    );
}

export default Home;
