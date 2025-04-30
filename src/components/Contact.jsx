import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
      <div className="max-w-screen-lg mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12">
          Get In Touch
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
            <h3 className="text-3xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information Card */}
          <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 text-white">
            <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
            <p className="text-lg mb-4">
              <strong>Email:</strong>{" "}
              <span className="text-pink-400">marufabhat4@gmail.com</span>
            </p>
            <p className="text-lg mb-4">
              <strong>Phone:</strong>{" "}
              <span className="text-pink-400">+91 6006773643</span>
            </p>
            <p className="text-lg mb-4">
              <strong>Location:</strong>{" "}
              <span className="text-pink-400">Dubai, UAE</span>
            </p>
            <div className="text-lg mt-8">
              <p className="font-semibold">Follow me on social media:</p>
              <div className="flex flex-col gap-2 mt-4">
                <a href="#" className="text-pink-400 hover:text-pink-500">
                  Facebook
                </a>
                <a href="#" className="text-pink-400 hover:text-pink-500">
                  Instagram
                </a>
                <a href="#" className="text-pink-400 hover:text-pink-500">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
