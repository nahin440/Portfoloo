import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../../Provider/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {


    const { userLogin, setUser } = useContext(AuthContext)

    const [err, setErr] = useState({})

    const emailRef = useRef()

    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)

            .then(result => {
                const user = result.user
                // console.log(user)
                setUser(user)
                navigate(location?.state ? location.state : "/")

            })

            .catch((error) => {
                setErr({ ...err, Login: error.code })

            });


    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            const message = "Please Provide a valid Email" 
            alert('Please Provide a valid Email')
        }

        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert(' Password Reset email has been sent to your email.')
        })
    }


    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input ref={emailRef} type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label onClick={handleForgetPassword} className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div>
                        {
                            err.Login && <label className="label">
                                <a href="#" className="text-red-500 ">Incorrect Email or Password </a>
                            </label>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-sky-950  hover:bg-sky-200 hover:text-sky-950 border border-sky-500 ">Login</button>
                    </div>
                </form>
                <h1 className='mb-5 px-8'>New to This Website? <Link to="/register" className="text-sky-800 font-semibold" >Register</Link> </h1>
            </div>
        </div>
    );
};

export default Login;