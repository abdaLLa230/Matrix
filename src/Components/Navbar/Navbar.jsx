import React, { useState, useEffect } from "react";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useLocation, Link } from "react-router-dom";
import "./style.scss";
import logo from "./../../images/logo-footer.png"




export default function Navbar() {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const { pathname } = window.location


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 425) {
        setMobileMenu(true);
      }
    });
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 300) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
          setShow("hide");
        } else {
          setShow("show");
        }
      } else {
        setShow("top");
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
    window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, mobileMenu]);

  return (
    <header className={`header px-6 py-4 bg-gray-900 shadow-md ${mobileMenu ? "mobileView bg-gray-800" : ""} ${show}`}>
  <div className="container flex justify-between items-center max-w-7xl mx-auto">
    <div className="logo flex items-center gap-2 select-none">
      <Link to={"/"} className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
          MatriX
        </h1>
      </Link>
    </div>

    <ul className="menuItems hidden md:flex items-center space-x-8 text-gray-300">
      <li>
        <Link
          to="/"
          onClick={() => setMobileMenu(false)}
          className={`${pathname === "/" ? "border-b-4 border-indigo-500 text-indigo-400" : "hover:text-indigo-400"} py-2`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/games"
          onClick={() => setMobileMenu(false)}
          className={`${pathname === "/games" ? "border-b-4 border-indigo-500 text-indigo-400" : "hover:text-indigo-400"} py-2`}
        >
          Games
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          onClick={() => setMobileMenu(false)}
          className={`${pathname === "/about" ? "border-b-4 border-indigo-500 text-indigo-400" : "hover:text-indigo-400"} py-2`}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          onClick={() => setMobileMenu(false)}
          className={`${pathname === "/contact" ? "border-b-4 border-indigo-500 text-indigo-400" : "hover:text-indigo-400"} py-2`}
        >
          Contact
        </Link>
      </li>
    </ul>

    <div className="mobileMenuItems flex md:hidden items-center text-indigo-400 text-2xl gap-6">
      {mobileMenu ? (
        <VscChromeClose onClick={() => setMobileMenu(false)} className="cursor-pointer hover:text-indigo-600 transition" />
        ) : (
          <SlMenu onClick={() => setMobileMenu(true)} /> 
        )}
      </div>
      </div>
    </header>
  );
};


