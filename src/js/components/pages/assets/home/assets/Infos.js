import React from 'react';
import { Link } from 'react-router-dom';

function Infos() {
    return (
        <>
        <div className='child-section infos'>
            <div className='child-infos title-home'>
            <div className='child-title-home title-text'>
                <span className='child-title-text'>Institut Spécialisé de</span>
                <span className='child-title-text'>Technologie Appliquée</span>
                <span className='child-title-text'>Assaka Tikiouine - AGADIR</span>
            </div>
            <div className='btn-infos'>
                <Link to='/infos' className='child-title-home link-infos'>
                    Plus d'infos
                </Link>
            </div>
            </div>
        </div>
        </>
    )
}

export default Infos