// src/components/Contact.js
import { MailIcon, PhoneIcon, ChatAlt2Icon} from "@heroicons/react/outline";
import './css/Contact.css';


import React from "react";

export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center items-center h-screen">
        <div className="lg:w-1/3 md:w-1/2 p-5">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me  
          </h2>
          <p className="leading-relaxed mb-4">If you have any questions, feel free to reach out to me through email or with the live chat in the corner of this website!</p>
          <div className="w-full">
            <div className="mb-4">
              <a href="mailto:kalvin.khuu@gmail.com" className="w-full">
                <div className="bg-gray-800 hover:bg-gray-700 rounded flex p-4 h-full items-center transition duration-150 ease-in-out click-effect">
                  <MailIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                  <span className="title-font font-medium text-white">
                    kalvin.khuu@gmail.com
                  </span>
                </div>
              </a>
            </div>
            <div className="mb-4">
              <a href="tel:514-992-7442" className="w-full mb-4">
                <div className="bg-gray-800 hover:bg-gray-700 rounded flex p-4 h-full items-center transition duration-150 ease-in-out click-effect">
                  <PhoneIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                  <span className="title-font font-medium text-white">
                    (514) 992-7442
                  </span>
                </div>
              </a>
            </div>
            
            <div>
              <a className="w-full">
                <div className="bg-gray-800 hover:bg-gray-700 rounded flex p-4 h-full items-center transition duration-150 ease-in-out click-effect">
                  <ChatAlt2Icon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                  <span className="title-font font-medium text-white">
                    At the right corner of this website!
                  </span>
                </div>
              </a>
            </div>
            
            
          </div>
        
        
        </div>
        
        
        
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-3/4">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.9)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Montreal&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=15"
          />
          {/* <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Montreal, QC, Canada <br />
                H3W 2N1
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed" href="mailto:kalvin.khuu@gmail.com">
                kalvin.khuu@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">514-992-7442</p>
            </div>
          </div> */}

        </div>
        
        
      </div>
    </section>
  );
}