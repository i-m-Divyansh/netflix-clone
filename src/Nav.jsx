import React, { useState, useEffect } from 'react'
import './Nav.css'
import logo from './images/logo.png'

const Nav = () => {
    // useState hook
    const [navBlack, setnavBlack] = useState(false)

    // useEffect hook
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setnavBlack(true)
            }
            else setnavBlack(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    // component return
    return (
        <div className={`nav ${navBlack && "black"} `}>
            <img className="nav_logo" src={logo} alt="logo" />
            <img className="nav_avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
        </div >
    )
}

export default Nav
