import React from "react";
import classes from "./index.module.css"


export default function HowSection() {
  return (
    <div className={classes.howWrap}>
      <div className={classes.howHeader}>
        <h2>How Eazipay Works</h2>
        <p>Get started in 3 simple steps.</p>
      </div>
      <div className={classes.contentWrap}>
        <div className={classes.gifWrap}>
          <img src="/how.gif" alt="How Steps" />
        </div>
        <div className={classes.steps}>
          <div className={classes.step1}>
            <span>1</span>
            <h4>Create your free account</h4>
            <p>Click here to set up your Eazipay account.</p>
          </div>
          <div className={classes.step2}>
            <span>2</span>
            <h4>Add Employee Data</h4>
            <p>Your Employee Data is 100% Safe and Secure</p>
          </div>
          <div className={classes.step3}>
            <span>3</span>
            <h4>Prepare your Transaction</h4>
            <p>Run payroll: Bulk Salaries and Compliance are done at once!</p>
          </div>
          <img className={classes.step1to2} src="/step1to2.svg" alt="Pointers" />
          <img className={classes.step2to3} src="/step2to3.svg" alt="Pointers" />
        </div>
        <img src="/howbg.png" alt="Background" />
      </div>
    </div>
  )
}