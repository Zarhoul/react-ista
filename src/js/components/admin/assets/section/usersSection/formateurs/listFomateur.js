import React from 'react'
import NavBar from '../../../navBar/NavBar'

function ListFomateur() {
  return (
    <>
      <div className='w-full h-screen flex flex-col'>
          <NavBar />
          <div className='w-full h-full basis-11/12 flex flex-col p-4 bg-slate-300'>
            <div className="px-4 py-2 text-3xl font-medium">
              Liste des formateurs
            </div>
          </div>
      </div>
    </>
  )
}

export default ListFomateur