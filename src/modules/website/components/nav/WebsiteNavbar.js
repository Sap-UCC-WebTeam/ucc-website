import React from "react";
import { Link } from 'react-router-dom';
import SAPLogo from '../../../../assets/SAP.png';

const WebsiteNavbar = () => {
  return (
    <header className="bg-white text-gray-800 p-4 flex justify-between items-center" style={{ zIndex: 1 }}>
      <div className="flex items-center">
        <Link to="/">
        <img src={SAPLogo} alt="Logo" className="h-12 mr-8" />
        </Link>
      </div>
      <div>
        <nav style={{ justifyContent: 'space-evenly' }}>
          <ul className="flex items-center" style={{ textAlign: "center" }}>
            <li className="font-medium mr-4 pl-2 pr-2">
              <Link to="/">Home</Link>
              {/* <a href="#">Home</a> */}
            </li>
            <li className="font-medium mr-4 pl-2 pr-2"><a href="#">About Us</a></li>
            <li className="font-medium mr-4 pl-2 pr-2"><a href="#">Contact Us</a></li>
            <li className="font-medium pl-2 pr-2">
              <Link to="/events">
              Events
              </Link>
              </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center"> {/* Center the content horizontally */}
      <Link to="/login" className="text-white">
        <button className="font-medium px-4 py-2 rounded mr-4 hover:bg-blue-500 hover:text-white" style={{ backgroundColor: '#FFFFFF', color: '#41C0E8' }}>Login</button>
        </Link>
        <Link to="/registration" className="text-white">
          <button className="font-medium text-white px-4 py-2 rounded" style={{ backgroundColor: '#41C0E8' }}>Register</button>
        </Link>

        
      </div>
    </header>
  );
}

export default WebsiteNavbar;
