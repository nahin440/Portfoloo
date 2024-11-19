
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {

    useEffect(() => {
        AOS.init();
    }, [])



  return (
    <section data-aos="zoom-in-down" className="bg-blue-600 text-white py-12">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate__rubberBand">
          Make a Difference This Winter!
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Join us in providing warm clothing to those in need. Together, we can bring warmth and hope to every corner of Bangladesh.
        </p>
        <div className="flex justify-center gap-4">
          <Link to='/campaign'
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
          >
            Donate Now
          </Link>
          <Link to="/campaign"
            className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Become a Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;