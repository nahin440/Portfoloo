import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { userLogin, setUser, setLoading } = useContext(AuthContext);
    const [error, setError] = useState({});
    const [emailForReset, setEmailForReset] = useState("");
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    // Google Auth Provider
    const googleProvider = new GoogleAuthProvider();

    // Handle Google Sign-In
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Signed in successfully with Google!", { position: "top-center", autoClose: 1500 });
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(`Google Sign-In Error: ${errorMessage}`, { position: "top-center", autoClose: 1500 });
            });
    };

    // Handle Login Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setLoading(true);
                navigate("/");
            })
            .catch((error) => {
                setError({ ...error, Login: error.code });
                toast.error("Incorrect Email or Password", { position: "top-center", autoClose: 1500 });
            });
    };

    // Handle Password Reset
    const handleForgotPassword = () => {
        if (!emailForReset) {
            toast.error("Please enter your email to reset the password.", { position: "top-center", autoClose: 1500 });
            return;
        }

        sendPasswordResetEmail(auth, emailForReset)
            .then(() => {
                toast.success("Password reset email sent!", { position: "top-center", autoClose: 1500 });
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(`Error: ${errorMessage}`, { position: "top-center", autoClose: 1500 });
            });
    };

    return (
        <div className="flex justify-center py-20 items-center">
            <ToastContainer />
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered"
                            required
                            onChange={(e) => setEmailForReset(e.target.value)} // Capture email for reset
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPass ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="input input-bordered"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPass(!showPass)}
                            className="absolute right-5 top-[45px] text-gray-600 p-2 rounded-3xl bg-gray-50"
                        >
                            {!showPass ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    <div>
                        {error.Login && <label className="label"><span className="text-red-500">Incorrect Email or Password</span></label>}
                    </div>
                    <div className="form-control mt-1">
                        <button
                            onClick={handleForgotPassword}
                            className=" text-sm bg-white hover:underline text-left hover:text-sky-950"
                        >
                            Forgot Password?
                        </button>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-sky-950 hover:bg-sky-100 hover:text-sky-950 border border-sky-500">Login</button>
                    </div>
                </form>




                <div className="flex flex-col justify-start text-left items-center mt-4">
                    <span className="text-gray-500 m-5 divider">or</span>
                    <button
                        onClick={handleGoogleSignIn}
                        className="px-16 py-2 rounded-lg bg-white border-2 border-sky-900 text-sky-900 flex justify-center items-center gap-5 hover:bg-sky-950 hover:text-sky-50"
                    >
                        Sign In with Google
                        <span className="text-3xl p-1 bg-white rounded-full">
                            <FcGoogle />
                        </span>
                    </button>
                </div>

                <h1 className="my-10 px-8">
                    New to This Website?{" "}
                    <Link to="/register" className="text-sky-800 font-semibold">Register</Link>
                </h1>
            </div>
        </div>
    );
};

export default Login;
