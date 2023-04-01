import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import NewsCard from './NewsCard';
import Pagination from '../commun/Pagination';
import NewsCardLoading from './NewsCardLoading';

function NewsList() {
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const pageSize = 24;
    const [currentPage, setCurrentPage] = useState(1);
    const [filterType, setFilterType] = useState('');
    const [isLoading, setIsLoading] = useState(true); // <-- add loading state

    useEffect(() => {
        setTimeout(() => { // use a timeout to set the loading state after a certain amount of time
          setIsLoading(false); // set loading to false after 2 seconds
        }, 2000);
    
        axios
          .get('/data/news.json')
          .then((response) => {
            console.log(response.data);
            setNews(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const filteredNews = news
    .filter((n) => n.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) =>
        filterType === 'desc'
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date)
    );

    return (
        <>
            <div className="h-5/6 flex flex-col">
            <div className="flex flex-col justify-center items-end px-32 py-6 gap-6">
                <input
                    type="text"
                    placeholder="Chercher..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-full h-14 p-4 flex justify-start items-center border-2 border-solid rounded-md border-extend-secondary-color-600 focus:outline-none focus:outline-2 focus:border-extend-secondary-color text-lg'
                />
                <button onClick={() => setFilterType(filterType === 'asc' ? 'desc' : 'asc')} className='w-fit px-4 py-3 bg-primary-color rounded-md hover:bg-hover-primary-color text-tertiary-color font-medium justify-center items-center gap-x-2'>
                    {filterType === 'asc' ? 'Plus anciens' : 'Plus récents'}
                </button>
            </div>
            {
                isLoading 
                ?
                <div className="w-fit px-20 py-6 flex flex-row flex-wrap justify-center items-center gap-4">
                {filteredNews
                    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                    .map(( props ) => (
                        <Link to={`/news/${props.id}&title=${props.title}`} className='w-fit flex flex-col basis-1/4 gap-x-4 shadow-xl hover:scale-95 transition duration-300'>
                            <NewsCardLoading {...props} key={props.id} />
                        </Link>
                    ))}
                </div>
                :
                <div className="w-fit px-20 py-6 flex flex-row flex-wrap justify-center items-center gap-4">
                {filteredNews
                    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                    .map(( props ) => (
                        <Link to={`/news/${props.id}&title=${props.title}`} className='w-fit flex flex-col basis-1/4 gap-x-4 shadow-xl hover:scale-95 transition duration-300'>
                            <NewsCard {...props} key={props.id} />
                        </Link>
                    ))}
                </div>
            }
            <Pagination
                totalItems={news.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
        </>
    )
}

export default NewsList