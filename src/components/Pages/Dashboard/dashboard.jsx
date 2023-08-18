import {React} from "react";
import classes from "./dashboard.module.css"
import Sidebar from "./sidebar";
import DashboardNav from "./Nav/dashboardNav";

export default function Dashboard() {
  return (
    <div className={classes.dashboardWrap}>
      <div className={classes.dashboardConent}>
        <Sidebar />
        <div className={classes.main}>
          <DashboardNav/>
        </div>
      </div>
    </div>
  )
}
