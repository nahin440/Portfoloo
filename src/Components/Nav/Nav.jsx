import React, { useContext } from 'react';
import './Nav.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/bannerPics/logo.jpg'
import { AuthContext } from '../../Provider/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className='nav-bg ' >


            <div className="navbar w-11/12 md:w-9/12 mx-auto py-5 text-white">
                <div className="navbar-start flex items-center ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-sky-900 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <ul className="menu menu-horizontal justify-start flex-col font-semibold px-1">
                                <NavLink className=' ml-0 px-5 py-2' to="/" >Home</NavLink>
                                <NavLink className=' ml-0 px-5 py-2' to="/campaign" >Campaign</NavLink>
                                <NavLink className=' ml-0 px-5 py-2' to="/dashboard" >Dashboard</NavLink>
                            </ul>
                        </ul>
                    </div>
                    <div>
                        <Link to="/" className=""><img className='w-10 h-10 p-1 border rounded-full border-white' src={logo} alt="" /></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal font-semibold space-x-5 px-1">
                        <NavLink className='px-5 py-2' to="/" >Home</NavLink>
                        <NavLink className='px-5 py-2' to="/campaign" >Campaign</NavLink>
                        <NavLink className='px-5 py-2' to="/dashboard" >Dashboard</NavLink>
                        <NavLink className='px-5 py-2' to="/how-to-help" >How To Help</NavLink>
                    </ul>
                </div>

                <div className='navbar-end' >
                    {
                        user && user.email ? <div className='flex gap-3 justify-start items-center' > <Link to="/dashboard" ><img className='w-10 h-10 p-1 border rounded-full border-white' src={user && user?.photoURL} alt="" /></Link> <button onClick={logOut} className=" btn  btn-primary bg-sky-950 btn-sm px-5 hover:bg-sky-200 hover:text-sky-950 border border-sky-500 " > Log Out</button> </div>

                            :

                            <div className=" space-x-2 md:space-x-5 ">
                                <NavLink to="/login" className=" btn btn-primary bg-sky-950 btn-sm px-2 md:px-5 hover:bg-sky-200 hover:text-sky-950    border border-sky-500">Login</    NavLink>
                                <NavLink to="/register" className=" btn btn-primary bg-sky-950 btn-sm px-2 md:px-5 hover:bg-sky-200 hover:text-sky-950 border border-sky-500 ">Register</NavLink>
                            </div>
                    }
                </div>

            </div>


        </div>

    );
};

export default Nav;