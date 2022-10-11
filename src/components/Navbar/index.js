// import React, {useState} from 'react'

import './index.css'

const Navbar = props => {
  const {counter, time} = props

  console.log(counter)

  return (
    <li className="navContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="websiteLogo"
      />
      <div className="timerContainer">
        <p className="score">Score:{counter}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
          alt="timer"
          className="timer"
        />
        <p className="time">{time} sec</p>
      </div>
    </li>
  )
}

export default Navbar
