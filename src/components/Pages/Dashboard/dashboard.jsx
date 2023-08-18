import {React} from "react";
import classes from "./dashboard.module.css"
import Sidebar from "./sidebar";

export default function Dashboard() {
  return (
    <div className={classes.dashboardWrap}>
      <div className={classes.dashboardConent}>
        <Sidebar />
      </div>
      Dashboard
    </div>
  )
}
