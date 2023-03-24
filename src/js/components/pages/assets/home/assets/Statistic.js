import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Statistic() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/data/statistic.json")    
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <div className='child-section statistic'>
                {data.map((st) => (
                    <div className={`child-statistic-${st.id}`} key={st.id}>
                        <div className='child-statistic-icon'>
                            <img src={st.icon} />
                        </div>
                        <div className='child-statistic-text'>
                            <span className='child-statistic-num'>{st.number}</span>
                            <span className='child-statistic-text'>{st.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Statistic