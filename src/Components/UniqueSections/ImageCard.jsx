import { useEffect } from 'react'
import img1 from '../../assets/help img/12062417_4881929.jpg'
import img2 from '../../assets/help img/12151247_4914436.jpg'
import img3 from '../../assets/help img/12277181_4866642.jpg'
import img4 from '../../assets/help img/12555746_4966026.jpg'


import AOS from 'aos'
import 'aos/dist/aos.css'

const ImageCardSection = () => {

    useEffect(() => {
        AOS.init();
    }, [])


    const cards = [
        {
            title: "Donate Warm Clothes",
            description: "Help keep someone warm this winter by donating jackets, sweaters, and blankets.",
            image: `${img1}`,
        },
        {
            title: "Volunteer for Drives",
            description: "Join our team to organize and distribute donations to those in need.",
            image: `${img2}`,
        },
        {
            title: "Spread Awareness",
            description: "Share our mission on social media to reach more donors and volunteers.",
            image: `${img3}`,
        },
        {
            title: "Support a Family",
            description: "Sponsor a family this winter by providing essentials for their well-being.",
            image: `${img4}`,
        },
    ];

    return (
        <div className="bg-gray-50 py-12 " data-aos="fade-up" >

            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 animate__rubberBand">
                    How You Can Help
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <div data-aos="zoom-out"
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-48 object-cover"
                            />
                            <div data-aos="fade-up" className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCardSection;