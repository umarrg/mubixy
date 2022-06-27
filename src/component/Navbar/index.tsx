import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import './style.css'

export const NavBar =() => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
      
    <nav className="navigation ">
      <a href="/" className="brand-name">
        {`{`}C{`}`}
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
          <RiMenu3Line />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          
        }
      >
        <ul>
          <li>
            <a href="#about"> <span className="nav-number">00.</span>About</a>
          </li>
          <li>
          <a href="#experience" > <span className="nav-number">01.</span>Experience</a>
          </li>
          <li>
          <a href="#project"> <span className="nav-number">02.</span>Projects</a>
          </li>
          <li>
          <a href="#blog"> <span className="nav-number">03.</span>Blog</a>
          </li>
          <li>
          <a href="#contact"> <span className="nav-number">04.</span>Contact</a>
          </li>
          <button className="mobile-resume-btn">Resume</button>     
        </ul>
      </div>
      <button className="desktop-resume-btn">Resume</button>
    </nav>
  );
}