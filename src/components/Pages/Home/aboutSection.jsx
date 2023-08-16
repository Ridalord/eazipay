import React from "react";
import classes from "./index.module.css";
import AboutCard from "./aboutCard";
import { DEFAULT_ABOUT_ITEMS } from "../../default/default";

export default function AboutSection() {
  return (
    <div className={classes.aboutWrap}>
      <div className={classes.aboutHeader}>
        <h2>For Individuals and Businesses</h2>
        <p>Join 200+ businesses using Eazipay's easy solution.</p>
      </div>
      <div className={classes.cardContainer}>
        {DEFAULT_ABOUT_ITEMS.map((item, index) => (
          <AboutCard key={index} header={item.header} paragraphs={item.paragraphs} />
        ))}
      </div>
      <p>We are happy to answer your queries. Please, reach us at <a href="mailto:hello@myeazipay.com">hello@myeazipay.com</a> and expect our response shortly after.</p>
    </div>
  );
}
