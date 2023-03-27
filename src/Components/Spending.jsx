import React from 'react'
import BarChart from './BarChart'
import './Spending.css'

function Spending() {
  return (
    <article>
        <div className="spending-container">
            <h2 className="spending-title">
                Spending - Last 7 Days
            </h2>
            <div className="chart">
                <BarChart />
            </div>
        </div>
        <div className="total-container">
            <div className="column">
                <p className="total-month">
                    Total This month
                </p>
                <p className="month-amount">
                    $478.33
                </p>
            </div>
            <div className="as-bottom">
                <p className="percent">
                    +2.4%
                </p>
                <p className="last-month">
                    from last month
                </p>
            </div>

        </div>
    </article>
  )
}

export default Spending