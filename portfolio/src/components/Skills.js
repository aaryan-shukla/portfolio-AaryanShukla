import React, { useEffect, useState } from "react";
import SkillCard from "./skillcard.js";
import "./Styling Files/Skills.css"; // Import the CSS file for styling the section

const skills = [
  { name: "C++", logo: "./cpplogo.png" },
  { name: "HTML", logo: "./htmllogo.png" },
  { name: "Css", logo: "./csslogo.png" },
  { name: "JavaScript", logo: "./jslogo.jpg" },
  { name: "Python", logo: "./pythonlogo.jpeg" },
  { name: "React", logo: "./reactlogo.png" },
  { name: "Node.js", logo: "./nodejs.png" },
  { name: "Java", logo: "./javalogo.png" },
  { name: "Kotlin", logo: "./kotlinlogo.png" },
  { name: "Tableau", logo: "./tableaulogo.png" },
  { name: "Django", logo: "./djangologo.png" },
  { name: "MongoDB", logo: "./mongodblogo.png" },
  { name: "SnowFlake", logo: "./snowflakelogo.png" },
  { name: "Elastic Search", logo: "./eslogo.png" },
  { name: "SQL", logo: "./sqllogo.png" },
  { name: "Kibana", logo: "./kibanalogo.png" },
  { name: "MS Excel", logo: "./excelLogo.png" },
];

export default function Skills() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // Adjust the scroll position as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`skills-section ${scrolled ? "scrolled" : ""}`}>
      <div className="my_skill_title">My Skills</div>
      {skills.map((skill, index) => (
        <SkillCard key={index} logo={skill.logo} name={skill.name} />
      ))}
    </section>
  );
}
