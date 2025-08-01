import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-new.svg"; // Adjust the path if needed

const Footer = () => {
  return (
    <>
      <div className="wpo-site-footer text-center">
        <div className="container">
          <div className="row">
            {/* Logo */}
            <div className="col-12">
              <div className="footer-image">
                <Link className="logo img-fluid" to="/">
                  <img
                    src={logo}
                    alt="Evenire"
                    title="Evenire for exceptional events"
                  />
                </Link>
              </div>
            </div>

            {/* Footer Links */}
            <div className="col-12">
              <div className="footer-link">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/wedding-events">Wedding Events</Link>
                  </li>
                  <li>
                    <Link to="/corporate-events">Corporate Events</Link>
                  </li>
                  <li>
                    <Link to="/school-events">School Events</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="col-12">
              <div className="link-widget">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="col-12">
              <div className="copyright">
                <p>
                  © Copyright 2025 | Evenire |{" "}
                  <Link to="/privacy-policy">Privacy &amp; Policy</Link> | All
                  right reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-theme footer-bar"></div>
    </>
  );
};

export default Footer;
