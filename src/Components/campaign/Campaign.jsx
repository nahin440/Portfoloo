import React, { useEffect, useState } from 'react';
import Camp from '../camp/Camp';

const Campaign = () => {
    const [camps, setCamps] = useState([])

    useEffect(() => {
        fetch('campaign.json')
            .then(res => res.json())
            .then(data => setCamps(data))
    }, [])
    return (


        <div className='my-10 w-11/12 md:w-9/12 mx-auto' >
            <div className='md:w-9/12 mx-auto bg-sky-50 p-5 rounded-xl space-y-5 my-10' >
                <h1 className='text-2xl font-bold animate__bounceIn' >
                    Join Our Winter Warmth Campaign
                </h1>
                <p  className='animate__backOutLeft' >
                    Be a part of our mission to spread warmth and hope this winter. Through your generous donations and active participation, we aim to provide essential winter clothing to those in need across Bangladesh. Together, we can make a difference, one garment at a time.
                </p>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                {
                    camps.map(camp => <Camp key={camp.id} camp={camp}  ></Camp>)
                }
            </div>
        </div>

    );
};

export default Campaign;