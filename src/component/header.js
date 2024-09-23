import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'

function Header() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h1 >Robin BILLAUDEL</h1>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">À propos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/stream">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/team">Portfolio</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
