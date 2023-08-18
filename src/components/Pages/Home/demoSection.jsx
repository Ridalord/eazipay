import React from "react";
import classes from "./index.module.css"
import demobg from "./demobg.png"
import demobg1 from "./demobg1.png"
import { Link } from "react-router-dom";


export default function DemoSection() {
  return (
    <div className={classes.demoWrap}>
      <div className={classes.introContentFree}>
        <div className={classes.introText}>
          <h1 className={classes.demoHeader}>Get an Exclusive
            Demo of Eazipay</h1>
          <p>Our greatest priority is to put you and your business first. Let’s show you how we can help.</p>
        </div>
      </div>
      <div className={classes.imageContainer2}>
        <form action="POST" className={classes.demoForm}>
          <div>
            <h3>First things first</h3>
            <p>We want to serve you better. Tell us a bit about yourself or company</p>
          </div>
          <div>
            <button>Indvidual</button>
            <button>Company</button>
          </div>
          <div>
            <input type="text" placeholder="First Name" name="firstname" id="firstname" />
            <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="text" name="job" id="job" placeholder="Job Title" />
            <input type="text" name="companySize" id="companySize" placeholder="Company Size" />
          </div>
          <Link to={"/dashboard"}>
            <button>Request Demo</button>          
          </Link>
        </form>
      </div>
      <img className={classes.demobg} src={demobg} alt="Demo Background" />
      <img className={classes.demobg1} src={demobg1} alt="Demo Background" />
    </div>
  )
}