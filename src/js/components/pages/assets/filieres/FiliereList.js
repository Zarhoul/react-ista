import React, { useEffect, useState } from 'react';
import axios from 'axios';

import FiliereCard from './FiliereCard';
import Pagination from '../commun/Pagination';
import FiliereCardLoading from './FiliereCardLoading';
import { Link } from 'react-router-dom';

function FiliereList() {
  const [filieres, setFilieres] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const pageSize = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [niveauScolaire, setNiveauScolaire] = useState('');
  const [niveauFormation, setNiveauFormation] = useState('');
  const [modeFormation, setModeFormation] = useState('');
  const [isLoading, setIsLoading] = useState(true); // <-- add loading state

  useEffect(() => {
    setTimeout(() => { // use a timeout to set the loading state after a certain amount of time
      setIsLoading(false); // set loading to false after 2 seconds
    }, 2000);

    axios
      .get('/data/filieres.json')
      .then((response) => {
        console.log(response.data);
        setFilieres(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
      const myDIV = document.getElementById("myDIV");
      myDIV.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center"
      });
  };

  const handleSchoolLevelChange = (event) => {
    setNiveauScolaire(event.target.value);
    setSearchQuery('');
  };

  const handleFormationLevelChange = (event) => {
    setNiveauFormation(event.target.value);
    setSearchQuery('');
  };

  const handleModeFormationChange = (event) => {
    setModeFormation(event.target.value);
    setSearchQuery('');
  };

  const filteredFilieres = filieres.filter((filiere) =>
  filiere.NameFormation.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .filter((filiere) =>
    niveauScolaire === '' || filiere.NiveauScolaire === niveauScolaire
  )
  .filter((filiere) =>
    niveauFormation === '' || filiere.NiveauFormation === niveauFormation
  )
  .filter((filiere) =>
    modeFormation === '' || (filiere.ModeFormation && filiere.modeFormation.includes(modeFormation))

  );

  const handleReset = () => {
    setNiveauScolaire('');
    setNiveauFormation('');
    setModeFormation('');
  };

  return (
    <>
      <div className="max-h-max flex flex-col">
        <div className="px-32 py-6 flex flex-wrap flex-col gap-4" id='myDIV'>
          <input
            type="text"
            placeholder="Chercher une filière"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full h-14 p-4 flex justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
          />
          <div className="w-full flex flex-row flex-wrap gap-2">
            <select
            value={niveauScolaire}
            onChange={handleSchoolLevelChange}
            className="w-1/3 h-12 p-2 border border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg"
            >
              <option value="" className="bg-gray-500 text-gray-700 px-6 py-10 text-lg" disabled>Niveau scolaire</option>
              <option value="" className="text-gray-700 px-6 py-10 text-lg">Tous les niveaux</option>
              <option value="Bachelier" className="text-gray-700 px-6 py-10 text-lg">Bachelier</option>
              <option value="Collegien" className="text-gray-700 px-6 py-10 text-lg">Collégien</option>
              <option value="Elève du primaire" className="text-gray-700 px-6 py-10 text-lg">Elève du primaire</option>
              <option value="Lycéen" className="text-gray-700 px-6 py-10 text-lg">Lycéen</option>
            </select>

            <select
            value={niveauFormation}
            onChange={handleFormationLevelChange}
            className="w-1/3 h-12 p-2 border border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg"
            >
              <option value="" className="bg-gray-500 text-gray-700 px-6 py-10 text-lg" disabled>Niveau de formation</option>
              <option value="" className="text-gray-700 px-6 py-10 text-lg">Tous les niveaux</option>
              <option value="Technicien spécialisé" className="text-gray-700 px-6 py-10 text-lg">Technicien spécialisé</option>
              <option value="Technicien" className="text-gray-700 px-6 py-10 text-lg">Technicien</option>
              <option value="Qualification" className="text-gray-700 px-6 py-10 text-lg">Qualification</option>
              <option value="Spécialisation" className="text-gray-700 px-6 py-10 text-lg">Spécialisation</option>
            </select>

            <select
            value={modeFormation}
            onChange={handleModeFormationChange}
            className="w-1/3 h-12 p-2 border border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg"
            >
              <option value="" className="bg-gray-500 text-gray-700 px-6 py-10 text-lg" disabled>Mode de formation</option>
              <option value="" className="text-gray-700 px-6 py-10 text-lg">Tous les modes</option>
              <option value="Cours du jour" className="text-gray-700 px-6 py-10 text-lg">Cours du jour</option>
              <option value="Cours du soir" className="text-gray-700 px-6 py-10 text-lg">Cours du soir</option>
            </select>
            <div>
              {niveauScolaire !== '' && (
              <div className="bg-extend-secondary-color-200 text-extend-secondary-color-800 rounded-md flex items-center px-3 py-1">
                  {niveauScolaire}
                  <button onClick={() => setNiveauScolaire('')} className="ml-2 text-sm font-medium text-extend-secondary-color-800 hover:text-extend-secondary-color-900 focus:outline-none">
                    x
                  </button>
                </div>
              )}

              {niveauFormation !== '' && (
              <div className="bg-extend-secondary-color-200 text-extend-secondary-color-800 rounded-md flex items-center px-3 py-1">
                  {niveauFormation}
                  <button onClick={() => setNiveauFormation('')} className="ml-2 text-sm font-medium text-extend-secondary-color-800 hover:text-extend-secondary-color-900 focus:outline-none">
                    x
                  </button>
              </div>
            )}

              {modeFormation !== '' && (
                <div className="bg-extend-secondary-color-200 text-extend-secondary-color-800 rounded-md flex items-center px-3 py-1">
                    {modeFormation}
                    <button onClick={() => setModeFormation('')} className="ml-2 text-sm font-medium text-extend-secondary-color-800 hover:text-extend-secondary-color-900 focus:outline-none">
                      x
                    </button>
                  </div>
                )}
            </div>
            
          </div>
        </div>
      {isLoading ? 
        <div className="w-full px-12 py-6 flex flex-row flex-wrap justify-center items-center gap-4">
          {filteredFilieres
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map(({ idFormation, ...filiereProps }) => (
              <FiliereCardLoading key={idFormation} {...filiereProps} />
            ))}
        </div>
        :
        <div className="w-full px-12 py-6 flex flex-row flex-wrap justify-center items-center gap-4">
          {filteredFilieres
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .filter((filiere)=> filiere.year === "Première année")
            .map(({ idFormation, ...filiereProps }) => (
              <FiliereCard key={idFormation} {...filiereProps} />
            ))}
        </div>
        }
          <Pagination
            totalItems={filieres.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
    </>
  );
}

export default FiliereList;

