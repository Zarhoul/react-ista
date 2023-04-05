import React from 'react'

import NavBar from '../../navBar/NavBar';


function ApplicationSection() {
    return (
        <>
        <div className=' w-full h-screen flex flex-col'>
                <NavBar />
                <div className='w-full h-full basis-11/12 flex flex-col bg-red-900'>
                    <div className='w-full h-full flex basis-1/5 justify-start items-center p-4 text-4xl font-medium'>
                        Contenu du site web :
                    </div>
                </div>
        </div>
        </>
    )
}

export default ApplicationSection