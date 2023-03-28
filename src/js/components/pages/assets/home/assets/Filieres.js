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
            <div className='grow'>
            <div className='px-12 py-6 flex flex-rox justify-between items-center'>
                    <div className='font-medium text-4xl text-primary-color'>Filières Ista Assaka</div>
                    <div className='px-4 py-3 bg-primary-color rounded-md hover:bg-hover-primary-color'>
                        <Link to='/filieres' className='flex flex-row text-tertiary-color font-medium justify-center items-center gap-x-2'>
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
                <div className='w-full px-12 py-6 flex flex-row flex-wrap justify-center items-center gap-4'>
                    {listFilieres.map(({ id, ...filiereProps }) => (
                    <FiliereCardHome key={id} {...filiereProps} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Filieres