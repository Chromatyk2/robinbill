import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import LogoTypeBlanc from '../Logotype blanc.svg'

function Header() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <NavLink to="/"><img src={LogoTypeBlanc}/></NavLink>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/about">À propos</NavLink>
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
