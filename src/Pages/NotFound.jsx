import { Link } from "react-router-dom";
import errorImage from "../images/404 - Imgur.jpg";

const PageNotFound = () => {
    return (
        <section className="min-h-screen flex justify-center items-center p-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            
            <div className="w-full max-w-3xl text-center">

                <header className="mb-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-red-400">
                        404 — Page Not Found
                    </h1>
                </header>

                <div className="relative mx-auto max-w-2xl">
                    <img
                        src={errorImage}
                        alt="Page not found illustration"
                        className="w-full rounded-[40px] opacity-95 shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                    />

                    <span className="absolute inset-0 rounded-[40px] pointer-events-none bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
                </div>

                <Link
                    to="/"
                    className="inline-block mt-8 px-8 py-3 rounded-full font-medium text-white
                               bg-gradient-to-r from-indigo-600 to-blue-500
                               hover:from-blue-500 hover:to-indigo-600
                               transition-all duration-300 shadow-lg"
                >
                    Go Back Home
                </Link>

            </div>
        </section>
    );
};

export default PageNotFound;
