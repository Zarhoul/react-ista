import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import NavBar from '../../../navBar/NavBar';

function ProfilFormateur() {
  const [formateur, setFormateur] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get('/data/users.json')
      .then(response => {
        const formateur = response.data.find(f => f.id === parseInt(id));
        setFormateur(formateur);
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <>
      <div className='w-full h-fit flex flex-col'>
        <NavBar />
          <div className='w-full h-full basis-11/12 flex flex-col p-4 bg-slate-300'>
            <div className="px-4 py-2 text-3xl font-medium">
              Profil du formateur {formateur.firstName} {formateur.lastName}
            </div>
            <div className="p-6 flex flex-row flex-wrap gap-x-20 justify-start items-center">
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Nom :</label>
                <input type='text' value={formateur.lastName} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Prénom :</label>
                <input type='text' value={formateur.firstName} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Date de naissance :</label>
                <input type='text' value={formateur.dateNaissance} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>CIN :</label>
                <input type='text' value={formateur.cin} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Email :</label>
                <input type='text' value={formateur.email} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Addresse :</label>
                <input type='text' value={formateur.address} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Téléphone :</label>
                <input type='text' value={formateur.telephone} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Identifiant :</label>
                <input type='text' value={formateur.username} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
              <div className="w-2/5 flex flex-col gap-y-2">
                <label className='font-medium text-lg p-2'>Mot de passe :</label>
                <input type='text' value={formateur.password} disabled className='w-full p-3 border-2 border-solid rounded-md border-extend-secondary-color-600' />
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default ProfilFormateur;
