

import React, { useState } from "react";

const ProspectiveSchools = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    university: "",
    type: "for-profit",
    sapCertification: "no"
  });

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log(formData);
    // Reset form data
    setFormData({
      name: "",
      phone: "",
      email: "",
      university: "",
      type: "for-profit",
      sapCertification: "no"
    });
    // Close the modal after form submission
    setShowQuoteForm(false);
  };

  return (
    <div>
      <div className="bg-white  min-h-screen mr-10 ml-10 mt-10 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-lg font-medium text-center text-gray-900 mb-8">Thank you for your interest in becoming a valued member of our community. We're excited to offer you two distinct membership options tailored to enrich your academic journey and broaden your SAP expertise. Please find the details outlined below and explore more on our SAP University Alliances Page.</h1>
        
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" onClick={toggleAccordion1} aria-expanded={isOpen1} aria-controls="accordion-collapse-body-1">
              <span>Associate Membership (Free of Charge): </span>
              <svg data-accordion-icon className={`w-3 h-3 transform ${isOpen1 ? "rotate-0" : "rotate-180"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-1" className={`border border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${isOpen1 ? "" : "hidden"}`} aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                For Schools and Universities that want to embark on a journey of discovery with unrestricted access to our comprehensive curriculum, invitations to exclusive events and trainings, and a wealth of resources including demos, webinars, and recordings. Join our vibrant community, participate in engaging events and competitions, and leverage diverse learning platforms to enhance your SAP skills.</p>

              <ul className="text-gray-500 dark:text-gray-400">
                  <li>•	SAP University Alliances curricula</li>
                  <li>•	Demos, Webinars, and recordings</li> 
                  <li>•	Community membership</li>
                  <li>•	Events and competitions</li>
                  <li>•	Learning platforms</li>
                  
              </ul>

            </div>
          </div>

          <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-2">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" onClick={toggleAccordion2} aria-expanded={isOpen2} aria-controls="accordion-collapse-body-2">
              <span>Full Membership: </span>
              <svg data-accordion-icon className={`w-3 h-3 transform ${isOpen2 ? "rotate-0" : "rotate-180"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-2" className={`border border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${isOpen2 ? "" : "hidden"}`} aria-labelledby="accordion-collapse-heading-2">
            <div className="p-5">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Elevate your academic experience with all the perks of an Associate Membership, supplemented by extensive access to a variety of SAP software tailored for academic teaching. This membership includes the unique opportunity for:</p>
              <div>
                <ul className="text-gray-500 dark:text-gray-400">

                <li>•	A wide range of SAP software for academic teaching – free of charge</li>
                <li>•	Low cost peer hosting of SAP software and pre-configured classroom teaching systems (You can read more about this on our SAP University Alliances Page.)</li>
                <li>•	Support through University Competence Centers and Academic Competence Centers</li>
                <li>•	Invitations to events where you can expand your SAP knowledge, build relationships with other educators, and connect with SAP experts and industry partners</li>

                  {/* <li>Comprehensive access to SAP University Alliances curricula, alongside valuable teaching resources such as case studies and instructor materials across numerous functional areas.</li>
                  <li>Cost-effective peer hosting of SAP software, complete with pre-configured systems designed for classroom education. Detailed information available on the SAP University Alliances Page.</li> 
                  <li>A broad array of SAP software for academic purposes, offered at no additional charge.</li>
                  <li>Dedicated support through our University Competence Center</li>
                  <li>Receive exclusive invitations to events aimed at deepening your SAP knowledge, networking with fellow educators, and connecting with SAP experts and industry leaders.</li>
                  <li>Opportunities to attend special events, fostering knowledge expansion, educator networking, and connections with SAP professionals and industry allies.</li>
                  <li>Simulate learning by doing with ERPsim simulation games 
                </li>*/}
              </ul>
              <div className="my-8">
                <button className="text-blue-500 focus:outline-none" onClick={() => setShowQuoteForm(true)}>
                    <span className="block text-green-500 mr-2 bg-green-100 p-2 px-4 rounded-full border">Request Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div style={{ marginBottom: '20px' }}></div>

        <h1 className="text-lg font-medium text-center text-gray-800 mb-8"><b>Please Note:</b> Our program is specifically designed to complement your degree programs, enriching the academic framework, and is not applicable to professional learning courses.</h1>

        <div className="text-gray-800 bg-gray-100 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">ASUG - Americas’ SAP Users’ Group</h2>
        <p>
            For additional networking, consider joining{" "}
            <span className="text-blue-600 font-semibold">
            ASUG – Americas’ SAP Users’ Group
            </span>{" "}
            <a
            href="https://www.asug.com/about"
            className="text-blue-600 hover:underline"
            >
            https://www.asug.com/about
            </a>{" "}
            <a
            href="https://www.linkedin.com/company/asug-americas-sap-users-group"
            className="text-blue-600 hover:underline"
            >
            https://www.linkedin.com/company/asug-americas-sap-users-group
            </a>
        </p>
        <p>
            <span className="font-semibold">
            ASUG members make up the world’s largest network of SAP customers,
            partners, and professionals.
            </span>{" "}
            Together, we drive organizations, teams, and careers forward by
            expanding what’s possible with SAP solutions.
        </p>
        <p>
            <span className="font-semibold">
            ASUG Member Pathfinder will guide you and your organization to make
            the most of your SAP investment through curated modules filterable by
            topics and user personas.
            </span>
        </p>
        
        </div>
        {/* Add accordion 2 here */}

        {/* Request Quote Form Modal */}
            {showQuoteForm && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative">
                    {/* Close button */}
                    <button
                    type="button"
                    className="absolute top-0 right-0 m-3 text-gray-600 hover:text-gray-800 focus:outline-none"
                    onClick={() => setShowQuoteForm(false)}
                    >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    </button>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                            Request Quote
                        </h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className="mt-1 p-1 border border-gray-300 rounded-md text-gray-700"
                            />
                            </div>
                            <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="mt-1 p-1 border border-gray-300 rounded-md text-gray-700"
                            />
                            </div>
                            <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="mt-1 p-1 border border-gray-300 rounded-md text-gray-700"
                            />
                            </div>
                            <div className="mb-4">
                            <label htmlFor="university" className="block text-sm font-medium text-gray-700">
                                University Name
                            </label>
                            <input
                                type="text"
                                name="university"
                                id="university"
                                autoComplete="organization"
                                required
                                value={formData.university}
                                onChange={handleInputChange}
                                className="mt-1 p-1 border border-gray-300 rounded-md text-gray-700"
                            />
                            </div>
                            <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Type of University
                            </label>
                            <select
                                name="type"
                                id="type"
                                className="mt-1 p-1 border border-gray-300 rounded-md text-gray-700"
                                value={formData.type}
                                onChange={handleInputChange}
                            >
                                <option value="for-profit">For-Profit</option>
                                <option value="non-profit">Non-Profit</option>
                            </select>
                            </div>
                            <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Are you offering any SAP certification?
                            </label>
                            <select
                                name="sapCertification"
                                id="sapCertification"
                                className="mt-1 p-1 border border-gray-300 rounded-md text-gray-700"
                                value={formData.sapCertification}
                                onChange={handleInputChange}
                            >
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            </div>
                            <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Submit
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            )}


      </div>
    </div>
  );
};

export default ProspectiveSchools;
