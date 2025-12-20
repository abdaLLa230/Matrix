import React from "react";
import { Link } from "react-router-dom";
import img from "../images/404 - Imgur.jpg";

const NotFound = () => {
    return (
        <div className="min-h-screen cursor-pointer flex items-center justify-center  p-4">
            <div className="max-w-3xl w-full text-center">

                <h1 className="text-4xl md:text-5xl font-bold text-red-400 hover:text-green-400 mb-6">
                    Oops! Page Not Found
                </h1>

                <div className="relative mx-auto max-w-sm">
                    <img src={img} alt="404" className=" w-full rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.6)] opacity-95" />

                    <div className=" pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
                </div>


                <Link to="/" className=" inline-block mt-8 px-7 py-3 rounded-full text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-md">
                    Back to Home
                </Link>

            </div>
        </div>
    );
};

export default NotFound;
