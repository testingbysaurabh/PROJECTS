import React from "react";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-indigo-900 px-4">
      <div className="text-center text-white max-w-xl animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">🚧 Page Under Development</h1>
        <p className="text-lg text-gray-200 mb-6">
          We are currently working on this page.<br />
          It will be available very soon!
        </p>

        <button
          onClick={() => navigate("/home")}
          className="mt-4 bg-white text-indigo-700 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition duration-300"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
