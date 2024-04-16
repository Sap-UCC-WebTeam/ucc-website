import React from 'react';
import marketingImage from './assets/Marketing.svg'; // Replace with the actual path to your image

const Marketing = () => {
    return (
        <div className="flex justify-center items-center p-8">
          {/* Image and Content Container */}
          <div className="flex items-center mx-auto">
            {/* Content on the left */}
            <div className="flex flex-col ml-10">
              <h1 className="text-3xl font-bold mb-4">Your Marketing Title</h1>
              <p className="text-lg mb-4">
                Your marketing content goes here. Add engaging and informative details about your product or service.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
    
            {/* Image on the right with padding */}
            <div className="flex-shrink-0 ml-4">
              <img
                src={marketingImage}
                alt="Marketing Image"
                className="rounded-lg shadow-md w-1/2 h-auto"
              />
            </div>
          </div>
        </div>
      );
    };

export default Marketing;
