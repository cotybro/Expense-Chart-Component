import React from 'react'
import './Balance.css'
function Balance() {
  return (
    <div className="balance-container">
        <div className="balance">
            <p className="balance-text">My Balance</p>
            <h1 className="balance-amount">$921.48</h1>
        </div>
        <div className="circles">
            <div className="box-white"></div>
            <div className="box-brown"></div>
        </div>
    </div>
  )
}

export default Balance