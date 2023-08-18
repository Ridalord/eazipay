import React from "react";
import classes from "./dashboardWallet.module.css"
import eye from "./eye.svg"
import employee from "./emplyeeIcon.png"
import salary from "./salaryIcon.png"
import payComp from "./payCompIcon.png"
import loan from "./quickLoan.png"
import calendar from "./calendar.svg"
import dashboardPattern from "./dashboardPattern.png"

export default function DashboardWallet() {
  return (
    <div className={classes.walletWrap}>
      <div>
        <div>
          <p>Wallet Balance</p>
          <h3>₦12,560,078.00 <button><img src={eye} alt="Unhide" /></button></h3>
        </div>
        <button>Fund Wallet</button>
        <img src={dashboardPattern} alt="Dashboard Pattern" className={classes.dashboardPattern} />
      </div>
      <div>
        <button>
          <img src={employee} alt="Employee Icon" />
          <span>Add Employee</span>
        </button>
        <button>
          <img src={salary} alt="Salary Icon" />
          <span>Pay Salaries</span>
        </button>
        <button>
          <img src={payComp} alt="Pay Compliances Icon" />
          <span>Pay Compliances</span>
        </button>
        <button>
          <img src={loan} alt="Quick Icon" />
          <span>Quick Loan</span>
        </button>
      </div>
      <div>
        <div>
          <div>
            Next Payroll
          </div>
          <div>
            <p><img src={calendar} alt="Calender Icon" /> <span>Friday</span></p>
            <p>09/11/2023</p>
          </div>
        </div>
        <div>
          <h3>Total Employee</h3>
          <h2>64</h2>
          <div className={classes.femalebar}>
            <div className={classes.malebar}></div>
          </div>
          <div>
            <div>
              <span>Male</span>
              <span>32</span>
            </div>
            <div>
              <span>Female</span>
              <span>32</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}