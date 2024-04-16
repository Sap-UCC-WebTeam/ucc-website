// Cards.js

import React from 'react';
import EventsImage from '../../../../../assets/schools.png'; // Replace with the actual path to your image
import BoardImage from '../../../../../assets/students.png';
import IndustryImage from '../../../../../assets/industry.png';
import { Link } from 'react-router-dom';

function Cards() {
  return (


    
    <div className="cards-section mx-10 flex flex-col items-center justify-center text-center">





      <div className="card-text">
        <h1 className="text-2xl font-semibold text-black">What is SAP UCC?</h1>
        <p className="text-black font-medium">The SAP University Competence Center (UCC) is one of only five UCCs throughout the world. The center provides hosting services and technical support to universities that participate in SAP’s University Alliance.</p>
      </div>
      <div className="spacer my-4"></div>
      <div className="card-head">
        <h1 className="text-2xl text-black font-semibold">SAP University Competence Center (UCC)</h1>
      </div>


      <div className="flex p-8 " style ={{justifyContent: 'space-evenly'}}>

      <Link to="/prospectiveschools">
          <div className="max-w-sm mr-8 rounded overflow-hidden relative">
          <img src={EventsImage} alt="Events" className="w-full h-full rounded-3xl" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text-center">
            
              <div className="font-bold text-xl mb-2 text-white">Prospective Schools</div>
              
            </div>
          </div>
        </div>
        </Link>

        <Link to="/industry">
        <div className="max-w-sm mr-8 rounded overflow-hidden relative">
        <img src={BoardImage} alt="Board" className="w-full h-full rounded-2xl" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text-center">
 
              <div className="font-bold text-xl mb-2 text-white">Industry Partners</div>
              
            </div>
          </div>
        </div>
        </Link>

        <Link to="/students">
        <div className="max-w-sm mr-8 rounded overflow-hidden relative">
        <img src={IndustryImage} alt="Industry" className="w-full h-full rounded-3xl" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text-center">
            
              <div className="font-bold text-xl mb-2 text-white">Students</div>
              
            </div>
          </div>
        </div>
        </Link>

    </div>
      


      <div className="spacer my-4"></div>
      <div className="card-text">
        <h1 className="text-2xl text-black font-semibold">Experience the future of Enterprise Software:</h1>
        <p className="text-black font-medium">The SAP University Competence Center offers a gateway to cutting-edge hosting services and unparalleled technical support for universities in SAP's University Alliance.</p>
      </div>
      <div className="spacer my-4"></div>
    </div>
  );
}

export default Cards;
