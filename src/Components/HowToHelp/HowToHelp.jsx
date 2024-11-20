import React, { useEffect } from "react";
import { FaHandsHelping, FaRegHandshake, FaDonate, FaTruck, FaComments, FaUsers } from "react-icons/fa";
import "aos/dist/aos.css";
import "animate.css";
import AOS from "aos";

const HowToHelp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-4 py-10 bg-sky-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-sky-800 animate_animated animate_bounceIn">
        How to Help
      </h1>

      {/* Section 1: Donate Clothing */}
      <div data-aos="fade-up" className="mb-8 bg-sky-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-sky-900 mb-4">Donate Clothing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-sky-200 p-4 rounded-lg shadow-md animate_animated animate_fadeInLeft">
            <FaDonate className="text-sky-900 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-sky-800">Jackets</h3>
            <p className="text-sky-700">Provide jackets to those facing harsh winters.</p>
          </div>
          <div className="bg-sky-300 p-4 rounded-lg shadow-md animate_animated animate_fadeInRight">
            <FaDonate className="text-sky-900 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-sky-800">Sweaters</h3>
            <p className="text-sky-700">Keep people warm with comfortable sweaters.</p>
          </div>
          <div className="bg-sky-400 p-4 rounded-lg shadow-md animate_animated animate_fadeInUp">
            <FaDonate className="text-sky-900 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-sky-800">Scarves & Gloves</h3>
            <p className="text-sky-700">Small items make a big difference in the cold.</p>
          </div>
        </div>
      </div>

      {/* Section 2: Volunteer Services */}
      <div data-aos="fade-right" className="mb-8 bg-sky-100 p-6 rounded-lg shadow-lg animate_animated animate_zoomIn">
        <h2 className="text-2xl font-semibold text-sky-900 mb-4">Volunteer Services</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex-1 bg-sky-200 p-4 rounded-lg shadow-md">
            <FaHandsHelping className="text-sky-900 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-sky-800">Sorting Donations</h3>
            <p className="text-sky-700">Help organize and sort donated items efficiently.</p>
          </div>
          <div className="flex-1 bg-sky-300 p-4 rounded-lg shadow-md">
            <FaTruck className="text-sky-900 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-sky-800">Delivery Assistance</h3>
            <p className="text-sky-700">Assist in delivering donations to remote areas.</p>
          </div>
          <div className="flex-1 bg-sky-400 p-4 rounded-lg shadow-md">
            <FaRegHandshake className="text-sky-900 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-sky-800">On-Site Help</h3>
            <p className="text-sky-700">Support community events and distribution efforts.</p>
          </div>
        </div>
      </div>

      {/* Section 3: Raise Awareness */}
      <div data-aos="flip-left" className="mb-8 bg-sky-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-sky-900 mb-4">Raise Awareness</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-sky-200 p-4 rounded-lg shadow-md animate_animated animate_bounceIn">
            <FaComments className="text-sky-900 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-sky-800">Social Media</h3>
            <p className="text-sky-700">Share our mission to inspire others to help.</p>
          </div>
          <div className="bg-sky-300 p-4 rounded-lg shadow-md animate_animated animate_fadeInUp">
            <FaUsers className="text-sky-900 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-sky-800">Local Events</h3>
            <p className="text-sky-700">Host or participate in local events for the cause.</p>
          </div>
          <div className="bg-sky-400 p-4 rounded-lg shadow-md animate_animated animate_zoomIn">
            <FaRegHandshake className="text-sky-900 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-sky-800">Collaborate</h3>
            <p className="text-sky-700">Work with local organizations to spread the word.</p>
          </div>
          <div className="bg-sky-500 p-4 rounded-lg shadow-md animate_animated animate_fadeIn">
            <FaTruck className="text-sky-900 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-sky-800">Campaign Drives</h3>
            <p className="text-sky-700">Promote donation drives within your network.</p>
          </div>
        </div>
      </div>

      {/* Section 4: Financial Support */}
      <div data-aos="fade-left" className="mb-8 bg-sky-100 p-6 rounded-lg shadow-lg animate_animated animate_lightSpeedInLeft">
        <h2 className="text-2xl font-semibold text-sky-900 mb-4">Financial Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-sky-200 p-4 rounded-lg shadow-md">
            <FaDonate className="text-sky-900 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-sky-800">Make a Donation</h3>
            <p className="text-sky-700">Your financial contributions help fund essential supplies and logistics.</p>
          </div>
          <div className="bg-sky-300 p-4 rounded-lg shadow-md">
            <FaUsers className="text-sky-900 text-3xl mb-2" />
            <h3 className="text-xl font-bold text-sky-800">Sponsor a Campaign</h3>
            <p className="text-sky-700">Support large-scale donation drives for maximum impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;