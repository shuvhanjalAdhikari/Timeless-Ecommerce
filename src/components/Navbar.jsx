import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Search for:", search);
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md border-b border-gray-200">
      <div className="flex items-center">
        <Link to="/" className="flex items-center text-blue-900 font-bold text-xl">
          <p>TIMELESS</p>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <ul className="flex items-center space-x-4">
          <li><Link to="/" className="text-[#001122] hover:text-[#0097fb] transition-colors">Home</Link></li>
          <li><Link to="/About" className="text-[#001122] hover:text-[#0097fb]  transition-colors">About</Link></li>
          <li><Link to="/Contact" className="text-[#001122]  hover:text-[#0097fb]  transition-colors">Contact</Link></li>
          <li><Link to="/Login" className="text-[#001122]  hover:text-[#0097fb]  transition-colors">Login</Link></li>
          <li><Link to="/User" className="text-[#001122]  hover:text-[#0097fb] transition-colors">User</Link></li>
          <li><Link to="/Signin" className="text-[#001122]  hover:text-[#0097fb]  transition-colors">Signin</Link></li>
        </ul>
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <input
            className="p-2 border border-gray-300 rounded-l-full focus:border-blue-800 outline-none transition-colors"
            type="text"
            onChange={handleChange}
            value={search}
            placeholder="Search"
            aria-label="Search"
          />
          <button type="submit" className="p-2 bg-blue-900 text-white rounded-r-full hover:bg-[#0097fb] transition-colors">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
