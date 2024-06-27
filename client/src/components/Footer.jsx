import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-rose-500 shadow-md text-white py-8">
      <div className="container mx-auto  text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/rishav.shah.148" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <FaFacebookF />
          </a>
          <a href="https://x.com/Risu552" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaTwitter/>
          </a>
          <a href="https://www.instagram.com/rishav19p_/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram/>
          </a>
          <a href="https://www.linkedin.com/in/rishav97/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedin   />
          </a>
          <a href="mailto:official.rishavs@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaRegEnvelope    />
          </a>
          
          {/* <a href="https://x.com/Risu552" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <i className="fab fa-envelope"></i>
          </a> */}
        </div>
        
        <div className="mb-1">
          <p>&copy; 2024 NayaNivas. All Rights Reserved.</p>
        </div>
        {/* <div>
          <a href="#home" className="text-white hover:text-gray-400">
          <Link to='/'><a href="#home" className="mx-2 text-white hover:text-gray-400"><i className="fas fa-angle-up text-2xl"> Return To Home</i></a></Link>
            
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
