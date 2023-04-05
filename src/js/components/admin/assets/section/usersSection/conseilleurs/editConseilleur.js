import React, { useState } from 'react';

function EditConseilleur() {

  return (
    <>
      <div className="py-2 text-xl font-medium">Modifier conseilleur</div>
      <form className="flex flex-row flex-wrap gap-4" onSubmit="">
        <label>
          Nom:
          <input type="text" value="" className='w-full h-10 p-4 flex basis-1/2 justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
        />
        </label>
        <label>
          Prénom:
          <input type="text" value="" className='w-full h-10 p-4 flex basis-1/2 justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
        />
        </label>
        <label>
          CIN:
          <input type="text" value="" className='w-full h-10 p-4 flex basis-1/2 justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
        />
        </label>
        <label>
          Téléphone:
          <input type="text" value="" className='w-full h-10 p-4 flex basis-1/2 justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
        />
        </label>
        <label>
          Nom d'utilisateur:
          <input type="text" value="" className='w-full h-10 p-4 flex basis-1/2 justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
        />
        </label>
        <label>
          Mot de passe:
          <input type="password" value="" className='w-full h-10 p-4 flex basis-1/2 justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
        />
        </label>
        <label>
          Rôle:
          <select value="" onChange="">
            <option value="3">Conseilleur</option>
            <option value="2">Chef de service</option>
            <option value="1">Administrateur</option>
          </select>
        </label>
        <div className="flex gap-4">
          <button type="submit" className="w-full p-4 bg-primary-color text-white rounded">
            Enregistrer
          </button>
          <button type="button" className="w-full p-4 border-2 border-solid border-primary-color rounded">
            Annuler
          </button>
        </div>
      </form>
    </>
  );
}

export default EditConseilleur;
