import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from "react-bootstrap";

// Assets & Context
import google from '../../imgs/google.png';
import facebook from '../../imgs/facebook.png';
import { useUserAuth } from "../../Context/UserAuthContext";

// Components
import MyFooter from "../Footer/MyFooter";
import MyCopyright from "../Copyright/MyCopyright";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn, facebookSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setError("Please fill all the input fields");
            return;
        }
        setError("");
        try {
            await logIn(email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleFacebookSignIn = async (e) => {
        e.preventDefault();
        try {
            await facebookSignIn();
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-200">
                    
                    {/* Header */}
                    <div className="text-center">
                        <h2 className="text-4xl font-['Playfair_Display'] font-bold text-slate-900">
                            Welcome Back
                        </h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Please enter your details to login
                        </p>
                    </div>

                    {/* Error Alert */}
                    {error && (
                        <Alert variant="danger" className="rounded-lg text-sm">
                            {error}
                        </Alert>
                    )}

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <TextField
                                fullWidth
                                label="Email Address"
                                variant="outlined"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                variant="outlined"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                            />
                        </div>

                        <Button
                            fullWidth
                            variant="contained"
                            type="submit"
                            className="bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl transition-all duration-300"
                            style={{ height: '50px', backgroundColor: '#1e293b' }}
                        >
                            Log In
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-slate-500 font-medium uppercase">Or continue with</span>
                        </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            onClick={handleGoogleSignIn}
                            className="flex items-center justify-center px-4 py-2 border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors duration-300"
                        >
                            <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                            <span className="text-sm font-medium text-slate-700">Google</span>
                        </button>
                        <button
                            onClick={handleFacebookSignIn}
                            className="flex items-center justify-center px-4 py-2 border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors duration-300"
                        >
                            <img src={facebook} alt="Facebook" className="w-5 h-5 mr-2" />
                            <span className="text-sm font-medium text-slate-700">Facebook</span>
                        </button>
                    </div>

                    <p className="text-center text-sm text-slate-600 mt-6">
                        Don't have an account?{" "}
                        <Link to="/signup" className="font-semibold text-amber-600 hover:text-amber-500">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
           
        </>
    );
};

export default Login;