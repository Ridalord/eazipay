import React from "react";
import { Link } from "react-router-dom";
// import { useRouter } from "next/router";
import classes from "./NavItem.module.css";
import arrowDown from "./arrowDown.svg"

const NavItem = ({ text, icon, link, isActive, onClick, isDropdown }) => {
  const hasIcon = !!icon;

  return (
    <li
      className={`${classes["nav-item"]} ${isActive && classes.active}`}
      onClick={onClick}
    >
      <Link className={classes["nav-link"]} href={link}>
        {hasIcon && <div className={classes.icon}><img src={icon} alt={`${text} Icon`} /></div>}
        <span className={classes.text}>{text}</span>
        {isDropdown ? <img src={arrowDown} alt="Arrow Down" className={classes.dropdown} />: ''}
      </Link>
    </li>
  );
};


export default NavItem;
