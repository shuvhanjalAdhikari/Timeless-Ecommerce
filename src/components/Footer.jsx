import React from "react";
import logo from "../assets/logo.png"; // Update the path as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          <div>
            <h4 className="text-lg font-bold mb-4">CONTACT</h4>
            <p className="text-sm">
              329 Queensberry Street, North Melbourne <br />
              VIC 3051, Australia. <br />
              123 456 7890 <br />
  
            </p>
          </div>
         
          <div>
            <h4 className="text-lg font-bold mb-4">COMPANY</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Blog</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              <li><a href="#" className="hover:text-blue-500">Become a Teacher</a></li>
            </ul>
          </div>
   
          <div>
            <h4 className="text-lg font-bold mb-4">PROGRAMS</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-500">Nanodegree Plus</a></li>
              <li><a href="#" className="hover:text-blue-500">Veterans</a></li>
              <li><a href="#" className="hover:text-blue-500">Georgia</a></li>
              <li><a href="#" className="hover:text-blue-500">Nepal</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">SUPPORT</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-500">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-500">Forums</a></li>
              <li><a href="#" className="hover:text-blue-500">Language Packs</a></li>
              <li><a href="#" className="hover:text-blue-500">Release Status</a></li>
            </ul>
          </div>
     
          <div>
            <h4 className="text-lg font-bold mb-4">MOBILE</h4>
            <div className="space-y-4">
              <a href="#" className="flex items-center bg-blue-900 text-white py-3 px-4 rounded hover:bg-blue-700 transition ease-in-out duration-200 w-full">
                <i className="fab fa-apple text-2xl mr-4"></i>
                <div>
                  <p className="text-sm">App Store</p>
                  <p className="text-xs">Available now on the</p>
                </div>
              </a>
              <a href="#" className="flex items-center bg-blue-900 text-white py-3 px-4 rounded hover:bg-blue-700 transition ease-in-out duration-200 w-full">
                <i className="fab fa-google-play text-2xl mr-4"></i>
                <div>
                  <p className="text-sm">Google Play</p>
                  <p className="text-xs">Get it on</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <div className="flex items-center space-x-8">
            <img src={logo} alt="Edumy Logo" className="h-8" />
            <span className="font-bold">Timeless</span>
            <nav className="hidden md:flex space-x-4 text-sm">
              <a href="#" className="hover:text-blue-500">Home</a>
              <a href="#" className="hover:text-blue-500">Privacy</a>
              <a href="#" className="hover:text-blue-500">Terms</a>
              <a href="#" className="hover:text-blue-500">Sitemap</a>
              <a href="#" className="hover:text-blue-500">Purchase</a>
            </nav>
          </div>
       
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
            </a>
            <a href="#" className="text-white hover:text-blue-500">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
            <a href="#" className="text-white hover:text-blue-500">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </a>
            <a href="#" className="text-white hover:text-blue-500">
            <FontAwesomeIcon icon="fa-brands fa-pinterest" />
            </a>
            <a href="#" className="text-white hover:text-blue-500">
            <FontAwesomeIcon icon="fa-brands fa-google" />
            </a>
          </div>
        </div>
        <div className="text-center text-sm mt-8">
          <p>Copyright Timeless © 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
