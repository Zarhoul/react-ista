import React from 'react'
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav className="bg-primary-color opacity-95 max-w-full h-24 flex flex-row flex-wrap">
                <div className="flex basis-1/4 items-center justify-center">
                    <Link to="/">
                        <img className="img-logo" src="./images/Logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className='flex basis-2/4 items-center justify-center'>
                    <ul className="flex flex-row gap-x-0">
                        <Link to="/" className='link-list'>
                            <li className="font-medium tracking-wide p-4 text-base text-tertiary-color rounded hover:bg-hover-primary-color">
                                Home
                            </li>
                        </Link>
                        <Link to="/filieres" className='link-list'>
                            <li className="font-medium tracking-wide p-4 text-base text-tertiary-color rounded hover:bg-hover-primary-color">
                                Filières
                            </li>
                        </Link>
                        <Link to="/news" className='link-list'>
                            <li className="font-medium tracking-wide p-4 text-base text-tertiary-color rounded hover:bg-hover-primary-color">
                                Nouveautés
                            </li>
                        </Link>
                        <Link to="https://www.ofppt.ma/fr/inscription-en-ligne?utm_source=Bouton%20Inscription&utm_medium=CTA&utm_campaign=inscription" target='_blank' className='link-list'>
                            <li className="font-medium tracking-wide p-4 text-base text-tertiary-color rounded hover:bg-hover-primary-color">
                                Inscription
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='flex basis-1/4 items-center justify-center flex-row gap-x-4'>
                    <Link to="/login" className="text-tertiary-color font-medium tracking-wide p-4 text-base rounded hover:bg-hover-primary-color">Login</Link>
                    <Link to="/espaceStagiaire" className="bg-tertiary-color text-primary-color font-medium tracking-wide p-4 text-base rounded hover:bg-hover-primary-color hover:text-tertiary-color">Mon Espace</Link>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default NavBar