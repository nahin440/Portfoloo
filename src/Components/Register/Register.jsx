import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
// import { auth } from "../../firebaseConfig"; // Ensure this is your Firebase config file path

const Register = () => {
    const { createNewUser, setUser, loading, updateUser, setLoading } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const [showPass, setShowPass] = useState(false);

    // GoogleAuthProvider instance
    const googleProvider = new GoogleAuthProvider();

    // Handle Google Sign-Up
    const handleGoogleSignUp = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Signed up successfully with Google!", { position: "top-center", autoClose: 1500 });
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(`Google Sign-Up Error: ${errorMessage}, { position: "top-center", autoClose: 1500 }`);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get the form
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        // Validate name
        if (name.length < 5) {
            const errorMessage = "Name must be at least 5 characters long.";
            setError((prev) => ({ ...prev, name: errorMessage }));
            toast.error(errorMessage, { position: "top-center", autoClose: 1500 });
            return;
        } else {
            setError((prev) => ({ ...prev, name: "" }));
        }

        // Validate password
        if (password.length < 6) {
            const errorMessage = "Password must be at least 6 characters long.";
            setError((prev) => ({ ...prev, password: errorMessage }));
            toast.error(errorMessage, { position: "top-center", autoClose: 1500 });
            return;
        }
        if (!/[A-Z]/.test(password)) {
            const errorMessage = "Password must contain at least one uppercase letter.";
            setError((prev) => ({ ...prev, password: errorMessage }));
            toast.error(errorMessage, { position: "top-center", autoClose: 1500 });
            return;
        }
        if (!/[a-z]/.test(password)) {
            const errorMessage = "Password must contain at least one lowercase letter.";
            setError((prev) => ({ ...prev, password: errorMessage }));
            toast.error(errorMessage, { position: "top-center", autoClose: 1500 });
            return;
        } else {
            setError((prev) => ({ ...prev, password: "" }));
        }

        // Register user
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setLoading(true);

                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        setLoading(false);
                        toast.success("Registration successful!", { position: "top-center", autoClose: 1500 });
                        navigate("/");
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                // toast.error(Error: ${errorMessage}, { position: "top-center", autoClose: 1500 });
            });
    };

    return (
        <div className=' py-16 flex w-full  justify-center items-center'>
            <ToastContainer />
            <div className="card  bg-base-100  max-w-sm shrink-0 p-10 shadow-2xl">

               


                <form onSubmit={handleSubmit} className="card-body px-0 py-2">
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Full Name" className="input input-bordered" required />
                        {error.name && <label className="label"><span className="text-red-500 text-sm">{error.name}</span></label>}
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
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPass ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                        <button
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                            className='absolute right-5 top-[45px] text-gray-600 p-2 rounded-3xl bg-gray-50'>
                            {!showPass ? <FaEye /> : <FaEyeSlash />}
                        </button>
                        {error.password && <label className="label"><span className="text-red-500 text-sm">{error.password}</span></label>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-sky-950 hover:bg-sky-200 hover:text-sky-950 border border-sky-500">Register</button>
                    </div>
                </form>
                <div className="flex flex-col justify-start text-left items-center my-4">
                <span className="text-gray-500 mb-5 divider ">or</span>
                    <button
                        onClick={handleGoogleSignUp}
                        className="px-10 py-2 rounded-lg bg-white border-2 border-sky-900 text-sky-900 flex justify-center items-center gap-5 hover:bg-sky-950 hover:text-sky-50">
                        Sign Up with Google
                        <span className='text-3xl p-1 bg-white rounded-full' ><FcGoogle></FcGoogle></span>
                    </button>
                    

                </div>
                <h1 className='my-5 text-left px-8'>Already have an account? <Link to="/login" className="text-sky-800 font-semibold">Login</Link></h1>
            </div>
        </div>
    );
};

export default Register;