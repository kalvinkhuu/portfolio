// src/components/SocialTooltip.js
import React from 'react';
import { FaHome, FaGraduationCap, FaHardHat, FaLaptopCode, FaMicrochip , FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';
import './css/SocialTooltip.css';

const SocialTooltip = () => {
  return (
    <div className="social-tooltip">
      <a href="#about" data-title="Home">
        <FaHome size={24} />
      </a>
      <div className="separator"></div>
      <a href="#educations" data-title="Education">
        <FaGraduationCap size={24} />
      </a>
      <a href="#experience" data-title="Work">
        <FaHardHat size={24} />
      </a>
      <a href="#projects" data-title="Projects">
        <FaLaptopCode size={24} />
      </a>
      <a href="#skills" data-title="Skills">
        <FaMicrochip size={24} />
      </a>
      <div className="separator"></div>
      <a href="https://www.linkedin.com/in/kalvin-khuu/" target="_blank" rel="noopener noreferrer" data-title="LinkedIn">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/kalvinkhuu" target="_blank" rel="noopener noreferrer" data-title="GitHub">
        <FaGithub size={24} />
      </a>
      <a href="mailto:kalvin.khuu@gmail.com" target="_blank" rel="noopener noreferrer" data-title="Contact">
        <FaMailBulk size={24} />
      </a>
    </div>
  );
};

export default SocialTooltip;