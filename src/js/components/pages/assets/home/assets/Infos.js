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
                    <span className='font-medium text-8xl p-2 
                                    sm:text-5xl
                                    md:text-6xl
                                    lg:text-7xl
                                    xl:text-8xl
                                    min-[320px]:text-xl max-[639px]:text-xl
                                    min-[320px]:p-0 max-[639px]:p-0
                                    min-[320px]:justify-center max-[639px]:justify-center
                                    '
                    >
                    Institut Spécialisé de
                    </span>
                    <span className='font-medium text-8xl p-2 
                                    sm:text-5xl
                                    md:text-6xl
                                    lg:text-7xl
                                    xl:text-8xl
                                    min-[320px]:text-xl max-[639px]:text-xl'
                    >
                    Technologie Appliquée
                    </span>
                    <span className='font-small text-4xl p-8 
                                    sm:text-2xl
                                    md:text-2xl
                                    lg:text-4xl
                                    xl:text-6xl
                                    min-[320px]:text-lg max-[639px]:text-lg
                                    min-[320px]:p-0 max-[639px]:p-0'
                    >
                    Assaka Tikiouine - AGADIR
                    </span>
                    <Link to='/infos' className='font-medium p-4 text-xl border-2 border-solid rounded-lg border-primary-color hover:bg-primary-color 
                                                sm:p-2 sm:text-base
                                                md:p-2 md:text-2xl
                                                lg:p-4
                                                min-[320px]:text-xl max-[639px]:text-xl
                                                min-[320px]:p-2 max-[639px]:p-2'
                    >
                    Plus d'infos
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Infos