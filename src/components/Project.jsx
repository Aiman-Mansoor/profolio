import React from "react";
import { easeOut, motion } from "framer-motion";
import { projects, assets } from "../assets/assets";
import { div } from "framer-motion/client";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa";

const Project = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="projects"
      className="py-20  bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* <div>
        </div> */}
        <h2 className="font-bold text-center text-3xl mb-4 ">
          My <span className="text-purple"> Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          A selection of my recent work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 max-w-6xl mx-auto" >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project}/>
            // <div key={project} className="rounded-2xl bg-dark-300">
            //   <div>
            //     <img className="w-100 h-100" src={project.image} alt="" />
            //   </div>
            //   <h3 className="text-xl font-semibold">{project.title}</h3>
            //   <p className="text-gray-400 mb-4">{project.description}</p>
            //   <div className="mb-4">
            //     {project.tech.map((tech) => (
            //       <span
            //         key={tech}
            //         className="text-sm px-3 rounded-full bg-dark-400 py-1"
            //       >
            //         {tech}
            //       </span>
            //     ))}
            //   </div>
            //   <div className="flex space-x-4">
            //     <a
            //       href="#projects"
            //       className="px-15 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            //     >
            //       View Demo
            //     </a>
            //     <a
            //       href="#contact"
            //       className="px-15 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-purple-300"
            //     >
            //       code{" "}
            //     </a>
            //   </div>
            // </div>
          ))}
        </div>
        <div className="text-center mt-12"> 
          <a href="#" className="inline-flex items-center px-6 py-3 border border-purple rounded-lg hover:bg-purple/20 transition duration-300">
            <span>View More Projects</span>
            <FaArrowRight className="ml-2"/>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
