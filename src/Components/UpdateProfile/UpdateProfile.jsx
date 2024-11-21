import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const { user,setLoading ,updateUser,setUser} = useContext(AuthContext)
   

    if(user === null){
        setLoading(true)
        return <Loader></Loader>
    }
    
    
    const {displayName,photoURL,email} = user
    
    setLoading(false)


    const [newName,setNewName] = useState(displayName)
    const [newPhoto,setNewPhoto] = useState(photoURL)
    const [newEmail,setNewEmail] = useState(email)
    const [error,setError] = useState(null)

    const navigate = useNavigate()

    
    // const email = form.email.value;
    // const password = form.password.value;



    const handleUpdate = (e) => {
        e.preventDefault()


        const form = new FormData(e.target)
        const name = form.get("name")
        if(name.length < 5){
            setError({...error,name: "At least 5 character long"});
            return;
        }

        
        const photo = form.get("photo")
        if(name.length < 5){
            setError({...error,name: "please give a valid image"});
            return;
        }
        const email = form.get("email")
        
        setNewName(name);
        setNewPhoto(photo);
        setNewEmail(email)


        updateUser({displayName:newName,photoURL:newPhoto,email:newEmail})
            
            .then(()=> {
                setUser({...user,displayName:name,photoURL:photo,email:email})
                setLoading(false)
                
                toast('profile updated')
                navigate("/dashboard")})


    }



    return (
        <div className='bg-opacity-60 bg-gradient-to-r from-blue-800/30 via-blue-500/30 to-sky-900/30 p-20'>
            <div className='flex justify-center items-center' >
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdate} className="card-body space-y-5">
                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Full Name</span>
                            </label> */}
                            <input type="text" name='name' placeholder={displayName}className="input input-bordered" required  />
                           
                        </div>
                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label> */}
                            <input type="text" name='photo' placeholder={photoURL} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Email</span>
                            </label> */}
                            <input type="email" name='email' placeholder={email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            {/* <label className="label">
                                <span className="label-text">Password</span>
                            </label> */}
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                               
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-sky-950  hover:bg-sky-200 hover:text-sky-950 border border-sky-500">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;