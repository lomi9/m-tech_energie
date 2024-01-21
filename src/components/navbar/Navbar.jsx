import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import logo from "../../assets/logo-mtech-energie.png";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
                    <HashLink to="/home#about" className="navbar__right-nav-item">À propos</HashLink>
                    <Link to="/plomberie" className="navbar__right-nav-item">Plomberie</Link>
                    <Link to="/chauffage" className="navbar__right-nav-item">Chauffage</Link>
                    <Link to="/metallerie" className="navbar__right-nav-item">Métallerie</Link>
                    <HashLink to="#contact" className="navbar__right-nav-item"> <Mail /></HashLink>
                </nav>
                <a href="/home" className="navbar__right-logo">
                    <img src={logo} alt="M-TECH ENERGIE - Plomberie, chauffage, métallerie" className="navbar__right-logo-img"/>
                </a>
            </div>

        </div>
    )
}