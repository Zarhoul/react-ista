import React from 'react';
import { Link } from 'react-router-dom';

function Infos() {
    return (
        <>
        <div className="w-full grow">
            <div className='w-full flex flex-col relative'>
                <div className='bg-cover bg-center bg-local bg-primary-color opacity-70'>
                    <img src="./images/image-1.jpg" alt='' className='w-full h-auto object-cover bg-cover bg-center bg-local bg-primary-color opacity-60' />
                </div>
                <div className='text-tertiary-color absolute inset-0 flex flex-col items-center justify-center'>
                    <span className='font-medium text-8xl p-2'>Institut Spécialisé de</span>
                    <span className='font-medium text-8xl p-2'>Technologie Appliquée</span>
                    <span className='font-small text-4xl p-8'>Assaka Tikiouine - AGADIR</span>
                    <Link to='/infos' className='font-medium p-4 text-xl border-2 border-solid rounded-lg border-primary-color hover:bg-primary-color'>
                        Plus d'infos
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Infos