import React from 'react';

import Infos from './assets/Infos';
import Statistic from './assets/Statistic';
import Filieres from './assets/Filieres';
import News from './assets/News';
import Footer from '../commun/Footer';

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <Infos />
        <Statistic />
        <News />
        <Filieres />
        {/* <Footer /> */}
      </div>
    </>
    
  );
};

export default Home;
