import React from 'react'

function Badge({type}) {
    return (
        <>
            <div className={`badge ${type}`}>
                {type}
            </div>
        </>
    )
}

export default Badge