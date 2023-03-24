import React,  { useEffect, useState } from 'react';
import axios from 'axios';

import Footer from '../commun/Footer';
import FiliereCard from "./FiliereCardHome";


function FiliereList() {
    const [filieres, setFilieres] = useState([]);

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
                        {filieres.map(({ id, ...filiereProps }) => (
                                <FiliereCard
                                    key={id} {...filiereProps }
                                />
                        ))}
                    </div>
                </div><Footer />
            </div>
            
        </>
    )
}

export default FiliereList
