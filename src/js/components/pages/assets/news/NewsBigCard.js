import React from 'react';

import Badge from "./Badge";

function NewsBigCard({title, date, image, type}) {
    return (
        <>
            { type === 'Nouveauté' 
                ?
                <div className="bigcard">
                    <div className="bigcard-image">
                        <img src={image} alt={title}/>
                    </div>
                    <div className="bigcard-content">
                            <div className="bigcard-title">{title}</div>
                            <div className="bigcard-date">{date}</div>
                    </div>
                </div> 
                :
                <div className="bigcard">
                    <Badge 
                        type={type}
                    />
                    <div className="bigcard-image">
                        <img src={image} alt={title}/>
                    </div>
                    <div className="bigcard-content">
                            <div className="bigcard-title">{title}</div>
                            <div className="bigcard-date">{date}</div>
                    </div>
                </div>        
            }
        </>
    )
}

export default NewsBigCard