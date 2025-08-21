import React, { useEffect, useState } from "react";
import ResNavbar from "./ResNavbar";
import { useGlobalContext } from "../Utils/Contex/ApiContext";
import TopRes from "./TopRes";
import { useNavigate } from "react-router-dom";
import BestData from "./BestData";
import appStore from "../assets/appStore.png";
import playStore from "../assets/playStore.png";
import RiseLoader2 from "./RiseLoader2";

const Restaurant = () => {
  const navigate = useNavigate();
  const [sliderData, setSLiderData] = useState([]);
  const [topRes, setTopRes] = useState([]);
  const [topTitle, setTopTitle] = useState("");
  const [onlineDelResTitle, setOnlineDelResTitle] = useState("");
  const [onlineDelRes, setOnlineDelRes] = useState([]);
  const [bestPlace, setBestPalce] = useState([]);
  const [bestPlaceTitle, setBestPalceTitle] = useState("");
  const [cuisines, setCuisines] = useState([]);
  const [cuisinesTitle, setCuisinesTitle] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedCuisines, setIsExpandedCuisines] = useState(false);
  const [isExpandedCities, setIsExpandedCities] = useState(false);
  const [nearRes, setNearRes] = useState([]);
  const [nearResTitle, setNearResTitle] = useState("");
  const [bestExp, setBestExp] = useState("");
  const [resCities, setResCities] = useState([]);
  const [allData, setAllData] = useState(null);

  const toggleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleShowMoreCuisines = () => {
    setIsExpandedCuisines(!isExpandedCuisines);
  };

  const toggleShowMoreCities = () => {
    setIsExpandedCities(!isExpandedCities);
  };

  const { cdn, long, lat } = useGlobalContext();

  const scrollFn = (direction) => {
    const mySlider = document.getElementById("slider");
    const slideAmount = 200;

    mySlider.scrollBy({
      left: direction === "left" ? -slideAmount : slideAmount,
      behavior: "smooth",
    });
  };

  const scrollFn2 = (direction) => {
    const mySlider2 = document.getElementById("slider2");
    const slideAmount = 200;

    mySlider2.scrollBy({
      left: direction === "left" ? -slideAmount : slideAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );
        let apiData = await res.json();
        setSLiderData(apiData.data?.cards[0]?.card?.card?.imageGridCards?.info);
        setTopRes(
          apiData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setTopTitle(apiData.data?.cards[1]?.card?.card?.header?.title);
        setOnlineDelResTitle(apiData.data?.cards[2]?.card?.card?.title);
        setOnlineDelRes(
          apiData.data?.cards[4].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setBestPalce(apiData.data?.cards[6]?.card?.card?.brands);
        setBestPalceTitle(apiData.data?.cards[6]?.card?.card?.title);
        setCuisines(apiData.data?.cards[7]?.card?.card?.brands);
        setCuisinesTitle(apiData.data?.cards[7]?.card?.card?.title);
        setNearRes(apiData.data?.cards[8]?.card?.card?.brands);
        setNearResTitle(apiData.data?.cards[8]?.card?.card?.title);
        setBestExp(apiData.data?.cards[9]?.card?.card);
        setResCities(apiData.data?.cards[10]?.card?.card?.cities);
        setAllData(apiData.data?.cards);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [lat, long]);

  return (
    <div>
      
      {!allData ? (
        <RiseLoader2 />
      ) : (
        <div className="z-1  min-h-screen font-gilroy">
          {sliderData && (
            <div className=" w-[80vw] h-auto mx-auto mt-25 mb-15 bg-white">
              <div className="w-[80vw] mx-auto mt-10 bg-white">
                <div className="flex justify-between items-center mb-4">
                  <p className="font-bold text-xl">What's on your mind?</p>

                  <div className="flex gap-4">
                    <div
                      className="cursor-pointer px-2 py-1 rounded-full hover:bg-gray-200"
                      onClick={() => scrollFn("left")}
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div
                      className="cursor-pointer px-2 py-1 rounded-full hover:bg-gray-200"
                      onClick={() => scrollFn("right")}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className=" absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-3 pointer-events-none" />

                  <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-3 pointer-events-none" />

                  <div
                    id="slider"
                    className="flex gap-4 overflow-x-scroll hide-scrollbar pb-5 "
                  >
                    {sliderData.map((item) => {
                      
                      
                      let str = item.action.link;
                      str = str.slice(35, 40);

                      let text = item.action.text;

                      return (
                        <img
                          onClick={() =>
                            navigate(`/slider-data/${str}/${text}`)
                          }
                          key={item.id}
                          // item.id
                          src={cdn + item.imageId}
                          className="h-[150px] cursor-pointer rounded-lg transition-transform duration-200 transform hover:scale-105"
                          alt="slider"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              <hr className="border border-[rgba(2,6,12,0.05)]" />

              {/* For Top Res */}
              {topRes && (
                <div className="w-[80vw] mx-auto mt-5 bg-white mb-10  ">
                  <div className="flex justify-between">
                    <div className="font-bold text-xl">{topTitle}</div>
                    <div className="flex gap-4">
                      <div
                        className="px-1.5 rounded-[50%] hover:bg-gray-300"
                        onClick={() => scrollFn2("left")}
                      >
                        <i className="fa-solid fa-arrow-left"></i>
                      </div>
                      <div
                        className="px-1.5 rounded-[50%] hover:bg-gray-300"
                        onClick={() => scrollFn2("right")}
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>

                  <div
                    id="slider2"
                    className="flex gap-3 overflow-scroll hide-scrollbar mt-5"
                  >
                    {topRes.map((item) => {
                      
                      
                      return (
                        <div key={item.info.id} onClick={() => navigate(`/menu/${item.info.id}`)}>
                          {/* item.info.id */}
                          <TopRes
                            size={"sm"}
                            cuisines={item.info.cuisines}
                            slaString={item.info.sla.slaString}
                            avgRating={item.info.avgRating}
                            name={item.info.name}
                            subHeader={
                              item.info.aggregatedDiscountInfoV3?.subHeader
                            }
                            header={item.info.aggregatedDiscountInfoV3?.header}
                            areaName={item.info.areaName}
                            imageId={item.info.cloudinaryImageId}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <hr className="border border-[rgba(2,6,12,0.05)]" />
              {/* for Grid */}

              {onlineDelRes && (
                <div className="w-[82vw] mx-auto mt-10 bg-white mb-10 ">
                  <div className="flex justify-between">
                    <div className="font-bold text-xl mb-6">
                      {onlineDelResTitle}
                    </div>
                  </div>

                  <div id="slider2" className="grid grid-cols-4 gap-8">
                    {onlineDelRes.map((item, index) => {
                      
                      

                      return (
                        <div key={item.info.id} onClick={() => navigate(`/menu/${item.info.id}`)}>
                        <TopRes
                          
                          size={"lg"}
                          cuisines={item.info.cuisines}
                          slaString={item.info.sla.slaString}
                          avgRating={item.info.avgRating}
                          name={item.info.name}
                          subHeader={
                            item.info.aggregatedDiscountInfoV3?.subHeader
                          }
                          header={item.info.aggregatedDiscountInfoV3?.header}
                          areaName={item.info.areaName}
                          imageId={item.info.cloudinaryImageId}
                        />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div>
                {/* For Cities */}
                <div className="mt-7 mb-10">
                  <h2 className="text-[25px] font-bold mb-5">
                    {bestPlaceTitle}
                    
                  </h2>
                  <div className="grid grid-cols-4 gap-4">
                    {(isExpanded ? bestPlace : bestPlace?.slice(0, 11))?.map(
                      (item, index) => (
                      
                        <div key={index}>
                          <BestData text={item.text} />
                        </div>
                      )
                    )}

                    <button
                      title="Click to Show all Cities"
                      onClick={toggleShowMore}
                      className="cursor-pointer border-2 font-medium rounded-2xl text-orange-500 h-[60px] w-[80%] border-gray-200 mt-2 flex items-center justify-center"
                    >
                      
                      
                      {isExpanded ? <p>Show Less</p> : <p>Show More</p>}
                      <svg
                        className={`mt-1 transition-transform duration-400 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* For Cuisines */}
                <div className="mt-5 mb-10">
                  <h2 className="text-[25px] font-bold mb-5">
                    {cuisinesTitle}
                  </h2>
                  <div className="grid grid-cols-4 gap-4">
                    {(isExpandedCuisines
                      ? cuisines
                      : cuisines?.slice(0, 11)
                    )?.map((item, index) => (
                      <div key={index}>
                        <BestData text={item.text} />
                      </div>
                    ))}

                    <button
                      title="Click to Show all Cuisines"
                      onClick={toggleShowMoreCuisines}
                      className="cursor-pointer border-2 font-medium rounded-2xl text-orange-500 h-[60px] w-[80%] border-gray-200 mt-2 flex items-center justify-center"
                    >
                      {isExpandedCuisines ? <p>Show Less</p> : <p>Show More</p>}
                      <svg
                        className={`mt-1 transition-transform duration-400 ${
                          isExpandedCuisines ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Near Restaurants */}
                <div className="mt-5">
                  <h2 className="text-[25px] font-bold mb-5">{nearResTitle}</h2>
                  <div className="grid grid-cols-4 gap-4">
                    {nearRes?.map((item, index) => (
                      <div key={index}>
                        <BestData text={item.text} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <hr className="border border-[rgba(2,6,12,0.05)]" /> */}
            </div>
          )}

          <footer className=" bg-[#F0F0F5] w-[100%] pb-5 font-gilroy">
            <div className="w-[80%] m-auto">
              <hr className="border border-[rgba(2,6,12,.50)]" />
              {bestExp && (
                <div className="flex justify-between gap-7 items-center mt-10">
                  <h1 className="text-[26px] text-gray-800 font-bold leading-7">
                    {bestExp.title}
                  </h1>
                  <div className="flex items-center">
                    <a href={bestExp.androidAppLink} target="_blank">
                      <img
                        src={playStore}
                        className="w-[170px] transition-transform duration-200 hover:scale-105 "
                      />
                    </a>
                    <a href={bestExp.iosAppLink} target="_blank">
                      <img
                        src={appStore}
                        className="w-[200px] transition-transform duration-200 hover:scale-105"
                      />
                    </a>
                  </div>
                </div>
              )}

              <div
                title="Click to Show all Cities"
                className="flex justify-between mt-15 "
              >
                <div className="">
                  <svg
                    className="cursor-pointer hover:scale-105 transition-transform duration-200 "
                    onClick={() => navigate("/home")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="160"
                    height="49"
                    fill="none"
                  >
                    <g filter="url(#filter0_b_674_19294)">
                      <path
                        fill="#FE5005"
                        d="M69.097 35.543c-2.126 0-3.916-.456-5.376-1.368-1.459-.932-2.5-2.228-3.13-3.888l4.191-2.43c.85 1.964 2.338 2.948 4.464 2.948 1.925 0 2.885-.576 2.885-1.733 0-.648-.312-1.133-.94-1.459-.649-.384-1.8-.802-3.462-1.243-1.699-.466-3.139-1.133-4.31-2.002-1.296-1.051-1.944-2.539-1.944-4.464 0-1.925.696-3.533 2.093-4.704 1.416-1.176 3.096-1.761 5.04-1.761 1.742 0 3.278.412 4.613 1.243 1.334.811 2.39 1.992 3.158 3.552l-4.1 2.4c-.767-1.642-1.991-2.458-3.671-2.458-.71 0-1.267.154-1.67.456-.404.303-.61.687-.61 1.152 0 .504.245.96.73 1.368.527.403 1.56.83 3.095 1.277l1.973.638c.504.164 1.095.437 1.762.821.73.365 1.277.759 1.641 1.186.97 1.051 1.46 2.366 1.46 3.945 0 2.002-.73 3.605-2.184 4.796-1.46 1.152-3.36 1.732-5.708 1.732Zm23.482-7.47 2.184-8.135h4.858L94.763 35.12H90.51l-2.429-8.107-2.428 8.107H81.4l-4.858-15.182H81.4l2.184 8.136 2.366-8.136h4.253l2.366 8.136h.01Zm12.432-10.262a2.594 2.594 0 0 1-1.91.788 2.72 2.72 0 0 1-1.944-.788 2.702 2.702 0 0 1-.788-1.944c0-.748.264-1.387.788-1.91.547-.547 1.195-.82 1.944-.82.748 0 1.387.273 1.91.82.547.528.821 1.162.821 1.91 0 .75-.274 1.397-.821 1.944Zm.365 17.304h-4.555V19.933h4.555v15.182Zm13.867-13.632v-1.55h4.43v14.42c0 2.39-.777 4.19-2.337 5.404-1.536 1.234-3.432 1.853-5.679 1.853-3.441 0-5.841-1.224-7.195-3.672l3.888-2.247c.711 1.277 1.863 1.916 3.461 1.916 1.094 0 1.934-.284 2.52-.85.61-.566.912-1.368.912-2.4V32.96c-1.07 1.315-2.549 1.973-4.43 1.973-2.127 0-3.908-.749-5.343-2.246-1.416-1.498-2.126-3.322-2.126-5.468 0-2.145.71-3.955 2.126-5.433 1.416-1.517 3.197-2.275 5.343-2.275 1.881 0 3.36.657 4.43 1.972Zm-6.317 8.29c.711.648 1.589.97 2.64.97 1.051 0 1.935-.322 2.64-.97.687-.629 1.032-1.478 1.032-2.549 0-1.07-.345-1.925-1.032-2.549-.71-.648-1.589-.97-2.64-.97-1.051 0-1.934.322-2.64.97-.686.63-1.032 1.479-1.032 2.55 0 1.07.346 1.924 1.032 2.548Zm24.624-8.29v-1.55h4.431v14.42c0 2.39-.778 4.19-2.338 5.404-1.536 1.234-3.432 1.853-5.678 1.853-3.442 0-5.842-1.224-7.196-3.672l3.888-2.247c.711 1.277 1.863 1.916 3.461 1.916 1.095 0 1.935-.284 2.52-.85.61-.566.912-1.368.912-2.4V32.96c-1.07 1.315-2.549 1.973-4.43 1.973-2.127 0-3.907-.749-5.343-2.246-1.416-1.498-2.126-3.322-2.126-5.468 0-2.145.71-3.955 2.126-5.433 1.416-1.517 3.197-2.275 5.343-2.275 1.881 0 3.36.657 4.43 1.972Zm-6.317 8.29c.711.648 1.589.97 2.64.97 1.052 0 1.935-.322 2.64-.97.687-.629 1.032-1.478 1.032-2.549 0-1.07-.345-1.925-1.032-2.549-.71-.648-1.588-.97-2.64-.97-1.051 0-1.934.322-2.64.97-.686.63-1.032 1.479-1.032 2.55 0 1.07.346 1.924 1.032 2.548Zm20.194-.547 2.856-9.293h4.858l-5.194 14.726c-.85 2.367-1.973 4.07-3.37 5.103-1.377 1.051-3.139 1.526-5.284 1.425v-4.252c1.051 0 1.862-.192 2.428-.576.567-.365 1.023-1.013 1.368-1.944l-6.043-14.482h5.011l3.37 9.293ZM.5 24.94C.5 14.566.5 9.382 3.298 5.845a12.87 12.87 0 0 1 2.108-2.107C8.938.939 14.127.939 24.5.939c10.373 0 15.557 0 19.094 2.799a12.87 12.87 0 0 1 2.108 2.107C48.5 9.378 48.5 14.567 48.5 24.94c0 10.373 0 15.557-2.798 19.095a12.873 12.873 0 0 1-2.108 2.107C40.062 48.94 34.873 48.94 24.5 48.94c-10.373 0-15.557 0-19.094-2.799a12.873 12.873 0 0 1-2.108-2.107C.5 40.5.5 35.312.5 24.939Z"
                      />
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.314 19.967v-4.973a.588.588 0 0 0-.586-.586.588.588 0 0 0-.585.586v5.841c0 .332.268.596.595.596h.571c8.3 0 9.163.432 8.645 2.184-.024.086-.053.168-.082.259a.788.788 0 0 1-.014.053c-2.18 6.57-8.074 14.793-9.816 17.145a.611.611 0 0 1-.984 0c-1.051-1.42-3.624-4.992-5.971-9.043-.159-.37-.235-1.234 2.37-1.234h3.188c.178 0 .322.144.322.322v2.573c0 .307.225.59.533.614a.584.584 0 0 0 .465-.173.561.561 0 0 0 .173-.412v-3.49a.608.608 0 0 0-.605-.605h-6.442c-1.123 0-1.804-.96-2.25-1.833-1.402-2.938-2.405-5.837-2.405-8.122 0-5.851 4.665-11.117 11.107-11.117 5.736 0 10.08 4.171 10.963 9.216.005.043.038.235.043.274.23 2.477-6.23 2.193-8.947 2.208a.286.286 0 0 1-.288-.288v.005Z"
                      />
                    </g>
                  </svg>
                  <p className="text-gray-600">© 2025 Swiggy Limited</p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 text-sm">
                  {/* Company */}
                  <div>
                    <h2 className="font-bold mb-2 text-[17px]">Company</h2>
                    <ul className="space-y-1 text-[16px] font-medium text-gray-600 ">
                      <li>
                        <a>About Us</a>
                      </li>
                      <li>
                        <a>Swiggy Corporate</a>
                      </li>
                      <li>
                        <a>Careers</a>
                      </li>
                      <li>
                        <a>Team</a>
                      </li>
                      <li>
                        <a>Swiggy One</a>
                      </li>

                      <li>
                        <a>Swiggy Instamart</a>
                      </li>
                      <li>
                        <a>Swiggy Dineout</a>
                      </li>
                      <li>
                        <a>Swiggy Genie</a>
                      </li>
                      <li>
                        <a>Minis</a>
                      </li>
                      <li>
                        <a>Pyng</a>
                      </li>
                    </ul>
                  </div>

                  {/* Contact Us */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <h2 className="font-bold mb-2 text-[17px]">Contact us</h2>
                      <ul className="space-y-1 text-[16px] font-medium text-gray-600">
                        <li>
                          <a>Help & Support</a>
                        </li>
                        <li>
                          <a>Partner with us</a>
                        </li>
                        <li>
                          <a>Ride with us</a>
                        </li>
                      </ul>

                      {/* Legal */}
                    </div>
                    <div className="mt-5">
                      <h2 className="font-bold mb-2 mt-[100px] text-[17px]">
                        Legal
                      </h2>
                      <ul className="space-y-1 text-[16px] font-medium text-gray-600">
                        <li>
                          <a>Terms & Conditions</a>
                        </li>
                        <li>
                          <a>Cookie Policy</a>
                        </li>
                        <li>
                          <a>Privacy Policy</a>
                        </li>
                        <li>
                          <a>Investor Relations</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Available in */}
                  <div>
                    <h2 className="font-bold mb-2 text-[17px]">
                      Available in:
                    </h2>
                    <ul className="space-y-1 text-[16px] text-gray-600">
                      {resCities &&
                        resCities.slice(0, 6).map((item) => {
                          return (
                            <li className="font-medium" key={item.text}>
                              <a href={item.link} target="_blank">
                                {item.text}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                    <button
                      onClick={toggleShowMoreCities}
                      className="border-[1.5px] rounded-xl px-2 py-1  cursor-pointer border-gray-200 mt-2 flex items-center"
                    >
                      <p className="text-[16px] text-gray-600 font-medium">
                        679 cities
                      </p>
                      <svg
                        className={`ml-4 mt-1 transition-transform duration-400 ${
                          isExpandedCities ? "" : "rotate-180"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 6.586l8.707 8.707-1.414 1.414L12 9.414 4.707 16.707 3.293 15.293 12 6.586z" />
                      </svg>
                    </button>
                  </div>

                  {/* Life at Swiggy */}
                  <div className="h-[75%] flex flex-col justify-between">
                    <div className="">
                      <h2 className="font-bold mb-2 text-[17px]">
                        Life at Swiggy
                      </h2>
                      <ul className="space-y-1 text-[16px] font-medium text-gray-600">
                        <li>
                          <a>Explore with Swiggy</a>
                        </li>
                        <li>
                          <a>Swiggy News</a>
                        </li>
                        <li>
                          <a>Snackables</a>
                        </li>
                      </ul>
                    </div>

                    <div className="">
                      <h2 className="font-bold text-[17px]  mb-2">
                        Social Links
                      </h2>
                      <div className="flex space-x-3 text-xl  ">
                        <i className="fab fa-linkedin transition-transform duration-200 hover:scale-125"></i>
                        <i className="fab fa-instagram transition-transform duration-200 hover:scale-125"></i>
                        <i className="fab fa-facebook transition-transform duration-200 hover:scale-125"></i>
                        <i className="fab fa-pinterest transition-transform duration-200 hover:scale-125"></i>
                        <i className="fab fa-twitter transition-transform duration-200 hover:scale-125"></i>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                </div>
              </div>

              {/* All cities */}
              <div className="w-[68%] m-auto">
                {!isExpandedCities ? (
                  ""
                ) : (
                  
                  <div className="mt-5">
              <hr className="border border-[rgba(2,6,12,.50)]" />

                    <h2 className="text-xl mt-5 font-bold">
                      Other cities that we deliver:
                    </h2>
                    <ul className="grid grid-cols-4 mt-2">
                      {resCities &&
                        resCities.map((item) => {
                          return (
                            <li
                              key={item.text}
                              className="leading-8 text-gray-600 font-medium "
                            >
                              <a href={item.link} target="_blank">
                                {item.text}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </footer>


        </div>
      )}
    </div>
  );
};

export default Restaurant;
