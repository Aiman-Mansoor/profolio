import React from "react";

const ProjectCard = ({ title, description, image, tech }) => {
  return (
    <div className="rounded-2xl bg-dark-300 overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
      <img className="w-full h-60 object-cover" src={image} alt={title} />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className=" flex flex-wrap gap-2 mb-4">
          {tech.map((tech, index) => (
            <span
              key={tech}
              className="px-3 py-1 bg-dark-400  rounded-full text-sm   "
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a
            href="#"
            className=" flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium  hover:bg-purple-700 transition duration-300"
          >
            View Demo
          </a>
          <a
            href="#contact"
            //   className="px-15 py-3  rounded-lg font-medium hover:bg-purple/20 transition duration-purple-300"
            className=" flex-1 text-center  px-4 py-2 border border-purple  font-medium    font-medium rounded-lg  hover:bg-purple/20 transition duration-300"
          >
            code{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
