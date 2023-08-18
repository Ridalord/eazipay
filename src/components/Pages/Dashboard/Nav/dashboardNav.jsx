import React from "react";
import classes from "./dashboardNav.module.css"
import customerLogo from "./customerLogo.png"
import notificationIcom from "./notificationLogo.svg"
import adminImage from "./adminImg.jpeg"
import arrowRight from "./arrowRightIcon.svg"


export default function DashboardNav() {
  return (
    <nav className={classes.dashboardNav}>
      <div>
        <img src={customerLogo} alt="Customer Logo" />
      </div>
      <ul>
        <li>
          <img src={notificationIcom} alt="Notification Icon" />
          <div className={classes.notificationBadge}>
            7
          </div>
        </li>
        <li>
          <div className={classes.adminAvatar} style={{ backgroundImage: `url(${adminImage})` }}></div>
          <div>
            <span>Kalu Abasiama</span>
            <span>Admin</span>
          </div>
          <div>
            <img src={arrowRight} alt="Arrow Right" />
          </div>
        </li>
      </ul>
    </nav>
  )
}