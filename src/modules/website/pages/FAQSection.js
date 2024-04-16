import React, { useState } from 'react';
import faqData from './faqData'; // Importing faqData from the separate file

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter FAQ items based on the search query
  const filteredFAQs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mx-8 my-8">
      <div className="bg-white">
        <p className="text-xl font-semibold text-gray-800 bg-white bg-white px-10 pb-8 pt-10  flex  items-center flex-row">
          FAQ Section - Any questions? Shoot!
        </p>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search FAQ..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full border border-slate-200 px-4 py-2 px-20 pb-2 pt-2 text-gray-800"
        />
      </div>
      {filteredFAQs.map((faq, index) => (
        <section key={index} className="bg-white px-10 pb-4 pt-4 flex justify-between items-center flex-row">
          <div className="w-full">
            <details className="border border-slate-200 rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-1 bg-none open:bg-white duration-300">
              <summary className="list-none font-semibold relative text-sm cursor-pointer pr-7 text-gray-800 ">
                {faq.question}
                <div className="absolute top-0 right-0 bg-slate-200 rounded-full  cursor-pointer visible open:invisible">
                  <svg
                    className="h-5 w-4 text-pink-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="{1.5}"
                    stroke="currentColor"
                    color= "#000000"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </summary>
              <p className="text-xs pt-3  text-gray-800 ">
                {faq.answer}
              </p>
            </details>
          </div>
        </section>
      ))}
    </div>
  );
};

export default FAQSection;
