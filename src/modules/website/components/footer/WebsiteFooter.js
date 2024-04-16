// Footer.js

import React from "react";

const WebsiteFooter = () => {
  return (
    <footer className="bg-gray-800 py-4 px-6 mt-10">
            <div className="bg-gray-800 text-white p-8 text-center bottom-0 w-full">
        <p className="text-xl font-bold mb-2">
          SAP University Alliances Academic Conference -
        </p>
        <p className="text-base">
          The annual Academic Conference was held in July 2023 and included an informative faculty coordinator meeting. You may find it helpful to review this information that details the role of the faculty coordinator, in the link found here: 
          <a href="link_to_recording">Faculty Coordinator meeting: 2023 July Faculty Coordinator recording</a>
        </p>
      </div>
      <div>
      <div  className="container mx-auto flex justify-between items-center">
          <div className="text-left mr-[30rem] ">
            <p className="text-base text-white">Contact Us:</p>
            <p className="text-sm text-white">
              {/* SAP Chico UCC, 400 West 1st Street, <br/>Chico, CA 95926<br/> */}
            </p>
          </div>
         

          <div className="text-center">
            <p className="text-sm text-white">
            
            </p>
          </div>
         
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section */}
        
        <div>
        <p className="text-sm text-white">
              sapucc.admin@csuchico.edu<br/>
              sapnextgen@sap.com<br/>
              ucc@uwm.edu<br/>
            

              </p>
          <p className="text-white">© 2024 UCC</p>
          <p className="text-gray-400 text-sm">All rights reserved</p>
        </div>
        {/* Right section */}
        <div>
         
          <a href="#" className="text-white mx-2 hover:text-gray-400">
            Terms of Service
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="text-white mx-2 hover:text-gray-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
