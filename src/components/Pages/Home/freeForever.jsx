import React from "react";
import classes from "./index.module.css"




export default function FreeForever() {
  return (
    <div className={classes.fourthSection}>
      <div className={classes.introContentFree}>
        <div className={classes.introTextFree}>
          <h1>Free forever for&nbsp;your <span className={classes.strawberry}>salary payment</span></h1>
        </div>
        <div className={classes.downloadContainer}>
          <h4 className={classes.freeHead}>Subscribe to Eazilife today</h4>
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
      <div className={classes.imageContainer2}>
            <img className={classes.message} src="/message.png" alt="Frame 1" />
            <img className={classes.freeImg} src="/freeimg.png" alt="Intro" />
            <img className={classes.freeImg2} src="/freeimg2.svg" alt="Frame 2" />
            <img className={classes.freeImg1} src="/freeimg1.svg" alt="Frame 1" />
      </div>
      <img src="/freeimg3.png" alt="Free tip" />
    </div>
  )
}