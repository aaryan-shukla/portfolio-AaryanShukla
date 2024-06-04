// SkillCard.js
import React from "react";
import "./Styling Files/skillcard.css"; // Import the CSS file for styling

export default function SkillCard({ logo, name }) {
  return (
    <div className="skill-card">
      <img src={logo} alt={`${name} logo`} className="skill-logo" />
      <p className="skill-name">{name}</p>
    </div>
  );
}
