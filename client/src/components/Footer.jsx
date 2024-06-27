import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-rose-600 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/rishav.shah.148" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/Risu552" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/rishav19p_/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/rishav97/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
          
          {/* <a href="https://x.com/Risu552" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
          <i className="fab fa-envelope"></i>
          </a> */}
        </div>
        
        <div className="mb-4">
          <p>&copy; 2024 NayaNivas. All Rights Reserved.</p>
        </div>
        <div>
          <a href="#home" className="text-white hover:text-gray-400">
          <Link to='/'><a href="#home" className="mx-2 text-white hover:text-gray-400"><i className="fas fa-angle-up text-2xl"> Return To Home</i></a></Link>
            
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
