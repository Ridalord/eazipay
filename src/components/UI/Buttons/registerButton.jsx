import React from "react";
import classes from "./loginButton.module.css"



export default function RegisterButton(props){
  return(
    <button className={`${classes.navButton} ${classes.regButton} ${props.className}`}>{props.textContent}</button>
  )
}