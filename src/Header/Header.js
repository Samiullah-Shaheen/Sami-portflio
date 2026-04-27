import "./header.css";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="myheader">
      <div className="logo1">
        <div className="logo2"></div>
        {/* <span className="logonane">Sami Khan</span> */}
      </div>

      <div className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <nav className={`mynav ${open ? "active" : ""}`}>
        <ul className="mymenu">
          <li>
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </li>
          <li>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          </li>
          <li>
            <select id="language" name="language">
              <option value="en" className="opt">
                Lang.
              </option>
              <option value="en" className="opt">
                English
              </option>
              <option value="ps" className="opt">
                Pashto
              </option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
}
