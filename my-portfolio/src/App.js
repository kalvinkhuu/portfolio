import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Education from "./components/Education";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
