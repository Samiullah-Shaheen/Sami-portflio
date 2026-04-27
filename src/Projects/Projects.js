import React from "react";
import "./projects.css";

export default function Projects({ projectTitle, projectDesc, proIcons, img }) {
  return (
    <div className="row1">
      <img src={img} alt="" />
      <div className="layer1">
        <h5>{projectTitle}</h5>
        <p> {projectDesc}</p>
        <a href="#">{proIcons}</a>
      </div>
    </div>
  );
}
