import React, { useEffect, useState } from 'react';
import axios from 'axios';

import FiliereCard from './FiliereCard';
import Pagination from '../commun/Pagination';

function FiliereList() {
    const [filieres, setFilieres] = useState([]);
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

    return (
        <>
        <div className="filieres-page-container">
            <div className="filieres-list">
          <div className="filieres-list-header">
            <div className="filieres-list-title">
              Institut Spécialisé de Technologie Appliquée Assaka Tikiouine offre des filières diversifiés, pour vous préparer aux enjeux de demain
            </div>
          </div>
          <div className="filieres-list-content">
            {filieres.slice((currentPage - 1) * pageSize, currentPage * pageSize).map(({ id, ...filiereProps }) => (
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
      </div>
    </>
  );
}

export default FiliereList;

