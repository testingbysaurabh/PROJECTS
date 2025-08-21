import React from "react";

const SkeletonCard = () => {
    return (
        <div className="bg-gray-800 animate-pulse rounded-2xl p-4 shadow-lg">
            <div className="bg-gray-700 h-40 w-full rounded mb-4"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
            <div className="h-10 bg-gray-700 rounded w-full"></div>
        </div>
    );
};

export default SkeletonCard;
