import {React} from "react";
import classes from "./dashboard.module.css"
import Sidebar from "./sidebar";
import DashboardNav from "./Nav/dashboardNav";
import DashboardWallet from "./dashboardWallet";
import FlowBoard from "./flowBoard";
import RecentActivity from "./recentActivity";

export default function Dashboard() {
  return (
    <div className={classes.dashboardWrap}>
      <div className={classes.dashboardConent}>
        <Sidebar />
        <div className={classes.main}>
          <DashboardNav />
          <div className={classes.contentWrap}>
            <div className={classes.greetingHeader}>
              <h1>Welcome  Abasiama</h1>
              <p>Pay and manage your employee in minutes</p>
            </div>
            <DashboardWallet />
            <FlowBoard />
            <RecentActivity/>
          </div>
        </div>
      </div>
    </div>
  )
}
