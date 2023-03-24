import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="content">
                    <div className="child part-1">
                        <Link to="/" className='logo'>
                            <img className="img-logo" src="./images/Logo.svg" alt="logo" />
                        </Link>
                        <div className="part-1 text">
                            <span>Rejoignez-nous afin de suivre</span>
                            <span>les dernières nouvelles.</span>
                        </div>
                        <div className="socials">
                            <Link to=""className='socials-facebook'></Link>
                            <Link to=""className='socials-instagram'></Link>
                            <Link to=""className='socials-whatsapp'></Link>
                        </div>
                    </div>
                    <div className='child part-2'>
                        <ul className="list-menu-footer">
                            <li className="elem-menu-footer title">
                                Menu
                            </li>
                            <li className="elem-menu-footer">
                                <Link to="/" className='link-list'>Home</Link>
                            </li>
                            <li className="elem-menu-footer">
                                <Link to="/filieres" className='link-list'>Filières</Link>
                            </li>
                            <li className="elem-menu-footer">
                                <Link to="/annonces" className='link-list'>Annonces</Link>
                            </li>
                            <li className="elem-menu-footer">
                                <Link to="/events" className='link-list'>Evénements</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='child part-3'>
                    <ul className="list-menu-footer">
                            <li className="elem-menu-footer title">
                                Informations
                            </li>
                            <li className="elem-menu-footer">
                                <Link to="" className='link-list-part-3'>+212 50000-0000</Link>
                            </li>
                            <li className="elem-menu-footer">
                                <Link to="" className='link-list-part-3'>OFPPT.ASSAKA@GMAIL.COM</Link>
                            </li>
                            <li className="elem-menu-footer">
                                <Link to="" className='link-list-part-3'>Route Marrakech Tikiouine Assaka, Agadir, Morocco</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="separator">

                </div>

                <div className='copyrights'>
                    <div className='child'>
                        Made by OPENCODE
                    </div>
                    <div className='child'>
                        <Link to="" className="link-copyrights">Teams of Conditions</Link>
                        <Link to="" className="link-copyrights">Privacy policy</Link>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    )
}

export default Footer;