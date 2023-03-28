import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="bg-primary-color opacity-95 max-w-full h-80 p-8 flex flex-col flex-wrap justify-around items-center">
                <div className="w-full flex flex-row flex-wrap justify-between items-center">
                    <div className="flex flex-col">
                        <Link to="/" className='mb-4'>
                            <img className="m-0" src="./images/Logo.svg" alt="logo" />
                        </Link>
                        <div className="flex flex-col mb-4">
                            <span className="text-tertiary-color ">Rejoignez-nous afin de suivre</span>
                            <span className="text-tertiary-color ">les dernières nouvelles.</span>
                        </div>
                        <div className="flex flex-row justify-start items-center gap-x-4">
                            <Link to="https://www.facebook.com/ISTA.ASSAKA.Page.Officielle" target='_blank' className='bg-tertiary-color opacity-50 w-12 h-12 rounded-full' alt="Facebook"></Link>
                            <Link to="" className='bg-tertiary-color opacity-50 w-12 h-12 rounded-full' alt="Instagram"></Link>
                            <Link to="https://web.whatsapp.com/send?phone=+212-5282-66448" target='_blank' className='bg-tertiary-color opacity-50 w-12 h-12 rounded-full' alt="Whatsapp"></Link>
                        </div>
                    </div>
                    <div className='h-full flex flex-col justify-evenly'>
                        <div className="font-medium text-2xl text-tertiary-color">
                            Menu
                        </div>
                        <ul className="">
                            <li className="text-tertiary-color hover:text-hover-secondary-color">
                                <Link to="/" className='' target='_blank'>Home</Link>
                            </li>
                            <li className="text-tertiary-color hover:text-hover-secondary-color">
                                <Link to="/filieres" className='' target='_blank'>Filières</Link>
                            </li>
                            <li className="text-tertiary-color hover:text-hover-secondary-color">
                                <Link to="/news" className='' target='_blank'>Nouveautés</Link>
                            </li>
                            <li className="text-tertiary-color hover:text-hover-secondary-color">
                                <Link to="https://www.ofppt.ma/fr/inscription-en-ligne?utm_source=Bouton%20Inscription&utm_medium=CTA&utm_campaign=inscription" className='' target='_blank'>Inscription</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='h-full flex flex-col justify-evenly'>
                        <div className="font-medium text-2xl text-tertiary-color">
                            Informations
                        </div>
                        <ul className="">
                            <li className="text-tertiary-color">
                                <Link to="" className=''>+212 50000-0000</Link>
                            </li>
                            <li className="text-tertiary-color hover:text-hover-secondary-color">
                                <Link to="" className=''>OFPPT.ASSAKA@GMAIL.COM</Link>
                            </li>
                            <li className="text-tertiary-color">
                                <Link to="" className=''>Route Marrakech Tikiouine Assaka, Agadir, Morocco</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-full flex flex-row flex-wrap justify-between items-center'>
                    <div className='text-tertiary-color'>
                        Made by OPENCODE
                    </div>
                    <div className='flex flex-row gap-x-4 text-tertiary-color'>
                        <Link to="">Teams of Conditions</Link>
                        <Link to="">Privacy policy</Link>
                    </div>
                </div>
            </div>

            <Outlet />
        </>
    )
}

export default Footer;