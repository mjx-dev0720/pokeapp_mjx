import React from 'react';
import './About.css';


const About = () => (
  <div className="about-outer-container">
    <div className="about-container">
      <h2>Creator</h2>
      <div className="about-name">Marc Jay Sumayaw</div>
      <div className="about-links">
        <a
          href="https://www.facebook.com/metawin.mjx7"
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/metawin.mjx7/"
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@youroneandonlymj"
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
        <a
          href="https://github.com/mjx-dev0720"
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default About;
