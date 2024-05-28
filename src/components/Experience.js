// src/components/Testimonials

import React, {useState} from "react";
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon, UsersIcon } from "@heroicons/react/solid";
import { experiences } from "../data";
import { CSSTransition } from 'react-transition-group';
import './css/Experience.css';


export default function Experience() {
  const [openDropdown, setOpenDropdown] = useState(null);
  return (
    <section id="experience" className="mb-20 relative pt-24 -mt-24">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <UsersIcon className="w-10 inline-block mb-2 mx-auto"  />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Work experiences
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <span role="img" aria-label="laptop"> 🧑‍💼 </span> Current & Previous work experiences in terms of Software Development <span role="img" aria-label="laptop"> 🧑‍💼 </span>
          </p>
        </div>

        <div className="flex flex-wrap justify-start space-y-3">
          {experiences.map((experience, index) => (
            <div className="p-4 bg-gray-800 rounded-lg flex flex-col items-start sm:w-full">
              <div className="flex items-start w-full">
                <a href={experience.link} target="_blank" rel="noopener noreferrer" className="p-1">
                  <img
                    alt="content"
                    className="w-12 flex-shrink-0 object-cover object-center"
                    src={experience.img}
                  />
                </a>
                
                <div className="flex justify-between flex-grow ml-6 p-2"> 
                  <span className="title-font font-medium text-white mr-6 text-left">
                    {experience.title} 
                    <p className="text-gray-500 italic">{experience.company}</p>
                  </span>
                  <span className="title-font font-medium text-white text-right">
                    <h3 className="font-light text-white ">{experience.date}</h3>
                    <p className="text-gray-500 italic">{experience.location}</p>
                  </span>
                </div>
              </div>
              
          
              <div className="flex justify-center items-center w-full">
              <button onClick={() => setOpenDropdown(openDropdown === index ? null : index)}>
                {openDropdown === index ? (
                  <ChevronDoubleUpIcon className="h-5 w-5 transition-all duration-500 ease-in-out" />
                ) : (
                  <ChevronDoubleDownIcon className="h-5 w-5 transition-all duration-500 ease-in-out" />
                )}
              </button>
              </div>
              <CSSTransition
                in={openDropdown === index}
                timeout={300}
                classNames="dropdown"
                unmountOnExit
              >
                <div className="flex flex-col items-start text-left sm:w-full p-4">
                  <div className="font-medium">{experience.desc}</div>
                  {experience.points.map((point) => (
                    <li className="w-full">{point}</li>
                  ))}
                </div>
              </CSSTransition>
          
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}