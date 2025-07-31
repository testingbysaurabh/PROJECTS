import React from "react";
import { FiSearch } from "react-icons/fi";

const Simmer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-200 to-cyan-300 p-4 sm:p-6">
      {/* Search Bar */}
      <div className="flex items-center justify-between w-full max-w-md bg-white/30 backdrop-blur-md rounded-full px-4 py-2 shadow-md mb-6 animate-pulse">
        <div className="bg-gray-300 h-5 w-full rounded"></div>
        <FiSearch className="text-xl text-gray-500 ml-2" />
      </div>

      {/* Weather Card Skeleton */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4 bg-white/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-xl animate-pulse">
        {/* Left Section */}
        <div className="flex-1 w-full text-center md:text-left space-y-2">
          <div className="bg-gray-300 h-4 w-32 mx-auto md:mx-0 rounded"></div>
          <div className="bg-gray-400 h-6 w-24 mx-auto md:mx-0 rounded"></div>
          <div className="bg-gray-300 h-3 w-20 mx-auto md:mx-0 rounded"></div>
        </div>

        {/* Center Section */}
        <div className="flex-1 w-full text-center space-y-2">
          <div className="bg-gray-400 h-10 w-24 rounded mx-auto"></div>
          <div className="bg-gray-300 h-4 w-32 rounded mx-auto"></div>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full bg-white/30 backdrop-blur-md p-4 rounded-xl text-sm text-gray-800 space-y-2">
          <div className="bg-gray-300 h-3 w-36 mx-auto md:mx-0 rounded"></div>
          <div className="bg-gray-300 h-3 w-32 mx-auto md:mx-0 rounded"></div>
          <div className="bg-gray-300 h-3 w-40 mx-auto md:mx-0 rounded"></div>
          <div className="bg-gray-300 h-3 w-28 mx-auto md:mx-0 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Simmer;
