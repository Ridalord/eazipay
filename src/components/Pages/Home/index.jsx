import React from "react";
import classes from "./index.module.css"
import IntroSection from "./introSection";
import AboutSection from "./aboutSection";
import HowSection from "./howSection";
import FreeForever from "./freeForever";
import DemoSection from "./demoSection";
import group17 from "./group17.png"
import group16 from "./group16.png"
import group18 from "./group18.png"
import group19 from "./group19.png"
import patterns from "./patterns.png"
import patterns2 from "./patterns2.png"
import patterns3 from "./patterns3.png"



export default function Home() {
  return (
    <div className={classes.homeWrap}>
      <IntroSection />
      <AboutSection />
      <HowSection />
      <FreeForever />
      <DemoSection/>
      <img className={`${classes.ellipse} ${classes.ellipse4}`} src={group17} alt="Ellipse 4" />
      <img className={`${classes.ellipse} ${classes.ellipse3}`} src={group16} alt="Ellipse 3" />
      <img className={`${classes.ellipse} ${classes.ellipse2}`} src={group18} alt="Ellipse 2" />
      <img className={`${classes.ellipse} ${classes.ellipse1}`} src={group19} alt="Ellipse 1" />
      <img className={`${classes.ellipse} ${classes.pattern1}`} src={patterns} alt="Pattern" />
      <img className={`${classes.ellipse} ${classes.pattern2}`} src={patterns2} alt="Pattern" />
      <img className={`${classes.ellipse} ${classes.pattern3}`} src={patterns3} alt="Pattern" />
    </div>
  )
}