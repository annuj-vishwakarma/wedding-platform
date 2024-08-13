
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Wedding Platform
        </div>
        <div>
          <Link to="/login" className="text-white mx-2">Login</Link>
          <Link to="/register" className="text-white mx-2">Register</Link>
          <Link to="/dashboard" className="text-white mx-2">Dashboard</Link>
          <Link to="/vendors" className="text-white mx-2">Vendors</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
