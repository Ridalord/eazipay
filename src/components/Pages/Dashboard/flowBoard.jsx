import React from "react";
import classes from "./flowBoard.module.css"
import arrowDown from "./Nav/arrowDown.svg"
import chart from "./chart.png"


export default function FlowBoard() {
  return (
    <div className={classes.flowBoardWrap}>
      <div>
        <div>
          <p>Inflow</p>
          <h2>₦1,567,552</h2>
        </div>
        <div>
          <p>Outflow</p>
          <h2>₦1,567,552</h2>
        </div>
        <button>Inflow/Outflow <img src={arrowDown} alt="Arrow Down" /></button>
      </div>
      <div className={classes.chart}>
        <img src={chart} alt="Chart" />
        <button>2023</button>
      </div>
    </div>
  )
}