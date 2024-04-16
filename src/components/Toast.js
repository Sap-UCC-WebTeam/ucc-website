import React from "react";

const Toast = ({ message }) => {
  return (
    <div className="bg-blue-500 text-white px-4 py-2 rounded">{message}</div>
  );
};

export default Toast;
