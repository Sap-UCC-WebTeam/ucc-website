import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Content on top */}
      <div className="bg-black text-white p-8 text-center bottom-0 w-full">
        <p className="text-xl font-bold mb-2">
          SAP University Alliances Academic Conference -
        </p>
        <p className="text-base">
          The annual Academic Conference was held in July 2023 and included an informative faculty coordinator meeting. You may find it helpful to review this information that details the role of the faculty coordinator, in the link found here: 
          <a href="link_to_recording">Faculty Coordinator meeting: 2023 July Faculty Coordinator recording</a>
        </p>
      </div>

      {/* Spacer */}
      <div className=" bg-black h-8"></div>

      {/* Contact Us row */}
      <div className="bg-black text-white p-8 flex justify-between items-center  bottom-0 w-full">
        <div className="flex items-center">
          <div className="text-left mr-[30rem]">
            <p className="text-base">Contact Us:</p>
            <p className="text-sm">
              SAP Chico UCC,<br/>
              400 West 1st Street, <br/>Chico, CA 95926
            </p>
          </div>

          <div className="text-center">
            <p className="text-sm">
              sapucc.admin@csuchico.edu
              <br />
              +1 (530) 987 654
            </p>
          </div>
        </div>

        <div className="text-right">
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-facebook mr-2"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-twitter mr-2"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
