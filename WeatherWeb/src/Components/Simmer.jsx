import React from "react";
import { FiSearch } from "react-icons/fi";

const Simmer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-indigo-200 to-cyan-300 p-6">
      {/* Search Bar */}
      <div className="flex items-center justify-between w-full max-w-md bg-white/30 backdrop-blur-md rounded-full px-4 py-2 shadow-md mb-8 animate-pulse">
        <div className="bg-gray-300 h-5 w-full rounded"></div>
        <FiSearch className="text-xl text-gray-500 ml-2" />
      </div>

      {/* Weather Card Skeleton */}
      <div className="w-full max-w-4xl flex justify-between items-center bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl animate-pulse">
        {/* Left Section */}
        <div>
          <div className="bg-gray-300 h-4 w-32 rounded mb-2"></div>
          <div className="bg-gray-400 h-6 w-24 rounded mb-1"></div>
          <div className="bg-gray-300 h-3 w-20 rounded"></div>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <div className="bg-gray-400 h-10 w-24 rounded mb-2 mx-auto"></div>
          <div className="bg-gray-300 h-4 w-32 rounded mx-auto"></div>
        </div>

        {/* Right Section */}
        <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl text-sm text-gray-800 space-y-2">
          <div className="bg-gray-300 h-3 w-36 rounded"></div>
          <div className="bg-gray-300 h-3 w-32 rounded"></div>
          <div className="bg-gray-300 h-3 w-40 rounded"></div>
          <div className="bg-gray-300 h-3 w-28 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Simmer;
