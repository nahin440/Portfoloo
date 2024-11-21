import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex-col py-10 md:py-20 justify-center items-center bg-sky-200 ' >
                <div className='not-found flex flex-col gap-8 justify-center items-center text-center col-span-3 p-28 m-20 bg-sky-300 rounded-xl' >
                    <h1 className='text-5xl text-center font-bold' >
                        404
                    </h1>
                    <p className='text-lg font-semibold'>
                        Sorry we couldn't find the page you are searching for
                    </p>

                    <div className='flex justify-center'>
                        <Link to="/" className="  btn btn-primary bg-sky-950 btn-sm px-5 md:px-14 hover:bg-sky-200 hover:text-sky-950 border border-sky-500 ">Home</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;