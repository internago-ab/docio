import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "./layout.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import docioLogo from "../images/docio-logo.png";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import docioLogoWhite from "../images/docio-logo-white.svg";

const Layout = ({ children }) => {
  const [menuDisplayed, setMenuDisplayed] = useState(false);

  const [visible] = useState(true);

  const data = useStaticQuery(graphql`
    query bioQueryAndBioQuery {
      site {
        siteMetadata {
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `);

  const social = data.site.siteMetadata?.social;

  function toggleMenu() {
    setMenuDisplayed(!menuDisplayed);
    animateHamburger();
  }

  function animateHamburger() {
    let lines = Array.from(document.querySelectorAll(".hamburger div"));
    lines.forEach(
      (line) =>
        (line.style.animation = `${line.className} 0.5s ease ${
          menuDisplayed ? "reverse" : "normal"
        }`),
    );
  }

  return (
    <div className="global-wrapper">
      <nav>
        <Link to="/" className="logo-link">
          <img className="logo" src={docioLogo} alt="logo"></img>
        </Link>

        <div className="mobile">
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="hamburger-menu"
          >
            <div
              className="line1"
              style={{
                transform: menuDisplayed
                  ? "translateY(9px) rotate(45deg)"
                  : "translateY(0px) rotate(0deg)",
              }}
              onAnimationEnd={(e) => (e.target.style.animation = "none")}
            ></div>
            <div
              className="line2"
              style={{ opacity: menuDisplayed ? 0 : 1 }}
              onAnimationEnd={(e) => (e.target.style.animation = "none")}
            ></div>
            <div
              className="line3"
              style={{
                transform: menuDisplayed
                  ? "translateY(-9px) rotate(-45deg)"
                  : "translateY(0px) rotate(0deg)",
              }}
              onAnimationEnd={(e) => (e.target.style.animation = "none")}
            ></div>
          </button>

          <ul
            className="mobile-menu"
            style={{
              top: visible ? "69px" : "-69px",
              overflow: menuDisplayed ? "unset" : "hidden",
              height: menuDisplayed ? 400 : 0,
            }}
          >
            <li>
              <Link
                to="/"
                className={`${menuDisplayed ? "li-active" : "li-not-active"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/payroll"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/qa" className={`${menuDisplayed ? "li-active" : ""}`}>
                Q&A
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/partner"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                Partner Integrations
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                Contacts
              </Link>
            </li>
            <li>
              <a
                href="mailto:info@internago.com"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://payroll.internago.com/"
                className={`${menuDisplayed ? "li-active" : ""}`}
              >
                Go to portal
              </a>
            </li>
          </ul>
        </div>

        <ul className="desktop-menu">
          <li>
            <Link to="/solutions">Solutions</Link>
          </li>
          <ul className="menu dropdown">
            <li className="has-dropdown dropdown">
              <div className="menu-link">
                Resourses
                <svg
                  className="toggle-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.51465 8.4652L11.9996 16.9502L20.4846 8.4652L19.0706 7.0502L11.9996 14.1222L4.92865 7.0502L3.51465 8.4652Z"
                    fill="#4E4E4E"
                  />
                </svg>
              </div>

              <ul className="submenu">
                <li>
                  <Link to="/qa">Q&A</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/partner">Partner <br></br>Integrations</Link>
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="cta-btn" id="inverted">
            <a href="mailto:info@internago.com">Contact us</a>
          </li>
          <li className="cta-btn">
            <a href="https://payroll.internago.com/">Go to portal</a>
          </li>
        </ul>
      </nav>

      <motion.main
        initial={{
          opacity: 0,
          x: 0,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: 200,
        }}
        transition={{
          type: "spring",
          mass: 0.35,
          stiffness: 75,
          duration: 0.25,
        }}
      >
        <main>{children}</main>
      </motion.main>

      <footer>
        <img
          src={docioLogoWhite}
          alt="docio logo in white"
          className="docio-logo-white"
        />
        <div className="footer-flex">
          <div>
            <h3>About us</h3>
            <p>
              Let`s be honest, international payroll can be challenging, but it
              has to be done. We have the perfect tool for managing
              international payroll and HR related tasks for your international
              employees. We let you store and manage all important employee and
              payroll data in one place. Your job is simply to check and approve
              in the portal. 
            </p>
          </div>

          <div className="contact-find-us">
            <h3>Find us</h3>
            <div className="contact-locations">
              <p>
                Internago Sweden
                <br />
                Tegelbacken 4A
                <br />
                111 52 Stockholm, Sweden
              </p>
              <p>
                Internago France
                <br />
                39, Av. Pierre 1er de Serbie
                <br />
                75008 Paris, France
              </p>
              <p>
                Internago Italy
                <br />
                Corso Vercelli, 57
                <br />
                20144 Milano, Italy
              </p>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Contact us</h3>
            <a href="mailto:support@internago.com">info@internago.com</a>
            <div className="socials">
              <a
                href={`https://www.linkedin.com/company/${
                  social?.linkedin || ``
                }`}
              >
                <img src={linkedin} alt="linkedin"></img>
                linkedin/internago
              </a>
              <a href={`https://twitter.com/${social?.twitter || ``}`}>
                <img src={twitter} alt="linkedin"></img>
                @Interna_GO
              </a>
            </div>
          </div>
        </div>

        <div className="disclaimer">
          <a href="/privacy-policy" className="white-link">
            Data and privacy policy
          </a>
          <p>
            Copyright © 2017-<span>{new Date().getFullYear()}</span> All rights
            reserved to Internago AB.
          </p>
        </div>
      </footer>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
