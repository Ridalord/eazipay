import React from "react";
import classes from "./recentActivity.module.css"
import magnifier from "./Magnifier.svg"
import equalixer from "./equalizer.svg"
import DailyActivity from "./dailyActivity";
import { DEFAULT_ACTIVITY_ITEMS } from "../../default/default";


export default function RecentActivity() {
  return (
    <div className={classes.activityWrap}>
      <h2>Recent Activities</h2>
      <div className={classes.serchContainer}>
        <div>
          <input type="text" name="employee" id="employee" placeholder="Search Employee" />
          <button>
            <img src={magnifier} alt="Search Icon" />
          </button>
        </div>
        <button>
          <img src={equalixer} alt="Filter Icon" />
          <span>Filter</span>
        </button>
      </div>
      <div>
        {/* <DailyActivity/> */}
        {DEFAULT_ACTIVITY_ITEMS.map((item) => (
          <DailyActivity
            key={item.id}
            date={item.date}
            paymentType={item.paymentType}
            activityItems={item.activityItems}
          />
        ))}
      </div>
    </div>
  )
}