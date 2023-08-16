import React from "react";
import classes from "./index.module.css"
import RegisterButton from "../../UI/Buttons/registerButton";

export default function IntroSection() {
  return (
    <div className={classes.topSection}>
      <div className={classes.introContent}>
        <div className={classes.introText}>
          <h1>Run your payroll <span className={classes.goldText}>easily</span> in <span className={classes.strawberry}>seconds</span></h1>
          <p>We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.</p>
          <RegisterButton className={classes.regButton} textContent="Start Using Free, Forever"/>
        </div>
        <div className={classes.downloadContainer}>
          <h4>Download the Eazipay App</h4>
          <div>
            <div><img src="/appleIcon.svg" alt="Apple Icon" /></div>
            <div>
              <span>Download on the</span>
              <span>Appstore</span>
            </div>
          </div>
          <div>
            <div><img src="/playIcon.svg" alt="Play Icon" /></div>
            <div>
              <span>Get on</span>
              <span>Google Play</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img className={classes.introImg} src="/Desktop.jpg" alt="Intro" />
        <img className={classes.frame1} src="/frame1.png" alt="Frame 1" />
        <img className={classes.frame2} src="/frame2.png" alt="Frame 2" />
        <img className={classes.frame3} src="/frame3.png" alt="Frame 3" />
      </div>
    </div>
  )
}