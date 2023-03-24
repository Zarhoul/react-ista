import React from 'react'
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img className="img-logo" src="./images/Logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className='menu-navbar'>
                    <ul className="list-menu-navbar">
                        <li className="elem-menu-navbar">
                            <Link to="/" className='link-list'>Home</Link>
                        </li>
                        <li className="elem-menu-navbar">
                            <Link to="/filieres" className='link-list'>Filières</Link>
                        </li>
                        <li className="elem-menu-navbar">
                            <Link to="/news" className='link-list'>Nouveautés</Link>
                        </li>
                        <li className="elem-menu-navbar">
                            <Link to="https://www.ofppt.ma/fr/inscription-en-ligne?utm_source=Bouton%20Inscription&utm_medium=CTA&utm_campaign=inscription" target='_blank' className='link-list'>Inscription</Link>
                        </li>
                    </ul>
                </div>
                <div className='btns-navbar'>
                    <Link to="/login" className="btn-login">Login</Link>
                    <Link to="/espaceStagiaire" className="btn-espace-stagiaire">Mon Espace</Link>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default NavBar