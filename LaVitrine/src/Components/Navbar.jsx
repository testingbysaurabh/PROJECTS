import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { contextCall } from "../Utlity/MyContext";
import { LuSearch } from "react-icons/lu";
import { FaPeopleCarryBox } from "react-icons/fa6";



const Navbar = () => {
  const navigate = useNavigate()
  const {
    orignalData,
    setOrignalData,
    data,
    setData,
    val,
    setVal,
    setUser,
    setPassword,
    cartData
  } = contextCall();

  function inputSearchHandler(e) {
    const filterData = orignalData.filter((items) => {
      return items.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setData(filterData);
  }

  function logOutInputHandler(e) {
    setUser("");
    setPassword("");
  }
  return (
    <header className=" bg-gray-900 fixed w-full top-0 z-50 shadow-md">
      <div className="flex flex-wrap justify-between items-center px-6 py-3">
        <div className="flex items-center w-full md:w-[55%] justify-between">
          <div className="flex items-center gap-3"
            onClick={() => navigate("/home")}
          >
            <img
              src="https://www.svgrepo.com/show/321738/anubis.svg"
              alt="logo"
              className="h-12 w-12 rounded-tr-2xl bg-[#48A6A7] p-1 cursor-pointer"
            />
            <h1 className="text-2xl font-bold text-[#48A6A7] cursor-pointer ">LaVitrine</h1>
          </div>

          <div className="flex items-center w-[50%] relative">
            <input
              type="text"
              onChange={inputSearchHandler}
              placeholder="Search for products, brands, and more"
              className="flex-1 px-4 py-2 rounded-lg bg-[#F2EFE7] placeholder:text-gray-500 text-sm focus:outline-none shadow-sm"
            />
            <LuSearch className="absolute right-8 text-gray-600" />
          </div>
        </div>

        <div className="flex gap-6 items-center mt-4 md:mt-0 text-sm">
          <NavLink
            onClick={logOutInputHandler}
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive
                ? "text-[#48A6A7] font-bold"
                : "text-gray-700 hover:text-[#48A6A7]"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#48A6A7]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a8 8 0 0116 0H2z" />
            </svg>
            LogOut
          </NavLink>

          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive
                ? "text-[#48A6A7] font-bold"
                : "text-gray-700 hover:text-[#48A6A7]"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#48A6A7]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10l9-7 9 7v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V12H9v8a2 2 0 01-2 2H5a2 2 0 01-2-2V10z"
              />
            </svg>
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive
                ? "text-[#48A6A7] font-bold"
                : "text-gray-700 hover:text-[#48A6A7]"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative h-5 w-5 text-[#48A6A7]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8M17 13l1.6 8M6 21h.01M18 21h.01"
              />
            </svg>
            Cart{" "}
            <div className="absolute mx-4 mb-4 text-[#48A6A7] text-[12px]">
              {cartData.length}
            </div>
          </NavLink>



          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive
                ? "text-[#48A6A7] font-bold"
                : "text-gray-700 hover:text-[#48A6A7]"
              }`}>
            <FaPeopleCarryBox color="#48A6A7" size={20} />
            About Us
          </NavLink>





          {/* <NavLink
            to="/setting"
            className={({ isActive }) =>
              `flex items-center gap-1 ${isActive
                ? "text-[#48A6A7] font-bold"
                : "text-gray-700 hover:text-[#48A6A7]"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#48A6A7]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.591 1.1c1.54-.94 3.4.92 2.46 2.46a1.724 1.724 0 001.1 2.591c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.1 2.591c.94 1.54-.92 3.4-2.46 2.46a1.724 1.724 0 00-2.591 1.1c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.591-1.1c-1.54.94-3.4-.92-2.46-2.46a1.724 1.724 0 00-1.1-2.591c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.1-2.591c-.94-1.54.92-3.4 2.46-2.46a1.724 1.724 0 002.591-1.1z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Setting
          </NavLink> */}

        </div>
      </div>
    </header>
  );
};

export default Navbar;
