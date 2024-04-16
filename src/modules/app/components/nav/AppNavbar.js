import React from "react";

const AppNavbar = () => {
  return (
    <nav className="bg-gray-800 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
        {/* Website/App name */}
        <h1 className="text-white text-lg font-semibold">Your App Name</h1>
      </div>
      <div className="flex-grow flex justify-center">
        {/* Navigation links */}
        <a href="/" className="text-white mx-4">
          Home
        </a>
        <a href="/about" className="text-white mx-4">
          About
        </a>
        <a href="/contact" className="text-white mx-4">
          Contact
        </a>
      </div>
      <div>
        {/* Login/Register links */}
        <a href="/login" className="text-white mr-4">
          Login
        </a>
        <a href="/register" className="text-white">
          Register
        </a>
      </div>
    </nav>
  );
};

export default AppNavbar;
