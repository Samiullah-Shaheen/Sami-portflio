import React from "react";
import "./services.css";

export default function Services({ title, desc, subtitle, serimg }) {
  return (
    <div className="card">
      <img src={serimg} alt="" />
      <div className="info">
        <span className="name">{title}</span>
        <span className="role">{subtitle}</span>
      </div>
      <p>{desc}</p>
    </div>
  );
}
