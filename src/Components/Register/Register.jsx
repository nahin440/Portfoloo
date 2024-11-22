import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "react-toastify/dist/ReactToastify.css";
import { auth, AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createNewUser, updateUser, setUser } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

      
       

        try {
           
            const result = await createNewUser(email, password);
            const user = result.user;

           
            await updateUser({ displayName: name, photoURL: photo });
            setUser({ ...user, displayName: name, photoURL: photo });

            toast.success("Registration successful!");
            navigate("/"); 
        } catch (err) {
            toast.error(`Error: ${err.message}`);
        }
    };

   
    const handleGoogleSignUp = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            setUser(user);
            toast.success("Signed up successfully with Google!");
            navigate("/");
        } catch (err) {
            toast.error(`Google Sign-Up Error: ${err.message}`);
        }
    };

    return (
        <div className="py-16 flex w-full justify-center items-center">
            <ToastContainer position="top-center" autoClose={1500} />
            <div className="card bg-base-100 max-w-sm p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body px-0 py-2">

                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Full Name"
                            className="input input-bordered"
                            required
                        />
                        {error.name && (
                            <label className="label">
                                <span className="text-red-500 text-sm">{error.name}</span>
                            </label>
                        )}
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter Photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>


                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPass ? "text" : "password"}
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                            className="absolute right-5 top-[45px] text-gray-600 p-2 rounded-3xl bg-gray-50"
                        >
                            {showPass ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {error.password && (
                            <label className="label">
                                <span className="text-red-500 text-sm">{error.password}</span>
                            </label>
                        )}
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-sky-950 hover:bg-sky-200 hover:text-sky-950 border border-sky-500">
                            Register
                        </button>
                    </div>
                </form>


                <div className="flex flex-col justify-start text-left items-center my-4">
                    <span className="text-gray-500 mb-5 divider">or</span>
                    <button
                        onClick={handleGoogleSignUp}
                        className="px-10 py-2 rounded-lg bg-white border-2 border-sky-900 text-sky-900 flex justify-center items-center gap-5 hover:bg-sky-950 hover:text-sky-50"
                    >
                        Sign Up with Google
                        <span className="text-3xl p-1 bg-white rounded-full">
                            <FcGoogle />
                        </span>
                    </button>
                </div>


                <h1 className="my-5 text-left px-8">
                    Already have an account?{" "}
                    <Link to="/login" className="text-sky-800 font-semibold">
                        Login
                    </Link>
                </h1>
            </div>
        </div>
    );
};

export default Register;
