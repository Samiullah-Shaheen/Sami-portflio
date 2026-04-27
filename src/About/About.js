import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="aboutContianer">
      <h1 class="subtitle h1-media">
        About <span>Me</span>
      </h1>
      <div className="about" id="about">
        <div className="about-img">
          <div className="image2"></div>
        </div>
        <div className="about-text">
          <h4>I Develop Application that Help People</h4>
          <p>
            Hi! I’m Samiullah Shaheen, and I’m a web applications developer who
            has passion for building clean web applications with intuitive
            functionalities With over 5 years of comprehensive experience in the
            field of development & designing, accompanied by a bachelor's degree
            in computer sceince. . I enjoy the process of turning ideas into
            reality using creative solutions. I’m always curious about learning
            new skills, tools, and concepts. In addition to working on various
            solo full stack projects, I have worked with creative teams, which
            involves daily stand-ups and communications, source control, and
            project management.
          </p>
          <a href="#" className="btn-box">
            More About Me
          </a>
        </div>
      </div>
    </div>
  );
}
