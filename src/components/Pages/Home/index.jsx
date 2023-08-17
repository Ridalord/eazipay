import React from "react";
import classes from "./index.module.css"
import IntroSection from "./introSection";
import AboutSection from "./aboutSection";
import HowSection from "./howSection";
import FreeForever from "./freeForever";



export default function Home() {
  return (
    <div className={classes.homeWrap}>
      <IntroSection />
      <AboutSection />
      <HowSection />
      <FreeForever/>
      <img className={`${classes.ellipse} ${classes.ellipse4}`} src="./group17.png" alt="Ellipse 4" />
      <img className={`${classes.ellipse} ${classes.ellipse3}`} src="./group16.png" alt="Ellipse 3" />
      <img className={`${classes.ellipse} ${classes.ellipse2}`} src="./group18.png" alt="Ellipse 2" />
      <img className={`${classes.ellipse} ${classes.ellipse1}`} src="./group19.png" alt="Ellipse 1" />
      <img className={`${classes.ellipse} ${classes.pattern1}`} src="./patterns.png" alt="Pattern" />
      <img className={`${classes.ellipse} ${classes.pattern2}`} src="./patterns2.png" alt="Pattern" />
      <img className={`${classes.ellipse} ${classes.pattern3}`} src="./patterns3.png" alt="Pattern" />
    </div>
  )
}