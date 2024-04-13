import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/ITZone-logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hideMenu"}>
        <li>
          <Link to="hero" smooth="yes" offset={0}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth="yes" offset={-250}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth="yes" offset={-150}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth="yes" offset={-250}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth="yes" offset={-300}>
            Testimonials
          </Link>
        </li>

        <li className="dropdown">
          <span onClick={toggleDropdown}>Services</span>
          {showDropdown && (
            <ul className="dropdown-content">
              <li>
                <Link to="/Page1">Service 1</Link>
              </li>
              <li>
                <Link to="/service2">Service 2</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link className="btn" to="contact" smooth="yes" offset={-300}>
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menuIcon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
