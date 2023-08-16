import React from "react";
import classes from "./aboutCard.module.css";

export default function AboutCard(props) {
  return (
    <div className={classes.cardWrap}>
      <h3>{props.header}</h3>
      {props.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
