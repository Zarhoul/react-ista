import React from 'react';
import { Link } from 'react-router-dom';

function FiliereCard({ name, url}) {
  
  return (
    <Link to={url} target='_blank' className='card-filiere'>
      <div className='card-name'>{name}</div>
      <div className='card-subtitle'>Plus détails</div>
    </Link>
  );
}

export default FiliereCard;
