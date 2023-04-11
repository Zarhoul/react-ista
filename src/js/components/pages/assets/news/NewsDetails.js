import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../commun/NavBar';
import Footer from '../commun/Footer';

function NewsDetails() {
    const [nouveaute, setNouveaute] = useState("");
    const { id } = useParams();

    useEffect(() => {
        axios.get('../data/news.json')
            .then(response => {
                const nouveaute = response.data.find(n => n.id === id);
                setNouveaute(nouveaute);
                console.log(nouveaute);
            })
            .catch(error => console.log(error));
    }, [id]);

    return (
        <>
            <NavBar />
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{nouveaute.title}</h2>
                <p className="text-gray-700 text-base mb-4">{nouveaute.description}</p>
                <ul>
                    {nouveaute.attachements && nouveaute.attachements.map(attachement => (
                        <li key={attachement.idDoc}>
                            <a href={attachement.pathDoc}>{attachement.NameDoc}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default NewsDetails;
