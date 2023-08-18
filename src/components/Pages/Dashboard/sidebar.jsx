import {React, useState} from "react";
import classes from "./sidebar.module.css"
import NavItem from "./Nav/NavItem";
import { Link } from "react-router-dom";
import dashboardIcon from "./dashboardIcon.svg"
import walletIcon from "./walletIcon.svg"
import userPlus from "./user-plus.svg"
import payrollIcon from "./payrollIcon.svg"
import complianceIcan from "./complianceIcon.svg"
import loanIcon from "./loanIcon.svg"
import bookKeepIcon from "./bookKeepIcon.svg"
import supportIcon from "./supportIcon.svg"
import settingsIcon from "./settingsIcon.svg"

const sidebarData = [
  {
    id: "profile",
    text: "Dashboard",
    icon: dashboardIcon, link: "/"
  },
  {
    id: "orders",
    text: "Wallet",
    icon: walletIcon, link: "/"
  },
  {
    id: "reviews",
    text: "Employee Management",
    icon: userPlus, link: "/",
    isDropdown: true,
  },
  {
    id: "tokens",
    text: "Payroll",
    icon: payrollIcon, link: "/",
    isDropdown: true,
  },
  {
    id: "inbox",
    text: "Compliance",
    icon: complianceIcan, link: "/",
    isDropdown: true,
  },
  {
    id: "coupon",
    text: "Quick Loan",
    icon: loanIcon, link: "/",
    isDropdown: true,
  },
  {
    id: "saved",
    text: "Book keeping",
    icon: bookKeepIcon, link: "/",
    isDropdown: true,
  },
  {
    id: "/",
    text: "Support",
    icon: supportIcon, link: "/",
    isDropdown: true,
  },
  {
    id: "setting",
    text: "Setting",
    icon: settingsIcon, link: "/",
    isDropdown: true,
  }
];
export default function Sidebar({ onToggleSidebar, toggleSidebar, onNavItemClick, className }) {
  const [activeItem, setActiveItem] = useState(0);
  const handleNavItemClick = (index, content) => {
    setActiveItem(index);
  };
  return (
      <div className={`${classes.sidebarWrap} ${className}`}>
        <Link href={"/"}>
        <div className={classes.logo}>
          <img src="/dashboardLogo.png" alt="Dashboard Logo" />
        </div>
        </Link>
        <ul className={classes.navList}>
          {sidebarData.map((item, index) => (
            <NavItem
              className={classes.navItem}
              key={item.id}
              text={item.text}
              icon={item.icon}
              link={item.link}
              isDropdown={item.isDropdown}
              isActive={activeItem === index}
              onClick={() => handleNavItemClick(index, item.id)}
            />
          ))}
        </ul>
      </div>
  )
}