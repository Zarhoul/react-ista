import React from 'react';
import { Link } from 'react-router-dom';
import { BsColumnsGap, BsPeople, BsFiles, BsCardHeading, BsFilePerson, BsDatabaseDown, BsDatabaseUp } from "react-icons/bs";
import Notifications from './Notifications';
import ImgProfil from './ImgProfil';


function NavBar() {
    return (
        <> 
            <div className="w-full h-full basis-1/12 p-2 flex flex-row gap-4">
                <div className='w-full p-2 basis-5/6 flex flex-row justify-start items-center gap-2'>
                    <Link to="/dashboardAdmin" className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsColumnsGap />
                        <div>Dashboard</div>
                    </Link>
                    <Link to="/dashboardAdmin/users" className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsPeople />
                        <div>Users</div>
                    </Link>
                    <Link to="/dashboardAdmin/documents" className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsFiles />
                        <div>Documents</div>
                    </Link>
                    <Link to="/dashboardAdmin/application" className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsCardHeading />
                        <div>Application</div>
                    </Link>
                    <Link to="/dashboardAdmin/profil" className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsFilePerson />
                        <div>Profil</div>
                    </Link>
                    <Link to="/dashboardAdmin/exportData" className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsDatabaseDown />
                        <div>Export data</div>
                    </Link>
                    <Link to="/dashboardAdmin/importData" className='w-fit p-2 flex flex-row gap-2 justify-center items-center text-lg font-medium text-black rounded-md hover:bg-da-tertiary-color hover:text-black'>
                        <BsDatabaseUp />
                        <div>Import data</div>
                    </Link>
                </div>
                <div className='flex flex-row justify-center items-center gap-2 basis-1/6'>
                    <Notifications />
                    <ImgProfil />
                </div>
            </div>
        </>
    )
}

export default NavBar;