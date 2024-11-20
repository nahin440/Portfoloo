import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import CountUp from 'react-countup';


const WhyDonate = () => {

    useEffect(() => {
        AOS.init();
    }, [])



    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-6 text-center" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate__rubberBand">
                    Why Donate?
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    Your contributions bring warmth, comfort, and hope to those facing harsh winters without the essentials.
                </p>
                <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3"   >
                    {/* Impact Item 1 */}
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="text-sky-800 text-4xl font-bold mb-2"><CountUp start={0} end={8580} duration={3} separator="," /></div>
                        <p className="text-gray-700 font-semibold">Clothes Donated</p>
                        <p className="text-gray-500 mt-2">
                            Over 10,000 items donated to those in need across Bangladesh.
                        </p>
                    </div>
                    {/* Impact Item 2 */}
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="text-sky-800 text-4xl font-bold mb-2"><CountUp start={0} end={3450} duration={3} separator="," /></div>
                        <p className="text-gray-700 font-semibold">Families Helped</p>
                        <p className="text-gray-500 mt-2">
                            Helping families stay warm and protected during winter.
                        </p>
                    </div>
                    {/* Impact Item 3 */}
                    <div className="p-6 bg-gray-100 rounded-lg shadow-lg" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className="text-sky-800 text-4xl font-bold mb-2"><CountUp start={0} end={530} duration={3} separator="," /></div>
                        <p className="text-gray-700 font-semibold">Volunteers Engaged</p>
                        <p className="text-gray-500 mt-2">
                            A dedicated team of volunteers making a difference every day.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyDonate;