import React from "react";

const Industry = () => {
  return (
    <div>
      <div className="mt-8">

      <div className="bg-white max-w-5xl mx-auto text-gray-900 p-10">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About SAP University Alliances</h2>
          <p className="mb-4">
            The SAP University Alliances is a global community for students, universities, schools and educational partners who are passionate about innovation and technology.  Join forces with us to educate and innovate with the next generation! 
            <a href="https://www.sap.com/about/company/innovation/next-gen-innovation-platform/educational-industry-partners.html" className="text-blue-600 hover:underline ml-2">Learn more</a>
          </p>
          <p>
            The North American and Latin American University Alliances full-member list is available on our website. All schools shown are hosted by either the Chico SAP UCC or the Milwaukee UCC.
            <a href="https://sap.cob.csuchico.edu/#/about/institutions" className="text-blue-600 hover:underline ml-2">Our Customers</a>. 
            <p>View a list of our <a href="https://www.sap.com/documents/2020/07/d23687aa-a67d-0010-87a3-c30de2ffd8ff.html" className="text-blue-600 hover:underline" >Global Institutions</a>.</p>
          </p>
          {/* <p>SAP University Alliance is a global organization, for the list of <a href="https://www.sap.com/documents/2020/07/d23687aa-a67d-0010-87a3-c30de2ffd8ff.html" className="text-blue-600 hover:underline ml-2" >all of our global members</a>.</p> */}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sponsorship Opportunity</h2>
          <p className="mb-4">
            If there are no full-member schools in your area, consider sponsoring one! Contact <a href="mailto:sapucc.admin@csuchico.edu" className="text-blue-600 hover:underline">sapucc.admin@csuchico.edu</a> for guidance on how to get started.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">ASUG - Partner with Us for Mutual Success</h2>
          <p className="mb-4">
            ASUG members make up the world’s largest network of SAP customers, partners, and professionals. Together, we drive organizations, teams, and careers forward by expanding what’s possible with SAP solutions.
            <a href="https://www.asug.com/" className="text-blue-600 hover:underline ml-2">Learn more</a>
          </p>
          <ul className="list-disc list-inside">
            <li className="ml-5">An independent community representing more than 130,000 professionals from thousands of member organizations (75% of SAP installed base in North America are members).</li>
            <li className="ml-5">Members connect through 36 regional / local chapters and 13 alliances groups (focusing on specific industries, lines of business or technology areas).</li>
            <li className="ml-5">ASUG hosts events, webinars, and conferences, and provides publications, research reports, and online forums to help members stay updated with the latest trends and developments in the SAP ecosystem.</li>
            <li className="ml-5">It provides a platform for networking, education, and collaboration among SAP customers, partners, and experts.</li>
          </ul>
          <p className="mt-4">
            Join ASUG #CampusConnect at no cost. #CampusConnect brings together local chapters and University Alliances member students and faculty; inspiring the next generation of SAP professionals. Utilize ASUG research to get the pulse of SAP customers across the US and Canada. Connect with local companies in need of SAP talents – and interested in your University Alliances program!
            <a href="mailto:sapucc.admin@csuchico.edu" className="text-blue-600 hover:underline ml-2">Contact sapucc.admin@csuchico.edu</a> for guidance on how to get started.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Industry;