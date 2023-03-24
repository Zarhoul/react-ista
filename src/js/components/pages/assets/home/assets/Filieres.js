import React,  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import FiliereCardHome from '../../filieres/FiliereCardHome';

function Filieres() {
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

        const listFilieres = filieres.sort(() => Math.random() - 0.5).slice(0, 8);

    return (
        <>
            <div className='child-section filieres'>
                <div className='child header'>
                    <div className='header-title'>
                        Filières Ista Assaka
                    </div>
                    <div className='header-btn'>
                        <Link to='/filieres' className='btn-link'>
                        Voir plus
                        <svg
                            xmlns='/public/icons/arrowright.svg'
                            width='30'
                            height='30'
                            viewBox='0 0 31 30'
                            fill='none'
                        >
                            <path
                            d='M18.5375 7.41251L26.125 15L18.5375 22.5875M4.875 15H25.9125'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeMiterlimit='10'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            />
                        </svg>
                        </Link>
                    </div>
                </div>
                <div className='child content'>
                    {listFilieres.map(({ id, ...filiereProps }) => (
                    <FiliereCardHome key={id} {...filiereProps} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Filieres