import React from "react";
import { FaPenNib, FaInstagram, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: <FaInstagram size={30} className="text-pink-400" />,
    title: "Social Media Management",
    description:
      "Curating content, scheduling posts, engaging with followers, and ensuring your brand voice is consistent across platforms.",
  },
  {
    icon: <FaPenNib size={30} className="text-pink-400" />,
    title: "Content Creation",
    description:
      "Designing eye-catching graphics, writing compelling captions, and producing high-quality videos tailored to your audience.",
  },
  {
    icon: <FaChartLine size={30} className="text-pink-400" />,
    title: "Strategy & Analytics",
    description:
      "Planning content strategies backed by analytics to increase engagement, reach, and ROI for your business.",
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:bg-gray-700 transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
