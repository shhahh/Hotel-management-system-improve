import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from "react-bootstrap";

// Firebase & Auth
import { useUserAuth } from "../../Context/UserAuthContext";

const Signup = () => {
    const [userData, setUserData] = useState({
        fullname: "",
        username: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic Validation
        if (!userData.username || !userData.password || !userData.email || !userData.fullname) {
            setError("All fields are required!");
            return;
        }

        setError("");
        try {
            await signUp(userData.email, userData.password, userData.fullname, userData.username);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-200">
                
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl font-['Playfair_Display'] font-bold text-slate-900">
                        Create Account
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Join us to experience luxury and comfort
                    </p>
                </div>

                {/* Error Display */}
                {error && (
                    <Alert variant="danger" className="rounded-lg text-sm">
                        {error}
                    </Alert>
                )}

                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <TextField
                            fullWidth
                            label="Full Name"
                            name="fullname"
                            variant="outlined"
                            value={userData.fullname}
                            onChange={handleChange}
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                        />
                        <TextField
                            fullWidth
                            label="Username"
                            name="username"
                            variant="outlined"
                            value={userData.username}
                            onChange={handleChange}
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                        />
                        <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            type="email"
                            variant="outlined"
                            value={userData.email}
                            onChange={handleChange}
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            variant="outlined"
                            value={userData.password}
                            onChange={handleChange}
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                        />
                    </div>

                   <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        className="bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl transition-all duration-300"
                        style={{ 
                            height: '50px', 
                            backgroundColor: '#1e293b',
                            textTransform: 'none', // Ye text ko natural rakhta hai (Capitalize nahi karta)
                            fontSize: '16px',
                            fontWeight: '600'
                        }}
                    >
                        Create Account
                    </Button>
                </form>

                {/* Footer Link */}
                <div className="text-center mt-6">
                    <p className="text-sm text-slate-600">
                        Already have an account?{" "}
                        <Link to="/login" className="font-semibold text-amber-600 hover:text-amber-500 transition-colors">
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;