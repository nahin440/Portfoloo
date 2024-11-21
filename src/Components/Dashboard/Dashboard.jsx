
import { AuthContext } from '../../Provider/AuthProvider';
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from 'react';

import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { Link } from 'react-router-dom';


const Dashboard = () => {

    const { user } = useContext(AuthContext)


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="flex main-div justify-center items-center min-h-screen bg-cover bg-opacity-60 bg-gradient-to-r from-blue-800/30 via-blue-500/30 to-sky-900/30">


            <div className='w-11/12 md:w-6/12 my-10 lg:w-4/12 mx-auto bg-indigo-800 text-white p-5 rounded-3xl ' >


                <h1 className='text-xl font-bold p-5 text-center  flex justify-center gap-2 items-center ' data-aos="flip-up" > <span><FaUser></FaUser></span> Welcome <span className='text-indigo-200' > {user && user.displayName} </span> </h1>


                <div className=" bg-white rounded-3xl shadow-xl overflow-hidden"
                    data-aos="fade-up">

                    <div className="relative h-40 bg-gradient-to-r from-indigo-800 via-indigo-500 to-sky-950"
                        data-aos="zoom-in">
                        <img
                            src={user && user.photoURL}
                            alt="Profile"
                            className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white animate_animated animate_pulse" />
                    </div>


                    <div className="text-center p-6">

                        <h1 className="text-xl flex justify-start gap-2 items-center font-semibold text-gray-800 mb-2 animate_animated animate_fadeInDown"
                            data-aos="flip-up">
                            <span><FaUser></FaUser></span>{user && user.displayName}
                        </h1>

                        <p className="text-gray-500 flex justify-start gap-2 items-center  animate_animated animate_fadeIn" data-aos="fade-left">
                            <span className='text-2xl' ><MdEmail></MdEmail></span> {user && user.email}
                        </p>

                        < div className='flex justify-start items-center' >

                            <Link to="/updateProfile">
                                <button
                                    className="mt-4 px-6 py-2 flex justify-start items-center gap-2 bg-indigo-800 text-white rounded-full shadow-lg hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-purple-400 animate_animated animate_heartBeat"
                                    data-aos="zoom-in-up">
                                    <span><MdEditSquare></MdEditSquare></span> Update Profile
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    );
};


export default Dashboard;