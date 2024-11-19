import React, { useEffect, useState } from 'react';
import Camp from '../camp/Camp';

const Campaign = () => {
    const [camps , setCamps] = useState([])

    useEffect(()=>{
        fetch('campaign.json')
        .then(res=>res.json())
        .then(data=>setCamps(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
            {
                camps.map(camp=> <Camp key={camp.id} camp={camp}  ></Camp>)
            }
        </div>
    );
};

export default Campaign;