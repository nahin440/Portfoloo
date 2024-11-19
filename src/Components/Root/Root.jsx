import React, { useEffect } from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import'./Root.css'


const Root = () => {
    
    return (
        <div className='main-bg' >
            
            <Nav></Nav>
            <div className=' my-10 w-11/12 md:w-9/12 mx-auto' >
            <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;