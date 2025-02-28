import React, { useEffect } from 'react';
import BannerImg from '../BannerImg/BannerImg';
import { TbTargetArrow } from "react-icons/tb";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import AOS from 'aos'
import 'aos/dist/aos.css'
import CallToAction from '../UniqueSections/CallToAction';

import 'animate.css';
import HowItWorks from '../HowItWorks/HowItWorks';

const Home = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='space-y-10' >




            <div className=' relative border-2 bg-sky-50 bg-opacity-75 mb-10  border-blue-100'>


                

                <div className='text-sky-950 inset-0 flex-col justify-center items-center text-center space-y-5 md:w-8/12 mx-auto my-10 top-10  '  >
                    <h1 className='text-2xl font-bold animate__bounceIn' >Donate Bangladesh</h1>
                    <p className='animate__backOutLeft' >
                        Spread warmth this winter by donating clothing to those in need. Every piece counts. Together, we can make a difference and bring comfort to many.
                    </p>
                </div>

                <div>
                <BannerImg></BannerImg>
                </div>

            </div>


            <div className='my-10 w-11/12 md:w-9/12 mx-auto p-4 bg-sky-100' >
            <h2 className="text-3xl mx-auto border-b-4 border-black w-fit md:text-4xl font-bold text-gray-800 mb-6 animate__rubberBand">
                    About us
                </h2>

                <div className='md:flex space-y-5 md:space-y-0 p-5 bg-gray-300 justify-evenly  bg-opacity-20 shadow-xl gap-10  text-sky-950 '  >

                    <div className='w-full ' data-aos="zoom-out" >
                        <div className="card h-full bg-sky-200 rounded-none   w-full  ">
                            <div className="card-body w-fit">
                                <p className='text-7xl text-center flex justify-center font-semibold ' ><TbTargetArrow></TbTargetArrow></p>
                                <h2 className="card-title">Our Mission</h2>
                                <p className='' >The mission of the Winter Clothing Donation Website is to connect donors with volunteers to provide warm clothing to underprivileged individuals across Bangladesh, ensuring no one suffers during the harsh winter months.This platform aims to streamline the donation process, fostering a culture of generosity and community support. </p>

                            </div>
                        </div>
                    </div>


                    <div className='w-full' data-aos="zoom-out" >
                        <div className="card bg-sky-200 h-full  rounded-none    w-full   " >
                            <div className="card-body w-full h-full">
                                <p className='text-7xl text-center flex justify-center font-semibold ' > <IoCheckmarkDoneCircleSharp></IoCheckmarkDoneCircleSharp> </p>
                                <h2 className="card-title ">Goal to achieve</h2>
                                <p className='' >General users can support the mission by spreading awareness, suggesting areas where help is needed, or contributing financially if logistics support is enabled. By bringing together donors, volunteers, and supporters, the website creates a unified effort to address a critical seasonal challenge and make a meaningful difference in people’s lives.</p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className='my-10 w-11/12 md:w-9/12 mx-auto'>
                <HowItWorks></HowItWorks>
            </div>

            

            <div className='my-10 w-11/12 md:w-9/12 mx-auto'>
                <CallToAction></CallToAction>
            </div>







        </div>
    );
};

export default Home;