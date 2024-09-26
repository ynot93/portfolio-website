import React from 'react';

function Projects() {
  return (
    <section className="py-20 bg-gray-800">
      <h2 className="text-3xl font-semibold text-center">Projects</h2>
      <div className="flex justify-center mt-10">
        <div className="max-w-md mx-4">
          <h3 className="text-2xl font-semibold">Project 1: AI Robot</h3>
          <video controls className="mt-4 rounded">
            <source src="project1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="max-w-md mx-4">
          <h3 className="text-2xl font-semibold">Project 2: Web Scraper</h3>
          <video controls className="mt-4 rounded">
            <source src="project2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Projects;
