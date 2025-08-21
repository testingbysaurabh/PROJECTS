import React from "react";

const BestData = ({ text }) => {
  return (
    <div className="cursor-pointer border-2 font-bold text-gray-800 border-gray-200 rounded-2xl text-[16px] transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl text-center px-4 py-3 w-[200px]">
      <p>{text}</p>
    </div>
  );
};

export default BestData;
