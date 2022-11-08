import React from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import '../css/Navbar.css'
import '../css/index.css'

export default function Navbar(props) {
    return (
        <div className={`t-${props.mode} tb-${props.mode}`}>
            <nav id='nanav'>
                <Link className='yo' id='logo' to='/'>
                    <div className="logo">
                        <h2>Text-Utils</h2>
                    </div>
                </Link>
                <ul>
                    <li className='nav-item'>
                        <NavLink className="nav-link" activeclassName='active' aria-current="page" to="/t-u">Text-Util</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" activeclassName='active' aria-current="page" to="/about">About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className="nav-link" activeclassName='active' aria-current="page" to="/contact">Contact</NavLink>
                    </li>
                </ul>
                <div class={`form-check form-switch t t-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">DarkMode</label>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}