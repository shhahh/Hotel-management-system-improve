import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);

  // Scroll logic for premium glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleLogout() {
    try {
      await logOut();
      navigate("/login");
    } catch {
      console.log("can't logout");
    }
  }

  // Helper function for NavLink styles
  const linkStyle = ({ isActive }) => 
    `px-4 py-2 transition-all duration-300 font-medium tracking-wide ${
      isActive ? "text-premium border-b-2 border-premium" : "hover:text-premium"
    }`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5 text-white"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <NavLink to="/" className={`text-2xl font-bold font-['Playfair_Display'] tracking-tighter ${scrolled ? "text-slate-900" : "text-white"}`}>
          SNG<span className="text-premium">HOTELS</span>
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className={`hidden md:flex items-center space-x-4 font-['Poppins'] ${scrolled ? "text-slate-700" : "text-white"}`}>
          <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkStyle}>About</NavLink></li>
          <li><NavLink to="/rooms" className={linkStyle}>Rooms</NavLink></li>
          <li><NavLink to="/contact" className={linkStyle}>Contact</NavLink></li>

          {!user ? (
            <div className="flex items-center space-x-3 ml-4">
              <NavLink to="/login" className="px-6 py-2 rounded-full border border-premium text-premium hover:bg-premium hover:text-white transition-all">
                Login
              </NavLink>
              <NavLink to="/signup" className="px-6 py-2 rounded-full bg-premium text-white hover:bg-black transition-all shadow-md">
                Sign Up
              </NavLink>
            </div>
          ) : (
            <div className="flex items-center space-x-3 ml-4">
              <NavLink to="/mybookings" className="px-6 py-2 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 transition-all text-sm">
                My Bookings
              </NavLink>
              <button onClick={handleLogout} className="px-6 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all text-sm shadow-sm">
                Logout
              </button>
            </div>
          )}
        </ul>

        {/* MOBILE ICON */}
        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          <i className={`fas ${click ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white text-slate-900 transition-all duration-300 shadow-xl ${click ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <ul className="flex flex-col p-6 space-y-4">
          <li><NavLink to="/" onClick={handleClick}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={handleClick}>About</NavLink></li>
          <li><NavLink to="/rooms" onClick={handleClick}>Rooms</NavLink></li>
          <li><NavLink to="/mybookings" onClick={handleClick}>My Bookings</NavLink></li>
          {!user ? (
            <NavLink to="/login" className="text-center p-3 bg-premium text-white rounded-lg">Login</NavLink>
          ) : (
            <button onClick={handleLogout} className="text-center p-3 bg-red-500 text-white rounded-lg">Logout</button>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;