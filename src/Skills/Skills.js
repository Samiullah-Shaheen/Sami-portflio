import React, { useState } from "react";
import "./skills.css";

export default function Skills({ skilltitle, skilldesc }) {
  const [showTools, setShowTools] = useState(false);

  const skills = [
    { name: "HTML5", image: "images/skills/html5.png" },
    { name: "CSS3", image: "images/skills/css3.png" },
    { name: "JavaScript", image: "images/skills/javascript.png" },
    { name: "TypeScript", image: "images/skills/typescript.png" },
    { name: "jQuery", image: "images/skills/jquery.png" },
    { name: "Bootstrap", image: "images/skills/bootstrap.png" },
    { name: "Angular", image: "images/skills/angular.png" },
    { name: "React", image: "images/skills/react.png" },
    { name: "Vue", image: "images/skills/vue.png" },
    { name: "Firebase", image: "images/skills/firebase.png" },
    { name: "PugJs", image: "images/skills/pugjs.png" },
    { name: "SASS", image: "images/skills/sass.png" },
  ];

  const tools = [
    { name: "Ajax", image: "images/skills/ajax.png" },
    { name: "Gulp", image: "images/skills/gulp.png" },
    { name: "Webpack", image: "images/skills/webpack.png" },
    { name: "Git", image: "images/skills/git.png" },
    { name: "Npm", image: "images/skills/npm.png" },
    { name: "Command Line", image: "images/skills/command.png" },
    { name: "VS Code", image: "images/skills/vs-code.png" },
    { name: "Trello", image: "images/skills/trello.png" },
    { name: "ClickUp", image: "images/skills/clickup.png" },
    { name: "Slack", image: "images/skills/slack.png" },
    { name: "Photoshop", image: "images/skills/photoshop.png" },
    { name: "Adobe XD", image: "images/skills/adobe-xd.png" },
  ];

  const currentItems = showTools ? tools : skills;

  return (
    <div className="skills-container">
      <div className="skills-content section-content">
        <p className="section-subtitle">My skills</p>

        <h2 className="h3 section-title">{skilltitle}</h2>

        <p className="section-text">{skilldesc}</p>

        <div className={`skills-toggle ${showTools ? 'active' : ''}`} data-toggle-box>
          <button className="toggle-btn Skillbtn" onClick={() => setShowTools(false)}>
            Skills
          </button>

          <button className="toggle-btn Skillbtn" onClick={() => setShowTools(true)}>
            Tools
          </button>
        </div>
      </div>

      <div class="skills-box" data-skills-box>
        <ul class="skills-list">
          {currentItems.map((item, index) => (
            <li key={index}>
              <div class="skill-card">
                <div class="tooltip">{item.name}</div>
                <div class="card-icon">
                  <img src={item.image} alt={`${item.name} logo`} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
