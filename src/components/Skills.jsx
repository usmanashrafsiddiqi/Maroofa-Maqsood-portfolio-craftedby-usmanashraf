import React from "react";
import { FaCode, FaTools, FaRobot, FaHandshake } from "react-icons/fa"; // Example icons from React Icons

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-[#f0f4f8] to-[#d9e7f0]">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-16">Skills & Expertise</h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          
          {/* Skill 1: Technical Skills */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out text-center">
            <div className="text-4xl text-blue-500 mb-4">
              <FaCode />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Technical Skills</h3>
            <div className="mt-4">
              <div className="text-left mb-4">
                <p className="font-semibold text-gray-700">Microsoft Office</p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-700">PowerPoint Specialist</p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill 2: Tools */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out text-center">
            <div className="text-4xl text-purple-500 mb-4">
              <FaTools />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Tools</h3>
            <div className="mt-4">
              <div className="text-left mb-4">
                <p className="font-semibold text-gray-700">Canva</p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-700">InShot</p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill 3: AI & Content Marketing */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out text-center">
            <div className="text-4xl text-green-500 mb-4">
              <FaRobot />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">AI & Content Marketing</h3>
            <div className="mt-4">
              <div className="text-left mb-4">
                <p className="font-semibold text-gray-700">AI Tools for Content & Marketing</p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-700">Prompt Engineering (Basic)</p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skill 4: Soft Skills */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out text-center">
            <div className="text-4xl text-yellow-500 mb-4">
              <FaHandshake />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Soft Skills</h3>
            <div className="mt-4">
              <div className="text-left mb-4">
                <p className="font-semibold text-gray-700">Excellent Written & Verbal Communication</p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-700">Time Management</p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
