import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import SmoothScroll from "smooth-scroll";
import TawkToChat from './components/TawkToChat';



export default function App() {

  React.useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
    });
  }, []);

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About className="mb-100" />
      <Education className="mb-20" />
      <Experience className="mb-20" />
      <Projects className="mb-20" />
      <Skills className="mb-20" />
      <Contact />
      <TawkToChat />
    </main>
  );
}
