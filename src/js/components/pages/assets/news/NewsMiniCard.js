import React from 'react';

import Badge from "./Badge";

function NewsMiniCard({title, image, date, type}) {
    return (
        <>
            { type === 'Nouveauté' 
                ?
                <div className="minicard">
                    <div className="minicard-image">
                        <img src={image} alt={title}/> 
                    </div>
                    <div className="minicard-content">
                        <div className="minicard-title">{title}</div>
                        <div className="minicard-date">{date}</div>
                    </div>
                </div>
                :
                <div className="minicard">
                    <Badge 
                        type={type}
                    />
                    <div className="minicard-image">
                        <img src={image} alt={title}/> 
                    </div>
                    <div className="minicard-content">
                        <div className="minicard-title">{title}</div>
                        <div className="minicard-date">{date}</div>
                    </div>
                </div>
            }
        </>
    )
}

export default NewsMiniCard