import React, { useEffect } from "react";
import { FaTshirt, FaHatWizard } from "react-icons/fa";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const HowToHelp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-6 py-10 bg-sky-50">
      <h1 className="text-4xl font-bold text-center mb-10 text-sky-800">
        How to Help
      </h1>

      {/* Section 1: Help Donating Clothes */}
      <div
        data-aos="fade-up"
        className="mb-12 bg-sky-100 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-semibold text-sky-900 mb-6">
          Help Donating Clothes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-sky-200 p-6 rounded-lg shadow-md">
            <FaTshirt className="text-sky-900 text-4xl mb-4" />
            <h3 className="text-xl font-bold text-sky-800 mb-2">Warm Jackets</h3>
            <p className="text-sky-700 mb-4">
              Donate jackets to help keep people warm in the cold.
            </p>
            <div className="text-3xl font-bold text-sky-900">
              <CountUp start={0} end={1200} duration={3} separator="," />
            </div>
            <p className="text-sky-700">Jackets Donated</p>
          </div>

          {/* Card 2 */}
          <div className="bg-sky-300 p-6 rounded-lg shadow-md">
            <FaHatWizard className="text-sky-900 text-4xl mb-4" />
            <h3 className="text-xl font-bold text-sky-800 mb-2">Winter Hats</h3>
            <p className="text-sky-700 mb-4">
              Protect vulnerable people by providing winter hats.
            </p>
            <div className="text-3xl font-bold text-sky-900">
              <CountUp start={0} end={850} duration={3} separator="," />
            </div>
            <p className="text-sky-700">Hats Donated</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;