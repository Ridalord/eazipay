import React from "react";
import classes from "./footer.module.css"
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className={classes.footerWrap}>
      <div>
        <img src="/footerLogo.svg" alt="Footer Logo" />
        <div>
          <p>Copyright © 2023 Eazipay.</p>
          <p>All rights reserved</p>
        </div>
        <ul>
          <li>
            <a href="#instagram">
              <img src="/instaIcon.svg" alt="Instagram Icon" />
            </a>
          </li>
          <li>
            <a href="#twitter">
              <img src="/twitterIcon.svg" alt="Twitter Icon" />
            </a>
          </li>
          <li>
            <a href="#linkedin">
              <img src="/linkedinIcon.svg" alt="LinkedIn Icon" />
            </a>
          </li>
          <li>
            <a href="#facebook">
              <img src="/facebookIcon.svg" alt="Facebook Icon" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={classes.footerHeader}>Product</h3>
        <ul className={classes.linkList}>
          <li>
            <Link to={"/individual"}>
              Individual
            </Link>
          </li>
          <li>
            <Link to={"/buisnesses"}>
              Businesses
            </Link>
          </li>
          <li>
            <Link to={"/demo"}>
              Request Demo
            </Link>
          </li>
          <li>
            <Link to={"/pricing"}>
              Pricing
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={classes.footerHeader}>Legal</h3>
        <ul className={classes.linkList}>
          <li>
            <Link to={"/policy"}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to={"/terms"}>
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={classes.footerHeader}>Resources</h3>
        <ul className={classes.linkList}>
          <li>
            <Link to={"/faqs"}>
              FAQs
            </Link>
          </li>
          <li>
            <Link to={"/buisnesses"}>
              Blog
            </Link>
          </li>
          <li>
            <Link to={"/career"}>
              Career
            </Link>
          </li>
          <li>
            <Link to={"/customerstories"}>
              Customer Stories
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className={classes.footerHeader}>Contact us</h3>
        <ul className={classes.linkList}>
          <li>
              <a href="mailto:eazipay@gmail.com">eazipay@gmail.com</a>
          </li>
          <li>
            <a href="tel:+234 816 878 9518">+234 816 878 9518</a>
          </li>
        </ul>
        <div className={classes.emailContainer}>
          <input className={classes.emailInput} type="email" id="emailInput" placeholder="Your email address"/>
          <button className={classes.submitBtn}>
            <img src="/gliderIcon.svg" alt="Glider Icon"/>
          </button>
        </div>
      </div>
    </footer>
  )
}