import React from "react";
import { easeInOut, motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradientt-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      {/*left side content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className='="md:w-1/2 mb-10 md:mb-0'>
          <h1 className="text-4xl md-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple">Aiman Mansoor</span>
          </h1>
          <h2 className="text-2xl md-4xl font-semibold mb-6 typewriter">
            Full stack Developer
          </h2>
          <p className="text-lg text-gray-300 MB-8">
            I create stunning web experince with modren technologies and
            innovative design.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-purple-300"
            >
              Contact me
            </a>
          </div>
        </div>
        {/*right side content image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md-w-80 md-h-80">
            <div className="absolute insert-0 rounded-full bg-gradient-to-r from-purple to-pink  opacity-70">
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
          </div>
        </div>
      </div>

      {/* <Hero /> */}
    </motion.div>
  );
};

export default Hero;
