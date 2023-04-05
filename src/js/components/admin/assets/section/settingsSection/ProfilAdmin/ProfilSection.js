import React from 'react'

import NavBar from '../../../navBar/NavBar';


function ProfilSection() {
    return (
        <>
        <div className=' w-full h-screen flex flex-col'>
                <NavBar />
                <div className='w-full h-full basis-11/12 flex flex-col bg-purple-400'>
                    <div className='w-full h-full flex basis-1/5 justify-start items-center p-4 text-4xl font-medium'>
                        Profil Administrateur :
                    </div>
                </div>
        </div>
        </>
    )
}

export default ProfilSection