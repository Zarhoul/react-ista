import React, { useEffect, useState } from 'react';
import axios from 'axios';

import FiliereCard from './FiliereCard';
import Pagination from '../commun/Pagination';

function FiliereList() {
  const [filieres, setFilieres] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const pageSize = 24;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get('/data/filieres.json')
      .then((response) => {
        console.log(response.data); // <-- check if response data is an array
        setFilieres(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredFilieres = filieres.filter((filiere) =>
    filiere.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="h-5/6 flex flex-col">
        <div className="px-20 py-28 flex flex-row justify-center items-center gap-2">
          <div className="w-3/4 p-2 mr-12 leading-relaxed font-bold text-5xl text-start break-words whitespace-normal overflow-hidden text-primary-color
                        sm:text-3xl sm:leading-relaxed
                        md:text-4xl md:leading-relaxed
                        lg:text-5xl lg:leading-relaxed"
          >
            Institut Spécialisé de Technologie Appliquée Assaka Tikiouine offre
            des filières diversifiés, pour vous préparer aux enjeux de demain
          </div>
          <div className=" h-80 w-6 bg-primary-color
                        sm:h-72
                        md:h-80
                        lg:h-96"
          ></div>
          <div className=" h-80 w-4 bg-primary-color
                        sm:h-72
                        md:h-80
                        lg:h-96"
          ></div>
          <div className=" h-80 w-2 bg-primary-color
                        sm:h-72
                        md:h-80
                        lg:h-96"
          ></div>
        </div>
        <div className="px-32 py-6">
          <input
            type="text"
            placeholder="Chercher une filière"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full h-14 p-4 flex justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
          />
        </div>
        <div className="w-full px-12 py-6 flex flex-row flex-wrap justify-center items-center gap-4">
          {filteredFilieres
            .slice((currentPage - 1) * pageSize, currentPage * pageSize)
            .map(({ id, ...filiereProps }) => (
              <FiliereCard key={id} {...filiereProps} />
            ))}
        </div>
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

