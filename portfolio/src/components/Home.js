import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Styling Files/home.css";

export default function Home({ imageUrl }) {
  return (
    <div className="circular-image-description">
      <div className="image-container">
        <div className="circular-image">
          <img src={imageUrl} alt="Circular" />
        </div>
      </div>
      <div className="description">
        <p className="description_firstLine">Hello I'm</p>
        <span className="description_name">Aaryan Shukla</span>
        <br />
        <span>
          Dedicated web developer with a keen eye for analytics, <br />
          specializing in creating solid and scalable front-end products that{" "}
          <br />
          deliver outstanding user experiences.
        </span>
        <div className="button-container">
          <a
            href="/AaryanShukla_Resume_Updated.pdf"
            download
            className="button-57">
            <span className="text">Resume/CV</span>
            <span>Click to Download</span>
          </a>
        </div>
        <a
          href="https://www.linkedin.com/in/aaryan-shukla-b721441bb"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
        <a
          href="https://github.com/aaryan-shukla"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button-git">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
      </div>
    </div>
  );
}
