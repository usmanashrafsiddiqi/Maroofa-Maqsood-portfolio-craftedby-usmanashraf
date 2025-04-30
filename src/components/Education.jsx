import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
      <div className="max-w-screen-md mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">Education</h2>
        <div className="space-y-6">
          {/* 10th - Girls Higher Secondary */}
          <div className="flex flex-col sm:flex-row bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:pr-4">
              <img
                src="/schoolpic.jpg"
                alt="Girls Higher Secondary School"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full sm:w-2/3 text-white">
              <h3 className="text-xl font-semibold">10th - Girls Higher Secondary, Sonwar, Srinagar</h3>
              <p className="mt-2 text-gray-300">Percentage: 78.6%</p>
            </div>
          </div>

          {/* 12th - Girls Higher Secondary */}
          <div className="flex flex-col sm:flex-row bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:pr-4">
              <img
                src="/schoolpic.jpg"
                alt="High School"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full sm:w-2/3 text-white">
              <h3 className="text-xl font-semibold">12th - Girls Higher Secondary, Sonwar, Srinagar</h3>
              <p className="mt-2 text-gray-300">Percentage: 79.8%</p>
            </div>
          </div>

          {/* Graduation - Amarsing College */}
          <div className="flex flex-col sm:flex-row bg-gray-800 p-5 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:pr-4">
              <img
                src="/colllege.jpg"
                alt="Amarsing College"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full sm:w-2/3 text-white">
              <h3 className="text-xl font-semibold">Graduation - Amarsing College, Gogji Bagh, Srinagar</h3>
              <p className="mt-2 text-gray-300">Bachelor's in Humanities | CGPA: 7.71</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
