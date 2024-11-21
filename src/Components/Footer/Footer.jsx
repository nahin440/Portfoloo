import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-sky-950 text-white">
            <div className=" mx-auto ml-10 md:ml-0 px-4 py-8">

                <div className="md:flex md:w-9/12 mx-auto text-left  md:justify-evenly items-center">

                    <div className="mb-4 lg:mb-0">
                        <h2 className="text-lg font-bold">Contact Information</h2>
                        <p>Email: zubayer.nahin@gmail.com</p>
                        <p>Phone: +880-1601654697</p>
                        <p>Address: Mymensingh, Bangladesh</p>
                    </div>


                    <div className="mb-4 lg:mb-0">
                        <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                        <div className="flex gap-4 text-2xl">
                            <a
                                href="https://www.facebook.com/nahin.440"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="https://github.com/nahin440"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="#"
                                className="hover:text-pink-500"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="hover:text-blue-400"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="hover:text-blue-600"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>




            <div className="text-center pt-0 pb-10  ">
                <p className="divider" >© {new Date().getFullYear()} Zubayers's Project. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;