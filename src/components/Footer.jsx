import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-600 to-pink-500 text-white py-12">



      <div className="max-w-screen-lg mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#About" className="hover:text-pink-300 transition duration-300">About Me</a></li>
              <li><a href="#Projects" className="hover:text-pink-300 transition duration-300">Projects</a></li>
              <li><a href="#Contact" className="hover:text-pink-300 transition duration-300">Contact</a></li>
              <li><a href="#Blog" className="hover:text-pink-300 transition duration-300">Blog</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition duration-300">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="mb-2">Email: <span className="font-medium">maroofa.contact@gmail.com</span></p>
            <p className="mb-2">Phone: <span className="font-medium">+91 6006773643</span></p>
            <p>Location: <span className="font-medium">Srinagar, India</span></p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} — Maroofa Maqsood. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
