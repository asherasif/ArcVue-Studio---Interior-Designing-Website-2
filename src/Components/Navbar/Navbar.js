import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logos/Main Logo.png';
import logo2 from '../../assets/Logos/Main Logo 2.png';

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('');
    const [navbarCollapsed, setNavbarCollapsed] = useState(true);

    const handleItemClick = (link) => {
        setActiveLink(link);
        setNavbarCollapsed(true);
    };

    const toggleNavbar = () => {
        setNavbarCollapsed(!navbarCollapsed);
    };

    const styles = `
        .navbar {
            position: sticky;
            top: 0;
            z-index: 100;
            --bs-navbar-padding-y: 0.45rem;
            background-color: white;
        }
        
        .navbar-nav .nav-item {
            font-family: 'Didact Gothic', sans-serif;
            margin: 0px 5px;
            padding: 0px 10px;
            
        }

        .navbar-nav .nav-link {
            color:black;
            border-radius : 20px; 
        }

        .navbar-nav .nav-item.active .nav-link {
            font-weight: bold;
        }

        .navbar-nav .nav-item:hover {
            background-color: #d3d3d3;
            border-radius : 20px; 
            padding: 0px 15px;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
                <div className="container-fluid">
                    <div className="logo" style={{ margin: '0px 15px' }}>
                        <img src={logo} alt="logo" />
                        <img src={logo2} alt="logo" />
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={!navbarCollapsed ? 'true' : 'false'}
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${navbarCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className={`nav-item ${activeLink === 'home' ? 'active' : ''}`}>
                                <Link
                                    className="nav-link"
                                    to="/"
                                    onClick={() => handleItemClick('home')}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}>
                                <Link
                                    className="nav-link"
                                    to="/about"
                                    onClick={() => handleItemClick('about')}
                                >
                                    About
                                </Link>
                            </li>
                            <li className={`nav-item ${activeLink === 'project' ? 'active' : ''}`}>
                                <Link
                                    className="nav-link"
                                    to="/project"
                                    onClick={() => handleItemClick('project')}
                                >
                                    Project
                                </Link>
                            </li>
                            <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}>
                                <Link
                                    className="nav-link"
                                    to="/contact"
                                    onClick={() => handleItemClick('contact')}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
