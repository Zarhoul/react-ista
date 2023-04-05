import React from 'react';
import NavBar from './assets/navBar/NavBar';
import Section from './assets/section/Section';

function DashboardAdmin() {

    return (
        <>
        <div className='w-full h-screen flex flex-col'>
            <NavBar />
            <Section />
        </div>
        </>
        
    );
}

export default DashboardAdmin;
