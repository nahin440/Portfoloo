import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Dashboard = () => {

    const {user} = useContext(AuthContext)
    console.log(user)

    return (
        <div className='py-10 lg:w-9/12 mx-auto' >
            <img className='w-32 h-32 flex justify-center rounded-full border-2 border-sky-950 p-[2px]' src={user && user?.photoURL} alt="" />
            <h1 className='px-4'>
                {user && user?.displayName}
            </h1>
            <h1>
                {user && user?.email}
            </h1>
        </div>
    );
};

export default Dashboard;