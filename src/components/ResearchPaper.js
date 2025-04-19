import React from "react";
import { researchPapers } from "../data";

export default function ResearchPapers() {
  return (
    <section id="research-papers" className="mb-20">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="flex flex-col w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Research Papers
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            A collection of my published research papers and contributions to the academic community.
          </p>
        </div>

        <div className="flex flex-wrap m-4 justify-center gap-4">
          {researchPapers.map((paper, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg flex flex-col items-start sm:w-5/12 w-full md:w-1/2 lg:w-1/3"
            >
              <h2 className="title-font font-medium text-white text-left mb-2">
                {paper.title}
              </h2>
              <p className="text-gray-500 italic text-left mb-2">
                {paper.authors}
              </p>
              <p className="text-gray-400 text-left mb-2">
                <b>Abstract:</b> {paper.abstract}
              </p>
              <p className="text-gray-500 italic text-left mb-2">
                <b>Published:</b> {paper.publicationDate}
              </p>
              <p className="text-gray-500 italic text-left mb-4">
                <b>Journal:</b> {paper.journal}
              </p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline"
              >
                Read Full Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}