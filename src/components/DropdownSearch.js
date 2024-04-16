import React, { useState } from "react";

const DropdownSearch = ({ options }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option);
    setFilteredOptions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="bg-white px-4 py-2 rounded border"
      />
      {filteredOptions.length > 0 && (
        <ul className="absolute bg-white border rounded mt-2 w-full">
          {filteredOptions.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSearch;
