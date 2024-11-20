import React, { useEffect } from "react";
import {
    FaTshirt,
    FaHatWizard,
    FaHandHolding,
    FaSocks,
    FaSnowflake,
    FaHandsHelping,
    FaTruck,
    FaHeart,
    FaRegSmile,
    FaPeopleCarry,
} from "react-icons/fa";
import "aos/dist/aos.css";
import "animate.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const HowToHelp = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="px-6 py-10 bg-sky-50">
            <h1 className="text-4xl font-bold text-center mb-10 text-sky-800 animate_animated animate_bounceIn">
                How to Help
            </h1>


            <div
                data-aos="zoom-out"
                className="mb-12 bg-sky-100 p-8 rounded-lg shadow-lg"
            >
                <h2 className="text-3xl font-semibold text-sky-900 mb-6">
                    Help Donating Clothes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div data-aos="flip-right" className="bg-sky-200 p-4 rounded-lg shadow-md animate_animated animate_fadeInLeft">
                        <FaTshirt className="text-sky-900 text-4xl mb-2" />
                        <h3 className="text-xl font-bold text-sky-800">Warm Jackets</h3>
                        <p className="text-sky-700">Donate jackets to help keep people warm in the cold.</p>
                    </div>
                    <div data-aos="flip-up" className="bg-sky-300 p-4 rounded-lg shadow-md animate_animated animate_fadeInRight">
                        <FaHatWizard className="text-sky-900 text-4xl mb-2" />
                        <h3 className="text-xl font-bold text-sky-800">Winter Hats</h3>
                        <p className="text-sky-700">Protect vulnerable people by providing winter hats.</p>
                    </div>
                    <div data-aos="flip-down" className="bg-sky-400 p-4 rounded-lg shadow-md animate_animated animate_zoomIn">
                        <FaHandHolding className="text-sky-900 text-4xl mb-2" />
                        <h3 className="text-xl font-bold text-sky-800">Gloves</h3>
                        <p className="text-sky-700">Donating gloves can help prevent frostbite.</p>
                    </div>
                    <div data-aos="flip-up" className="bg-sky-500 p-4 rounded-lg shadow-md animate_animated animate_fadeInDown">
                        <FaSocks className="text-sky-900 text-4xl mb-2" />
                        <h3 className="text-xl font-bold text-sky-800">Woolen Socks</h3>
                        <p className="text-sky-700">A small contribution like socks can make a big difference.</p>
                    </div>
                    <div data-aos="flip-right" className="bg-sky-600 p-4 rounded-lg shadow-md animate_animated animate_fadeInUp">
                        <FaSnowflake className="text-sky-900 text-4xl mb-2" />
                        <h3 className="text-xl font-bold text-sky-800">Thermal Wear</h3>
                        <p className="text-sky-700">Thermal wear provides effective protection from the cold.</p>
                    </div>
                </div>
                <Link to="/campaign" >
                    <button className="mt-6 bg-sky-800 text-white px-6 py-2 rounded-lg hover:bg-sky-900 transition duration-300">
                        Donate Clothes
                    </button>
                </Link>
            </div>


            <div
                data-aos="zoom-in"
                className="bg-sky-100 p-8 rounded-lg shadow-lg"
            >
                <h2 className="text-3xl font-semibold text-sky-900 mb-6">
                    Become a Volunteer
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Unique layout with column spans */}
                    <div data-aos="flip-right" className="bg-sky-200 p-6 rounded-lg shadow-md animate_animated animate_fadeInLeft md:col-span-2">
                        <FaHandsHelping className="text-sky-900 text-4xl mb-2" />
                        <h3 className="text-xl font-bold text-sky-800">Sorting Items</h3>
                        <p className="text-sky-700">
                            Assist in organizing donated clothes for distribution.
                        </p>
                    </div>
                    <div data-aos="flip-right" className="bg-sky-300 p-6 rounded-lg shadow-md animate_animated animate_fadeInRight">
                        <FaTruck className="text-sky-900 text-4xl mb-2" />
                        <h3 className="text-xl font-bold text-sky-800">Delivery Help</h3>
                        <p className="text-sky-700">
                            Transport donations to those in need across regions.
                        </p>
                    </div>
                    <div data-aos="flip-down" className="bg-sky-400 p-6 rounded-lg shadow-md animate_animated animate_zoomIn">
                        <FaHeart className="text-sky-900 text-4xl mb-2" />
                        <h3 className="text-xl font-bold text-sky-800">Community Support</h3>
                        <p className="text-sky-700">
                            Help coordinate donation drives and events.
                        </p>
                    </div>
                    <div data-aos="flip-up" className="bg-sky-500 p-6 rounded-lg shadow-md animate_animated animate_fadeInUp md:col-span-2">
                        <FaRegSmile className="text-sky-50 text-4xl mb-2" />
                        <h3 className="text-xl font-bold text-sky-50">Local Assistance</h3>
                        <p className="text-sky-50">
                            Engage directly with communities to understand their needs.
                        </p>
                    </div>
                    <div data-aos="flip-left" className="bg-sky-600 p-6 rounded-lg shadow-md animate_animated animate_fadeInDown">
                        <FaPeopleCarry className="text-sky-100 text-4xl mb-2" />
                        <h3 className="text-xl font-bold text-sky-100">Event Management</h3>
                        <p className="text-sky-100">
                            Organize events to raise awareness and gather donations.
                        </p>
                    </div>
                    <div className="p-6 bg-sky-200 rounded-lg shadow-lg" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="text-sky-800 text-4xl font-bold mb-2"><CountUp start={0} end={530} duration={3} separator="," /></div>
                        <p className="text-gray-700 font-semibold">Volunteers Engaged</p>
                        <p className="text-gray-500 mt-2">
                            A dedicated team of volunteers making a difference every day.
                        </p>
                    </div>
                    
                    
                </div>
                <Link to="/campaign" >
                    <button className="mt-6 bg-sky-800 text-white px-6 py-2 rounded-lg hover:bg-sky-900 transition duration-300">
                        Become a Volunteer
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HowToHelp;