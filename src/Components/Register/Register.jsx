import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const {createNewUser,setUser,updateUser} = useContext(AuthContext)
    const [error,setError] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()

        // get the form

        const form = new FormData(e.target)
        const name = form.get("name")
        if(name.length < 5){
            setError({...error,name: "At least 5 character long"});
            return;
        }

        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        console.log({name,email,password,photo})

        createNewUser(email,password)
        .then((result )=> {
            const user = result.user;
            setUser(user)
            updateUser({disPlayName:name,photoURL:photo})
            .then(()=> {navigate("/")})

            
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
        

    } 
    return (
        <div className='flex justify-center items-center' >
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Full Name" className="input input-bordered" required />
                        {
                            error.name && <label className="label">
                            <span className="text-red-500 text-sm">{error.name}</span>
                        </label>
                        }
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-sky-950  hover:bg-sky-200 hover:text-sky-950 border border-sky-500">Register</button>
                    </div>
                </form>
                <h1 className='mb-5 px-8'>Already have an account? <Link to="/login" className="text-sky-800 font-semibold" >Login</Link> </h1>
            </div>
        </div>
    );
};

export default Register;