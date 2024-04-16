// Footer.js

import React from "react";

const AppFooter = () => {
  return (
    <footer className="bg-gray-800 py-4 px-6 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section */}
        <div>
          <p className="text-white">© 2024 Chico UCC</p>
          <p className="text-gray-400 text-sm">All rights reserved</p>
        </div>
        {/* Right section */}
        <div>
          <a href="#" className="text-white mx-2 hover:text-gray-400">
            Terms of Service
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-white mx-2 hover:text-gray-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
