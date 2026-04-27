import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="h1 logo">
          <a href="#">
            {" "}
            Samiullah Shaheen<span>!</span>{" "}
          </a>
        </p>

        <p className="copyright">
          &copy;React 2026 <a href="#">Samiullah Shaheen</a>. All rights
          reserved
        </p>
      </div>
    </footer>
  );
}
