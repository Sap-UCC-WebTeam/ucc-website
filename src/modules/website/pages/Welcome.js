import React from "react";
import './Welcome.css';
import cardImage1 from '../../../assets/card1.png';
import cardImage2 from '../../../assets/card2.png';
import cardImage3 from '../../../assets/card3.png';

const Welcome = () => {
  const Card = ({ imageUrl, title, description }) => (
    <div className="card" style={{ width: '300px' , height: '100%'}}>
      <div className="card-top">
        <img src={imageUrl} alt="Card" />
      </div>
      <div className="card-bottom">
        <div className="description-container">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="welcome-container">
      <h1>Welcome to myUCC</h1>

      <div className="card-container">
        <Card imageUrl={cardImage1} 
        title="Session Spring - 2024" 
        description="Requests open: Dec 1st 2023 Clients available: Dec 1st 2023 Session ends: Jun 30th 2024" />
        <Card imageUrl={cardImage2} 
        title="Help and Support" 
        description="Spring: December 1st to June 30th Summer: May 1st to August 31st Fall: August 1st to December 31st" />
        <Card imageUrl={cardImage3} 
        title="Faculty Coordinator" 
        description="The center provides hosting services and technical support to universities that participate in SAP’s University Alliance." />
      </div>
      <div className="flex p-8" style ={{justifyContent: 'space-evenly'}}>
      {/* Button 1 */}
      <button className="px-4 py-4 rounded mr-4 hover:bg-blue-500 hover:text-white" style={{ backgroundColor: '#41C0E8', color: '#FFFFFF',  fontWeight:'500'}}>
        Product Requests
      </button>

      {/* Button 2 */}
      <button className="px-4 py-2 rounded mr-4 hover:bg-blue-500 hover:text-white" style={{ backgroundColor: '#FFFFFF', color: '#41C0E8', fontWeight:'500' }}>
        Help Tickets
      </button>

      {/* Button 3 */}
      <button className="px-4 py-2 rounded mr-4 hover:bg-blue-500 hover:text-white" style={{ backgroundColor: '#41C0E8', color: '#FFFFFF',  fontWeight:'500' }}>
        More Information
      </button>

      <button className="px-4 py-2 rounded mr-4 hover:bg-blue-500 hover:text-white" style={{ backgroundColor: '#FFFFFF', color: '#41C0E8',  fontWeight:'500' }}>
      Training page
      </button>

      <button className="px-4 py-2 rounded mr-4 hover:bg-blue-500 hover:text-white" style={{ backgroundColor: '#41C0E8', color: '#FFFFFF', fontWeight:'500' }}>
      Troubleshooting
      </button>
    </div>

    <h2 class="mb-4 text-black font-bold lg text-2xl">NEWS</h2>
    <div class="p-4 bg-white border  rounded-lg shadow-md">
    <p class="mb-4 text-black"><span class="font-bold">UCC and UA News</span></p>
    <p class="mb-4 text-black">We are in the process of designing a new <span>UCC website</span> to offer you a more streamlined and engaging user experience. As part of the design process, we'd appreciate a few minutes of your time to provide feedback on your current experience with our website and what you'd like to see improved or added to the future site. Your input is greatly appreciated!</p>
    <p class="text-black"><span class="font-bold">Please take the survey here:</span> <a href="https://forms.office.com/r/ZB04W55RGj" class="underline">Survey Link</a></p>
    </div>



    </div>
  );
};

export default Welcome;
