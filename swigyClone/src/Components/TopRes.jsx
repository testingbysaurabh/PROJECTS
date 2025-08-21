import React from "react";
import { useGlobalContext } from "../Utils/Contex/ApiContext";
import { useNavigate } from "react-router-dom";

const TopRes = ({
  resId,
  header,
  subHeader,
  imageId,
  name,
  avgRating,
  slaString,
  cuisines,
  areaName,
  size,
}) => {
  const { cdn } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div className={`${size === "lg" ? "hover:scale-90 transition-transform duration-105" : "hover:scale-90 transition-transform duration-200"} font-medium`}>
      <div
        className={`relative cursor-pointer ${
          size === "sm"
            ? "w-[290px]"
            : "w-[250px]"
        }`}
      >
      <div className="relative">
        <img
          src={cdn + imageId}
          alt=""
          className={` ${
            size === "sm" ? "h-[200px]" : "h-[170px]"
          } w-[100%] rounded-2xl`}
        />
        <div className="absolute rounded-2xl inset-0 shadow-[inset_3px_-30px_40px_rgba(0,0,0,0.8)]" />
</div>
        {header && (
          <p className="absolute bottom-1 left-4 text-white font-bold">
            {header + (subHeader || "")}
          </p>
        )}
      </div>

      <div className="mt-2">
        <h2 className="font-bold">
          {name.length > 25 ? name.slice(0, 25) + "..." : name}
        </h2>
        <p className="flex text-sm">
          {/* Star Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear)"
            />
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21973B" />
                <stop offset="1" stopColor="#128540" />
              </linearGradient>
            </defs>
          </svg>
          &nbsp; {avgRating} • {slaString}
        </p>
        <p className="text-sm text-gray-400">
          {cuisines.join(", ").length > 30
            ? cuisines.join(", ").slice(0, 30) + "..."
            : cuisines.join(", ")}
        </p>
        <p className="text-sm text-gray-400">{areaName}</p>
      </div>
    </div>
  );
};

export default TopRes;
