import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
