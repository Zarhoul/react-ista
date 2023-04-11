import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { BsArrow90DegLeft } from "react-icons/bs";

import NavBar from '../../../navBar/NavBar';

function EditStagiaire() {
    const [stagiaire, setStagiaire] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get('/data/users.json')
        .then(response => {
            const stagiaire = response.data.find(s => s.id === parseInt(id));
            setStagiaire(stagiaire);
        })
        .catch(error => console.log(error));
    }, [id]);

    return (
        <>
        <div className='w-full h-fit flex flex-col'>
            <NavBar />
            <div className='w-full h-full basis-11/12 flex flex-col p-4 bg-slate-300'>
                <div className="px-4 py-2 text-3xl font-medium">
                    Modifier stagiaire {stagiaire.firstName} {stagiaire.lastName}
                </div>
                <form className="p-6 flex flex-row flex-wrap gap-x-20 justify-start items-center">
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>CEF :</label>
                    <input type='text' value={stagiaire.cef} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Nom :</label>
                    <input type='text' value={stagiaire.lastName} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Prénom :</label>
                    <input type='text' value={stagiaire.firstName} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Date de naissance :</label>
                    <input type='text' value={stagiaire.dateNaissance} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>CIN :</label>
                    <input type='text' value={stagiaire.cin} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Email :</label>
                    <input type='text' value={stagiaire.email} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Addresse :</label>
                    <input type='text' value={stagiaire.address} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Téléphone :</label>
                    <input type='text' value={stagiaire.telephone} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Filiére :</label>
                    <input type='text' value={stagiaire.filiere?.[0].NameFormation} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600'/>
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Identifiant :</label>
                    <input type='text' value={stagiaire.username} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Mot de passe :</label>
                    <input type='text' value={stagiaire.password} className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
                </div>
                <div className="w-2/5 flex flex-col gap-y-2">
                    <label className='font-medium text-lg p-2'>Rôle du stagiaire</label>
                    <select
                    value={stagiaire.role?.[0].idRole}
                    onChange=""
                    className="w-full p-3 border border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg"
                    >
                    <option value="" className="bg-gray-500 text-gray-700 px-6 py-10 text-lg" disabled>Modifier le rôle</option>
                    <option value="" className="text-gray-700 px-6 py-10 text-lg">Rôles</option>
                    <option value="4" className="text-gray-700 px-6 py-10 text-lg">Stagiaire</option>
                    <option value="5" className="text-gray-700 px-6 py-10 text-lg">Stagiaire président</option>
                    </select>
                </div>
                <div className="w-2/5 py-6 flex flex-col justify start">
                    <button className=' w-24 h-12 p-4 text-sm font-medium text-tertiary-color flex flex-row gap-x-2 justify-center items-center bg-primary-color rounded'>Enregister</button>
                </div>
                </form>
            </div>
        </div>
    </>
    );    
}

export default EditStagiaire;
