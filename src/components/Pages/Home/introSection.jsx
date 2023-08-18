import React from "react";
import classes from "./index.module.css"
import RegisterButton from "../../UI/Buttons/registerButton";
import appleIcon from "./appleIcon.svg"
import playIcon from "./playIcon.svg"
import desktop from "./Desktop.jpg"
import frame1 from "./frame1.png"
import frame2 from "./frame2.png"
import frame3 from "./frame3.png"

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
            <div><img src={appleIcon} alt="Apple Icon" /></div>
            <div>
              <span>Download on the</span>
              <span>Appstore</span>
            </div>
          </div>
          <div>
            <div><img src={playIcon} alt="Play Icon" /></div>
            <div>
              <span>Get on</span>
              <span>Google Play</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img className={classes.introImg} src={desktop} alt="Intro" />
        <img className={classes.frame1} src={frame1} alt="Frame 1" />
        <img className={classes.frame2} src={frame2} alt="Frame 2" />
        <img className={classes.frame3} src={frame3} alt="Frame 3" />
      </div>
    </div>
  )
}