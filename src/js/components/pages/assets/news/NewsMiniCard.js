import React from 'react';

import Badge from "./Badge";

function NewsMiniCard({title, image, date, type}) {
    return (
        <>
            { type === 'Nouveauté' 
                ?
                <div className="flex flex-row gap-x-4 shadow-xl hover:scale-95 transition duration-300">
                    <div className="w-full h-full basis-2/4">
                        <img src={image} alt={title} className=''/> 
                    </div>
                    <div className="flex flex-col basis-2/4 justify-between items-start gap-2 p-4">
                        <div className="font-medium text-2xl py-4  break-words whitespace-normal overflow-hidden text-primary-color">{title}</div>
                        <div className="p-2 font-medium text-lg text-extend-secondary-color">{date}</div>
                    </div>
                </div>
                :
                <div className="relative flex flex-row gap-x-4 shadow-xl hover:scale-95 transition duration-300">
                    <Badge 
                        type={type}
                    />
                    <div className="w-full h-full basis-2/4">
                        <img src={image} alt={title} className=''/> 
                    </div>
                    <div className="flex flex-col basis-2/4 justify-between items-start gap-2 p-4">
                        <div className="font-medium text-2xl py-4 break-words whitespace-normal overflow-hidden text-primary-color">{title}</div>
                        <div className="p-2 font-medium text-lg text-extend-secondary-color">{date}</div>
                    </div>
                </div>
            }
        </>
    )
}

export default NewsMiniCard