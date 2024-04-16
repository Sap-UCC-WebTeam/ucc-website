import React from 'react';

const Buttons = () => {
  return (
    <div className="flex p-8" style ={{justifyContent: 'space-evenly'}}>
      {/* Button 1 */}
      <button className="px-4 py-2 rounded mr-4 hover:bg-blue-500 hover:text-white" style={{ backgroundColor: '#41C0E8', color: '#FFFFFF', fontWeight: 600 }}>
      Products we support
      </button>

      {/* Button 2 */}
      <button className="px-4 py-2 rounded mr-4 hover:bg-blue-500 hover:text-white" style={{ backgroundColor: '#FFFFFF', color: '#41C0E8', fontWeight: 600 }}>
        {/* HEC Montreal ERPSim */}
        Our Customers
      </button>

      {/* Button 3 */}
      <a href="https://erpsim.hec.ca/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded mr-4 hover:bg-blue-500 hover:text-white" style={{ backgroundColor: '#41C0E8', color: '#FFFFFF', fontWeight: 600 }}>
        HEC Montreal ERPSim
      </a>

      <button className="px-4 py-2 rounded mr-4 hover:bg-blue-500 hover:text-white" style={{ backgroundColor: '#FFFFFF', color: '#41C0E8', fontWeight: 600 }}>
      Contact Us
      </button>

      <a href="https://erpsim.hec.ca/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded mr-4 hover:bg-blue-500 hover:text-white" style={{ backgroundColor: '#41C0E8', color: '#FFFFFF', fontWeight: 600 }}>
      SAP Academic Board
      </a>
      
    </div>
  );
};

export default Buttons;
