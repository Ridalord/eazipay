import React from "react";
import classes from "./dashboard.module.css"


export default function GreetingHeader(props) {
  return (
    <div className={classes.greetingHeader}>
      <h1>Welcome  {props.name}</h1>
      <p>Pay and manage your employee in minutes</p>
    </div>
  )
}