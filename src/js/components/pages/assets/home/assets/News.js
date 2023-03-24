import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import NewsBigCard from '../../news/NewsBigCard';
import NewsMiniCard from '../../news/NewsMiniCard';

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios
            .get('/data/news.json')
            .then((response) => {
                const sortedNews = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setNews(sortedNews);
                console.log(sortedNews);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className='child-section news'>
                <div className='child header'>
                    <div className='header-title'>Nouveautés</div>
                    <div className='header-btn'>
                        <Link to='/news' className='btn-link'>
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
                    <div className='child-bigcard'>
                        {news.length > 0 && (
                            <NewsBigCard
                                key={news[0].id}
                                title={news[0].title}
                                date={news[0].date}
                                type={news[0].type}
                                image={news[0].image}
                            />
                        )}
                    </div>
                    <div className='child-minicard'>
                        {news.slice(1, 3).map(({ id, title, date, type, image }) => (
                            <NewsMiniCard 
                                key={id} 
                                title={title} 
                                date={date} 
                                type={type} 
                                image={image} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default News;
