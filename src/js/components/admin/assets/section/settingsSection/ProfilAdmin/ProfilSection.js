import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import NavBar from '../../../navBar/NavBar';

function ProfilSection() {
    const [admin, setAdmin] = useState({});

    useEffect(() => {
        axios.get('/data/users.json')
        .then(response => {
            const userAdmin = response.data.find(a => a.role[0].idRole === "1");
            setAdmin(userAdmin);
            console.log(admin);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <>
        <div className='w-full h-fit flex flex-col'>
            <NavBar />
            <div className='w-full h-full basis-11/12 flex flex-col p-4 bg-slate-300'>
                <div className='p-4 flex flex-row justify-between items-center'>
                    <div className="py-2 text-3xl font-medium">
                        Profil d'administrateur {admin.firstName} {admin.lastName}
                    </div>
                    <Link to={`/dashboardAdmin/profil/editProfil/${admin.id}`} className="p-2 rounded text-lg font-medium text-tertiary-color bg-blue-600">
                        Editer
                    </Link>
                </div>
                <div className="p-6 flex flex-row flex-wrap gap-x-20 justify-start items-center">
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Nom :</label>
                    <input type='text' value={admin.lastName} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Prénom :</label>
                    <input type='text' value={admin.firstName} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Date de naissance :</label>
                    <input type='text' value={admin.dateNaissance} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>CIN :</label>
                    <input type='text' value={admin.cin} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Email :</label>
                    <input type='text' value={admin.email} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Addresse :</label>
                    <input type='text' value={admin.address} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Téléphone :</label>
                    <input type='text' value={admin.telephone} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Identifiant :</label>
                    <input type='text' value={admin.username} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Mot de passe :</label>
                    <input type='text' value={admin.password} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default ProfilSection;
