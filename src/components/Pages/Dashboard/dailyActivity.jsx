import React from "react";
import classes from "./dailyActivity.module.css"


export default function DailyActivity() {
  return (
    <div className={classes.dailyContainer}>
      <h3>Wednesday, November 09, 2022</h3>
      <div className={classes.activityItem}>
        <div>
          <p>PAYROLL</p>
          <div className={classes.activityInfo}>
            <div>
              <div>BM</div>
              <span>Badmus Kemis</span>
            </div>
            <div>
              <p>ACTIVITY</p>
              <span>Paid November 2022 salary</span>
            </div>
            <div>
              <p>EMPLOYEE</p>
              <span>52</span>
            </div>
            <div>
              <p>TIME</p>
              <span>16:15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}