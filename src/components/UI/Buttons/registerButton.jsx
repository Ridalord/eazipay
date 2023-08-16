import React from "react";
import classes from "./loginButton.module.css"



export default function RegisterButton(){
  return(
    <button className={`${classes.navButton} ${classes.regButton}`}>Register</button>
  )
}