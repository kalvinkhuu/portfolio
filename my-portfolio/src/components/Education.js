// src/components/Testimonials

import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { educations } from "../data";

export default function Education() {
  return (
    <section id="educations">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Education
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          <span role="img" aria-label="writing"> &#9997; </span> My educational journey to becoming a software engineer <span role="img" aria-label="writing"> &#9997; </span>
        </p>
        <div className="flex flex-wrap m-4 justify-center">
        {educations.map((education) => (
          <div className="p-4 bg-gray-800 rounded-lg flex items-start justify-end">
{/* 
            <img
              alt="content"
              className="object-cover object-center w-12 mb-6 rounded mr-4"
              src={education.img}
            /> */}
            <div className="ml-6">
              <h2 className="title-font font-medium text-white mb-2">
                {education.title} <p className="text-gray-500">{education.location}</p>
              </h2>
              <h3 className="text-gray-500 mb-2">{education.date}</h3>
              <p className="leading-relaxed mb-2"><b>Relevant Courses: </b>{education.courses}</p>
              
            </div>
            {/* <div className="ml-6">
              <img
                alt="content"
                className="object-cover object-center w-12 mb-6 rounded mr-4"
                src={education.img}
              />
            </div> */}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}