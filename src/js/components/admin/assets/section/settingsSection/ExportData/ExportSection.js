import React from 'react';

import NavBar from '../../../navBar/NavBar';


function ExportSection() {
    return (
        <>
        <div className=' w-full h-screen flex flex-col'>
                <NavBar />
                <div className='w-full h-full basis-11/12 flex flex-col bg-blue-400'>
                    <div className='w-full h-full flex basis-1/12 justify-start items-center p-4 text-4xl font-medium'>
                        Exporter data :
                    </div>
                    <div className='w-full h-full basis-11/12 flex flex-col p-4'>
                    <form className="p-6 flex flex-row flex-wrap gap-x-20 justify-start items-center">
                    <div className="w-2/5 flex flex-col gap-y-2">
                        <label className='font-medium text-lg p-2'>Liste des stagiaires :</label>
                        <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                    </div>
                    <div className="w-2/5 flex flex-col gap-y-2">
                        <label className='font-medium text-lg p-2'>Niveau :</label>
                        <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                    </div>
                    <div className="w-2/5 flex flex-col gap-y-2">
                        <label className='font-medium text-lg p-2'>Type :</label>
                        <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                    </div>
                    <div className="w-2/5 flex flex-col gap-y-2">
                        <label className='font-medium text-lg p-2'>Mode :</label>
                        <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                    </div>
                    <div className="w-2/5 flex flex-col gap-y-2">
                        <label className='font-medium text-lg p-2'>Niveau scolaire :</label>
                        <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                    </div>
                    <div className="w-2/5 flex flex-col gap-y-2">
                        <label className='font-medium text-lg p-2'>Année d'étude :</label>
                        <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                    </div>
                    <div className="w-2/5 flex flex-col gap-y-2">
                        <label className='font-medium text-lg p-2'>Lien du filière :</label>
                        <input type='text' value="" className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                    </div>
                        <div className="w-full h-full py-6 flex flex-col justify-center items-start">
                            <button className=' w-24 h-12 p-4 text-sm font-medium text-tertiary-color flex flex-row gap-x-2 justify-center items-center bg-primary-color rounded'>Exporter</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExportSection;