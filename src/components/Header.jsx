import { useState } from "react";
export default function Header({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  function handleClickMenu(e) {
    e.preventDefault();
    // Schimbăm starea pentru a deschide/închide meniul
    setMenuOpen(!menuOpen);
  }
  return (
    <header className="header-section">
      <div className="header-container">
        <div className="logos">
          <a href="#home">Cristian.WebDev</a>
        </div>

        <div className="navigation navigation--desktop">
          <nav>
            <ul className="nav-list">
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => scrollToSection("projects")}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={`navigation navigation--mobile  ${
            menuOpen ? "navigation--open" : ""
          }`}
        >
          <div className="navigation_menu">
            <button
              className="navigation_menu-btn "
              onClick={(e) => handleClickMenu(e)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="navigation-mobile-links">
            <nav>
              <ul className="nav-list">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
