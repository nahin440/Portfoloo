import React from 'react';

const Loader = () => {
    return (
        <div className='flex min-h-[500px] justify-center items-center' >
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    );
};

export default Loader;