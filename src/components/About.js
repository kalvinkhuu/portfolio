import React from "react";
import { useSpring, animated, config } from '@react-spring/web';

export default function About() {
  const textProps = useSpring({
    from: { transform: 'translateY(200px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: config.gentle
  });

  const imageProps = useSpring({
    from: { transform: 'translateY(200px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: config.gentle,
    delay: 500 // Adjust the delay as needed
  });
  return (
      <section id="about" className="mb-20">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <animated.div style={textProps} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Kalvin! <span role="img" aria-label="happy waving"> &#129303; </span>  
            </h1>
            <p className="mb-8 leading-relaxed">
            Proficient, bilingual (English / French) junior software engineer with more than two years experience in developing, and implementing software
            applications & tools. Located in Montreal, QC, Canada, but open to relocate!
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#experience"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Experiences
              </a>
            </div>
          </animated.div>
          <animated.div style={imageProps} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./IMG_6339.jpg"
            />
          </animated.div>
        </div>
      </section>
    );
}