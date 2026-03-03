import React from "react";
import { easeOut, motion } from "framer-motion";
import { assets, workData } from "../assets/assets";
import { FaDribbble, FaEnvelope, FaGithub, FaLinkedin, FaMapMarker, FaPhone, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="contact"
      className="py-20  bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="font-bold text-center text-3xl mb-4 ">
          Get In <span className="text-purple">Touch</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <form className="space-y-6 ">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  {" "}
                  Email Address
                </label>
                <input
                  type="emial"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  {" "}
                  Your Message
                </label>
                <input
                  type="textarea"
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium  hover:bg-purple/20 transition duration-purple-300 cursor-pointer"
              >
                {" "}
                send
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarker />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Islamabad Pakistan</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">aimanmansoor2018@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+92 311 0532750</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300">
                    <FaGithub/>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300">
                    <FaLinkedin/>
                </a> <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300">
                    <FaTwitter/>
                </a> <a href="#" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300">
                    <FaDribbble/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
