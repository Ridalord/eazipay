import React from "react";
import classes from "./dailyActivity.module.css"


export default function DailyActivity(props) {
  return (
    <div className={classes.dailyContainer}>
      <h3>{props.date}</h3>
      {props.activityItems.map((activityItem) => (
        <div key={activityItem.id} className={classes.activityItem}>
        <div>
          <p>{activityItem.paymentType}</p>
          <div className={classes.activityInfo}>
            <div>
              <div>BM</div>
              <span>{activityItem.name}</span>
            </div>
            <div>
              <p>ACTIVITY</p>
              <span>{activityItem.activity}</span>
            </div>
            <div>
              <p>EMPLOYEE</p>
              <span>{activityItem.employee}</span>
            </div>
            <div>
              <p>TIME</p>
              <span>{activityItem.time}</span>
            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
  )
}