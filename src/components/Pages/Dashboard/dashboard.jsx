import {React} from "react";
import classes from "./dashboard.module.css"
import Sidebar from "./sidebar";
import DashboardNav from "./Nav/dashboardNav";
import DashboardWallet from "./dashboardWallet";
import FlowBoard from "./flowBoard";
import RecentActivity from "./recentActivity";
import GreetingHeader from "./greetingHeader";

export default function Dashboard() {
  return (
    <div className={classes.dashboardWrap}>
      <div className={classes.dashboardConent}>
        <Sidebar />
        <div className={classes.main}>
          <DashboardNav />
          <div className={classes.contentWrap}>
            <GreetingHeader name="Abasiama"/>
            <DashboardWallet />
            <FlowBoard />
            <RecentActivity/>
          </div>
        </div>
      </div>
    </div>
  )
}
