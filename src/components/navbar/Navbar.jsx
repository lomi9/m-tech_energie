import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import logo from "../../assets/logo-mtech-energie.png";
import { Link } from 'react-router-dom';

export default function Navbar () {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };


    return (
        <div className="navbar">
            <div className="navbar__left">
                <button onClick={toggleMenu} className={`menu-button ${menuOpen ? 'open' : ''}`}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                </button>
                <a href="/home" className="navbar__left-logo">
                    <img src={logo} alt="M-TECH ENERGIE - Plomberie, chauffage, métallerie" className="navbar__left-logo-img"/>

                </a>
                <span className='navbar__left-border'></span>
            </div>
            <div className="navbar__right">
                <nav className={`navbar__right-nav ${menuOpen ? 'navbar__right-nav--open' : ''}`}>
                    <a href="#about" className="navbar__right-nav-item">À propos</a>
                    <Link to="/plomberie" className="navbar__right-nav-item">Plomberie</Link>
                    <p className="navbar__right-nav-item">Chauffage</p>
                    <p className="navbar__right-nav-item">Métallerie</p>
                    <p className="navbar__right-nav-item"> <Mail /></p>
                </nav>
                <a href="/home" className="navbar__right-logo">
                    <img src={logo} alt="M-TECH ENERGIE - Plomberie, chauffage, métallerie" className="navbar__right-logo-img"/>
                </a>
            </div>

        </div>
    )
}