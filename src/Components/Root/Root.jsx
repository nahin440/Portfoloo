import React, { useEffect } from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import'./Root.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    
    return (
        <div className='main-bg' >
            
            <Nav></Nav>
            <div className=' ' >
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;