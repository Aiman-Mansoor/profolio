import React from "react";
import { easeInOut, motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        {/* {heading} */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About
          <span className="text-purple">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>
        {/* {image plus my joyrney} */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md-w-1/2 rounded-2xl overflow-hidden">
            {/* Replace <motion.img src={assets.profileImg} .../> with this */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <svg
                width="280"
                height="280"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="60" cy="60" r="60" fill="#26215C" />
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  fill="none"
                  stroke="#3C3489"
                  strokeWidth="1"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="44"
                  fill="none"
                  stroke="#534AB7"
                  strokeWidth="1.5"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="35"
                  fill="none"
                  stroke="#7F77DD"
                  strokeWidth="1"
                />
                <circle cx="60" cy="60" r="25" fill="#534AB7" />
                <circle cx="60" cy="60" r="14" fill="#7F77DD" />
                <circle cx="60" cy="60" r="6" fill="#EEEDFE" />
                <line
                  x1="60"
                  y1="8"
                  x2="60"
                  y2="16"
                  stroke="#AFA9EC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="60"
                  y1="104"
                  x2="60"
                  y2="112"
                  stroke="#AFA9EC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="8"
                  y1="60"
                  x2="16"
                  y2="60"
                  stroke="#AFA9EC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="104"
                  y1="60"
                  x2="112"
                  y2="60"
                  stroke="#AFA9EC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="26"
                  y1="26"
                  x2="32"
                  y2="32"
                  stroke="#7F77DD"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <line
                  x1="94"
                  y1="26"
                  x2="88"
                  y2="32"
                  stroke="#7F77DD"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <line
                  x1="26"
                  y1="94"
                  x2="32"
                  y2="88"
                  stroke="#7F77DD"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <line
                  x1="94"
                  y1="94"
                  x2="88"
                  y2="88"
                  stroke="#7F77DD"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>
          {/* {text conte} */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2 "
          >
            <div className="rounded-2xl p-8 ">
              <h3 className="text-2xl font-semibold mb-6"> My Journey</h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate full-stack developer with over 5 years of
                experience creating digital solutions for businesses around the
                world. My journey started with basic HTML/CSS websites and has
                evolved into building complex web applications with modern
                frameworks.
              </p>
              <p className="text-gray-300 mb-12">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through tech blogs and tutorials. I believe in continuous
                learning and pushing the boundaries of what's possible on the
                web.
              </p>
              {/* {cards} */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
