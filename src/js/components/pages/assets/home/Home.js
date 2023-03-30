import React from 'react';

import Infos from './assets/Infos';
import Statistic from './assets/Statistic';
import Filieres from './assets/Filieres';
import News from './assets/News';

const Home = () => {
  return (
    <>
      <div className='h-full flex flex-col'>
        <Infos />
        <Statistic />
        <News />
        <Filieres />
      </div>
    </>
    
  );
};

export default Home;
