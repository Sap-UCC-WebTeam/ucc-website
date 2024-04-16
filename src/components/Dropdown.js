import React, { useState } from "react";

const Dropdown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="relative">
      <button className="bg-white px-4 py-2 rounded border">
        {selectedOption || "Select an option"}
      </button>
      <ul className="absolute bg-white border rounded mt-2">
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionChange(option)}
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
