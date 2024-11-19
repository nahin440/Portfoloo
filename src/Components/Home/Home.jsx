import React, { useEffect } from 'react';
import BannerImg from '../BannerImg/BannerImg';
import { TbTargetArrow } from "react-icons/tb";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    return (
        <div>




            <div className='p-4 border-2 bg-sky-50 bg-opacity-75 mb-10 border-blue-100'>
                <div className='text-sky-950 text-center space-y-5 md:w-8/12 mx-auto my-10 '  >
                    <h1 className='text-2xl font-bold' >Donate Bangladesh</h1>
                    <p>
                        Spread warmth this winter by donating clothing to those in need. Every piece counts. Together, we can make a difference and bring comfort to many.
                    </p>
                </div>

                <BannerImg></BannerImg>

            </div>


            <div>

                <div className='md:flex space-y-5 p-5 bg-gray-300 justify-evenly  bg-opacity-20 shadow-xl gap-10  text-sky-950 ' >

                    <div className='w-full' >
                        <div className="card h-full bg-sky-200 rounded-none   w-full  ">
                            <div className="card-body w-fit">
                                <p className='text-7xl text-center flex justify-center font-semibold ' ><TbTargetArrow></TbTargetArrow></p>
                                <h2 className="card-title">Our Mission</h2>
                                <p className='' >The mission of the Winter Clothing Donation Website is to connect donors with volunteers to provide warm clothing to underprivileged individuals across Bangladesh, ensuring no one suffers during the harsh winter months.This platform aims to streamline the donation process, fostering a culture of generosity and community support. </p>

                            </div>
                        </div>
                    </div>


                    <div className="card bg-sky-200 h-full  rounded-none    w-full   ">
                        <div className="card-body w-full h-full">
                            <p className='text-7xl text-center flex justify-center font-semibold ' > <IoCheckmarkDoneCircleSharp></IoCheckmarkDoneCircleSharp> </p>
                            <h2 className="card-title ">How it Works</h2>
                            <p className='' >General users can support the mission by spreading awareness, suggesting areas where help is needed, or contributing financially if logistics support is enabled. By bringing together donors, volunteers, and supporters, the website creates a unified effort to address a critical seasonal challenge and make a meaningful difference in people’s lives.</p>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;