import React from "react";

const Events = () => {
  return (
    <div className="bg-white min-h-screen mr-10 ml-10 mt-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">2024 Events</h1>
        
        {/* Event Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Event 1 */}
          <div className="bg-gray-100 overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Online Faculty Learning Series</h2>
              <p className="text-sm text-gray-600 mb-2">NEW: Your UCC’s are designing an online faculty learning series that we hope to offer once a month.</p>
              <p className="text-sm text-gray-600 mb-2">March 12</p>
              <button className="text-blue-500 focus:outline-none">
                <a href="#" className="block text-green-500 mr-2 bg-green-100 p-2 px-4 rounded-full border">More Info</a>
              </button>
            </div>
          </div>
          
          {/* Event 2 */}
          <div className="bg-gray-100 overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">ERPsim North America Regional Competition</h2>
              <p className="text-sm text-gray-600 mb-2">March 22</p>
              <button className="text-blue-500 focus:outline-none">
                <a href="https://erpsim.hec.ca/en/competition" className="block text-green-500 mr-2 bg-green-100 p-2 px-4 rounded-full border">Virtual</a>
              </button>
            </div>
          </div>
          
          {/* Event 3 */}
          <div className="bg-gray-100 overflow-hidden shadow rounded-lg ">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">June Month of Learning</h2>
              <p className="text-sm text-gray-600 mb-2">Virtual details TBA</p>
            </div>
          </div>
          
          {/* Add more event cards here */}
        </div>
        
        {/* Additional Information */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Additional Information</h2>
          <p className="text-lg text-center text-gray-800 mb-2"><a href="https://www.sap.com/hk/events/sapphire/orlando.html?linkId=208904792" className="text-blue-500 hover:underline">SAP Sapphire & ASUG Annual Conference (June 3-5)</a> - Virtual & In-person</p>
          <p className="text-lg text-center text-gray-800 mb-2"><a href="https://erpsim.hec.ca/en/competition" className="text-blue-500 hover:underline">16th ERPsim International Final (June 6)</a> - Virtual</p>
          <p className="text-lg text-center text-gray-800 mb-2"><a href="https://erpsim.hec.ca/en/events" className="text-blue-500 hover:underline">SAP Academic Community Conference & ERPsim User Group 2024 (June 17-20)</a> - In-person, Montreal</p>
          <p className="text-lg text-center text-gray-800 mb-2"><a href="https://learning.sap.com/" className="text-blue-500 hover:underline">Ongoing training opportunities for educators</a> - Educators</p>
          <p className="text-lg text-center text-gray-800 mb-2"><a href="https://learning.sap.com/student-zone" className="text-blue-500 hover:underline">Ongoing training opportunities for students</a> - Students</p>
        </div>
      </div>
    </div>
  );
}

export default Events;
