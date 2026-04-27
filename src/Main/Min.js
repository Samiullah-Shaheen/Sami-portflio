import { useState, useEffect } from "react";
import "./Main.css";

export default function Main() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const text = "Frontend Developer";

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < text.length) {
          setDisplayText(text.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(text.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <main className="main-part">
      <div className="Text">
        <h2>Hello, it's Me</h2>
        <h1>samiullah shaheen</h1>
        <h2>
          And I 'm <span className="dynamic-role">{displayText}<span className="cursor">|</span></span>
        </h2>
        <p>
          I'm a web Designer with extensive experience for over 5 year.
          expertise is to create website design ,frontend design ,many
          more......
        </p>
        <div class="main-sci">
          <a href="#">
            <i class="social-icon ri-facebook-fill"></i>
          </a>
          <a href="#">
            <i class="social-icon ri-instagram-line"></i>
          </a>
          <a href="#">
            <i class="social-icon ri-linkedin-fill"></i>
          </a>
          <a href="#">
            <i class="social-icon ri-github-line"></i>
          </a>
        </div>
        <a href="#" class="btn-box">
          More About Me
        </a>
      </div>
      <div className="profile">
        <div className="immg"></div>
      </div>
    </main>
  );
}
