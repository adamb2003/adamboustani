import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleScroll = (e) => {
    e.preventDefault();
    document.getElementById("footer").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    closeMobileMenu();
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            ADAM{" "}
            <i
              className="fa-solid fa-square-binary fa-spin fa-sm"
              style={{ color: "#00ff00" }}
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="#footer"
                className="nav-links-mobile"
                onClick={handleScroll}
              >
                Contact Me
              </a>
            </li>
          </ul>
          {button && (
            <a href="#footer" className="btn--outline" onClick={handleScroll}>
              Contact Me
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
