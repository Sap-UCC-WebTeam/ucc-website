import React, { useState } from "react";
import knowledgebaseData from "./knowledgebaseData";

const KnowledgeBase = () => {


  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  // State for filtered cards
  const [filteredCards, setFilteredCards] = useState(knowledgebaseData);

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    // Filter cards based on search query
    const filtered = knowledgebaseData.filter((card) =>
      card.tags.some((tag) => tag.toLowerCase().includes(e.target.value.toLowerCase()))
    );
    setFilteredCards(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search bar */}
      <div className="w-1/2 mx-auto mb-8 text-gray-800">
        <input
          type="text"
          placeholder="Search by hashtag..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Card items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">{card.title}</h2>
            <p className="text-gray-700 mb-4">{card.description}</p>
            <p className="text-gray-700 mb-4">{card.solution}</p>
            <div className="flex flex-wrap">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-200 text-gray-800 rounded-full px-2 py-1 text-sm font-semibold mr-2 mb-2"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mt-4">Author: {card.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;
