import React from "react";
import "./blog.css";
export default function BlogCards({ imgb, title, disc }) {
  return (
    <div className="Blogcard">
      <div className="image-wrraper">
        <img src={imgb} alt="" />
      </div>
      <h3> {title}</h3>
      <h2>{disc}</h2>
    </div>
  );
}
