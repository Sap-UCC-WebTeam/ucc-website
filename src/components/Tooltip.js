import React from "react";

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative">
      {children}
      <div className="absolute bg-gray-800 text-white px-2 py-1 rounded text-xs bottom-0 left-1/2 transform -translate-x-1/2 mb-2 opacity-0 pointer-events-none transition-opacity duration-300">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
