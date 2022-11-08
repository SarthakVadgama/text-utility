import React from 'react'
import { Link } from 'react-router-dom'
import '../css/index.css'
import '../css/welpage.css'

export default function Welpage() {
  return (
    <div>
      <div className="container wpnav" id='wpnav'>
        <center>
          <h1 className="my-5" style={{ fontSize: '80px' }}>Welcome to Text Utility</h1>
          <h3>To use the utility function switch to Text-Util from the navigation bar or <br /> <Link to='/t-u'>Click Me</Link> .</h3>
        </center>
      </div>
    </div>
  )
}
