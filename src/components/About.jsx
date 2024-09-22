import React from "react";
import logo from "../assets/About-banner.png";

const About = () => {
  return (
    <div className="relative flex flex-col items-center py-20 text-white overflow-hidden">
      {/* Animated Heading */}
      <h1 className="text-4xl font-bold mb-8 animate-fade-in-down">About Us</h1>

      {/* Larger Circular Background Image with Hover Effect */}
      <div className="relative w-80 h-80 rounded-full overflow-hidden mb-12 hover:scale-105 transform transition-transform duration-300">
        <img src={logo} alt="Circular Banner" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
      </div>

      {/* Floating Text Cards with Flexbox */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-8 px-4 animate-slide-in">
        {/* Card 1 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex-1 min-w-[250px]">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-blue-900">WATCHMAKING</h2>
          </div>
          <p className="text-gray-600">
            Learn more about the world-class expertise of Breitling's in-house watch manufacture, creating its own movements with Swiss-made quality & passion!
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex-1 min-w-[250px]">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-blue-900">SUSTAINABILITY</h2>
          </div>
          <p className="text-gray-600">
            At Breitling, we are a Squad on a Mission to do better. We are committed to optimizing the social and environmental impacts of our business.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex-1 min-w-[250px]">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-blue-900">CRAFTSMANSHIP</h2>
          </div>
          <p className="text-gray-600">
            Discover the meticulous craftsmanship behind Breitling's watchmaking, combining Swiss-made quality and passion.
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="mt-12">
        <a
          href="#contact"
          className="bg-red-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300"
        >
          Learn More
        </a>
      </div>

      {/* Testimonials Section */}
      <div className="w-full mt-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <p className="text-lg italic mb-4">"Breitling's craftsmanship is unmatched. The precision and dedication they put into each watch are evident in every detail."</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <p className="text-lg font-bold">John Doe</p>
                <p className="text-sm text-gray-500">CEO, Example Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Video Section */}
      <div className="w-full mt-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Watch Our Story</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute inset-0 w-full h-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
