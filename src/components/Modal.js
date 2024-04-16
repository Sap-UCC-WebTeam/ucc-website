import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div className="absolute bg-gray-800 opacity-75 inset-0"></div>
      <div className="bg-white p-4 rounded z-50">
        <button className="absolute top-0 right-0" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
