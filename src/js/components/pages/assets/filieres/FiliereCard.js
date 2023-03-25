import React from 'react';
import { Link } from 'react-router-dom';

function FiliereCard({ name, url}) {
  return (
    <>
      <div className="card-filiere-list">
        <Link to={url} target='_blank' className='card-filiere-link'>
          <div className='card-name'>{name}</div>
          <div className='card-details'>Plus détails</div>
        </Link>
      </div>
    </>
  );
}

export default FiliereCard;
