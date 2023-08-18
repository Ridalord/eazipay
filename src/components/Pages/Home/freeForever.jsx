import React from "react";
import classes from "./index.module.css"
import appleIcon from "./appleIcon.svg"
import playIcon from "./playIcon.svg"
import message from "./message.png"
import freeImg from "./freeimg.png"
import freeImg1 from "./freeimg1.svg"
import freeImg2 from "./freeimg2.svg"
import freeImg3 from "./freeimg3.png"




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
      <div className={classes.imageContainer2}>
            <img className={classes.message} src={message} alt="Frame 1" />
            <img className={classes.freeImg} src={freeImg} alt="Intro" />
            <img className={classes.freeImg2} src={freeImg2} alt="Frame 2" />
            <img className={classes.freeImg1} src={freeImg1} alt="Frame 1" />
      </div>
      <img src={freeImg3} alt="Free tip" />
    </div>
  )
}