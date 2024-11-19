import React from 'react';
import { Link } from 'react-router-dom';

const Camp = ({ camp }) => {

    const { title, image, description, division, id } = camp
    return (
        <div>
            <div className="card w-fit bg-base-100 shadow-xl mx-auto">
                <figure>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover"
                    />
                </figure>
                <div className="card-body ">
                    <div className=' flex-col' >
                        <h2 className="card-title text-lg font-bold">{title}</h2>
                        <p className="text-gray-600 flex-grow h-24 ">{description}</p>
                    </div>
                    <div className="flex justify-between items-center  mt-4">
                        <span className="text-lg font-semibold text-sky-950">Division: {division}</span>
                        <Link to={`/donate/${id} `}><button className="btn btn-primary bg-sky-950 btn-sm hover:bg-sky-200 hover:text-sky-950 ">Donate Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Camp;