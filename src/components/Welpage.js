import React from 'react'
import { Link } from 'react-router-dom'
import '../css/index.css'
import '../css/welpage.css'

export default function Welpage() {
  return (
    <div>
      <div className="container wpnav" id='wpnav'>
        <center>
          <h1 className="my-5" style={{ fontSize: '80px' }}>Welcome to Students-Util</h1>
          <h3>To explore the tools or utilities available head to home page or <br /> <Link to='/home'>Click Me</Link> .</h3>
        </center>
      </div>
    </div>
  )
}
