import { AcademicCapIcon } from "@heroicons/react/solid";
import { educations } from "../data";
import React from "react";

export default function Education() {
  const [isHovered, setIsHovered] = React.useState(null);

  return (
    <section id="educations" className="mb-20">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-10">
          <AcademicCapIcon className="w-10 inline-block mb-2 mx-auto" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Educations
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            <span role="img" aria-label="writing"> &#9997; </span> My educational journey to becoming a software engineer <span role="img" aria-label="writing"> &#9997; </span>
          </p>
        </div>
        
        <div className="flex flex-wrap m-4 justify-center gap-4">
          {educations.map((education, index) => (
            <div 
              key={index}
              className="p-4 bg-gray-800 rounded-lg flex items-start sm:w-5/12 w-full md:w-1/2 lg:w-1/3"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <img
                alt="content"
                className="w-12 flex-shrink-0 object-cover object-center"
                src={education.img}
              />

              {isHovered !== index && (
                <div className="flex justify-between flex-grow ml-6 p-2"> 
                  <span className="title-font font-medium text-white mr-6 text-left">
                    {education.degree} 
                    <p className="text-gray-500 italic">{education.university}</p>
                  </span>
                  <span className="title-font font-medium text-white text-right">
                    <h3 className="font-light text-white ">{education.date}</h3>
                    <p className="text-gray-500 italic">{education.location}</p>
                  </span>
                </div>
              )}
              {isHovered === index && (
                <div className="flex-grow ml-6 p-2 font-light">
                  <b>Courses: </b> {education.courses}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}