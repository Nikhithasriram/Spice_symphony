// RegisterPage.js
import React from 'react';

const RegisterPage = () => {
    return (
        <div 
            className="flex items-center justify-center h-screen" // Greyish background
            style={{
                backgroundImage: "url('/foodbg_black.jpg')", // Replace with your actual image path
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity:0.8
            }}
        >
            <div className="flex flex-col items-center"> {/* Container for centering */}
                <h1 className="text-4xl font-bold text-yellow-500 mb-8">Spicy Symphony</h1> {/* Centered Header */}
                
                <div className="bg-black bg-opacity-80 text-white p-8 rounded-lg shadow-lg w-112"> {/* Register Box */}
                    <h2 className="text-3xl font-bold text-center mb-6">REGISTER</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm mb-1">NAME</label> {/* Name Field */}
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" 
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm mb-1">EMAIL</label>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" 
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm mb-1">PASSWORD</label>
                            <input 
                                type="password" 
                                placeholder="Enter your password" 
                                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" 
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-400 text-sm mb-1">CONFIRM PASSWORD</label>
                            <input 
                                type="password" 
                                placeholder="Confirm your password" 
                                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded" 
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-400 transition duration-300"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-4 text-center">
                        Already have an account? <a href="#" className="text-blue-400 hover:underline">Login here</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;