import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import '../css/index.css'

export default function Navbar(props) {
    return (
        <div className={`t-${props.mode} tb-${props.mode}`}>
            <nav id='nanav'>
                <Link className='yo' id='logo' to='/home'>
                    <div className="logo">
                        <h2>Student-Utils</h2>
                    </div>
                </Link>
                <ul>
                    {/* <li className='nav-item'>
                        <NavLink className="nav-link" activeclassName='active' aria-current="page" to="/t-u">Text-Util</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" activeclassName='active' aria-current="page" to="/to-do">ToDo</NavLink>
                    </li> */}
                    <li className='nav-item'>
                        <NavLink className="nav-link" activeclassname='active' aria-current="page" to="/home">Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" activeclassname='active' aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" activeclassname='active' aria-current="page" to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div className={`form-check form-switch t t-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                    <i className="bi bi-moon-stars-fill mx-3"></i>
                    <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">DarkMode</label>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}
