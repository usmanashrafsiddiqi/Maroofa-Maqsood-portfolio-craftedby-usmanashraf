import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20 px-6" id="about">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-1">
          <img
            src="/maroofa.jpg"
            alt="About Maroofa"
            className="rounded-2xl shadow-xl w-[300px] h-[300px] object-cover mx-auto lg:mx-0"
          />
        </div>

        {/* About Text */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm Maroofa Maqsood, a dedicated Social Media Manager and Content Creator with a flair for aesthetics and audience engagement. My work is rooted in strategy and storytelling, tailored to amplify brand voices across digital platforms. Whether you're a startup or an established brand, I bring creativity, consistency, and results.
          </p>
        </div>
      </div>

      {/* Service/Highlight Boxes */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Timely Delivery",
          "Creative Strategy",
          "Audience Engagement",
          "Consistent Branding",
          "Client Collaboration",
          "Result-Driven Content"
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-900 text-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <p className="text-lg font-medium text-center">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
