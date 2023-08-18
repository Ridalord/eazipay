import React from "react";
import { Link } from "react-router-dom";
import classes from "./desktopNav.module.css";
import LoginButton from "../UI/Buttons/loginButton";
import RegisterButton from "../UI/Buttons/registerButton";
import EaziLogo from "./eaziLogo.svg"; // Import the SVG logo as an image

export default function DesktopNav() {
  return (
      <nav className={classes.navWrap}>
        <ul className={classes.navContent}>
          <li>
            <Link to="/">
              <img src={EaziLogo} alt="Eazi Logo" /> {/* Render the SVG logo as an image */}
            </Link>
          </li>
          <li>
            <Link className={classes.navLink} to="/individual">Individual</Link>
          </li>
          <li>
            <Link className={classes.navLink} to="/buisness">Buisness</Link>
          </li>
          <li>
            <Link className={classes.navLink} to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link className={classes.navLink} to="/payroll">Set your payroll</Link>
          </li>
        </ul>
        <div className={classes.navButtons}>
          <LoginButton />
          <RegisterButton textContent="Register" />
        </div>
      </nav>
  );
}
