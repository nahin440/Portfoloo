import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const HowItWorks = () => {

    useEffect(() => {
        AOS.init();
    }, [])


    const steps = [
        {
            id: 1,
            title: "Identify Winter Clothing",
            description:
                "Choose warm clothes that are clean, wearable, and suitable for donation. Ensure they are ready to help someone stay warm this winter.",
        },
        {
            id: 2,
            title: "Pack Your Donations",
            description:
                "Neatly pack the selected clothing items in bags or boxes. Label them if possible to make sorting easier for volunteers.",
        },
        {
            id: 3,
            title: "Locate Collection Centers",
            description:
                "Use our website to find collection points in your area or arrange for a pickup if available.",
        },
        {
            id: 4,
            title: "Drop Off Donations",
            description:
                "Visit the nearest collection point and hand over your donations to our volunteers.",
        },
        {
            id: 5,
            title: "Distribution to Divisions",
            description:
                "We ensure your donations reach the right hands across all major divisions of Bangladesh.",
        },
        {
            id: 6,
            title: "Spread the Warmth",
            description:
                "Encourage others to donate and make a bigger impact. Together, we can help more people stay warm.",
        },
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2
                    className="text-4xl font-extrabold text-center text-gray-800 mb-10"
                    data-aos="fade-up"
                >
                    How It Works
                </h2>
                <p
                    className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Learn about the steps you can take to make a difference this winter season.
                </p>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-800"></div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`relative bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? "md:ml-auto md:mr-16" : "md:mr-auto md:ml-16"
                                    }`}
                                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                data-aos-delay={index * 100}
                            >
                                {/* Number Badge */}
                                <div className="w-10 h-10 bg-sky-800 text-white rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                                    {step.id}
                                </div>

                                {/* Step Content */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className="text-center mt-12"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <a
                        href="/donate"
                        className="bg-sky-800 hover:bg-sky-950 text-white px-6 py-3 rounded-full text-lg shadow-lg"
                    >
                        Start Donating
                    </a>
                </div>
            </div>
        </section>
    );
};
export default HowItWorks;
