import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import NavBar from '../../../navBar/NavBar';

function EditProfil() {
    const [admin, setAdmin] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get('/data/users.json')
        .then(response => {
            const admin = response.data.find(a => a.id === parseInt(id));
            setAdmin(admin);
        })
        .catch(error => console.log(error));
    }, [id]);

    return (
        <>
        <div className='w-full h-fit flex flex-col'>
            <NavBar />
            <div className='w-full h-full basis-11/12 flex flex-col p-4 bg-slate-300'>
                <div className="px-4 py-2 text-3xl font-medium">
                    Modifier profil {admin.firstName} {admin.lastName}
                </div>
                <form className="p-6 flex flex-row flex-wrap gap-x-20 justify-start items-center">
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Nom :</label>
                    <input type='text' value={admin.lastName} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Prénom :</label>
                    <input type='text' value={admin.firstName} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Date de naissance :</label>
                    <input type='text' value={admin.dateNaissance} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>CIN :</label>
                    <input type='text' value={admin.cin} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Email :</label>
                    <input type='text' value={admin.email} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Addresse :</label>
                    <input type='text' value={admin.address} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Téléphone :</label>
                    <input type='text' value={admin.telephone} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Identifiant :</label>
                    <input type='text' value={admin.username} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Mot de passe :</label>
                    <input type='text' value={admin.password} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 h-full flex flex-col justify-self-end items-end">
                    <button className=' w-24 h-12 p-4 text-sm font-medium text-tertiary-color flex flex-row gap-x-2 justify-center items-center bg-primary-color rounded'>Enregister</button>
                </div>
                </form>
            </div>
        </div>
    </>
    );    
}

export default EditProfil