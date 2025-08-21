import React, { useEffect, useState } from "react";
import { replace, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../Utils/Contex/ApiContext";
import ResNavbar from "./ResNavbar";
import RiseLoader2 from "./RiseLoader2";
import Accordions from "./Accordions";
import NestedUI from "./NestedUI";
import Fssai from "../assets/fssai.png";
import appStore from "../assets/appStore.png";
import playStore from "../assets/playStore.png";

const Menu = () => {
  const navigate=useNavigate()
  const { itemId } = useParams();
  const [menuData, setMenuData] = useState([]);
  const [resData, setResData] = useState({});
  const [carData, setCarData] = useState([]);
  const [menuBox, setMenuBox] = useState({});
  const [topDeals, setTopDeals] = useState([]);
  const [fssai, setFssai] = useState({});
  const [resPlace, setResPlace] = useState({});
  const { lat, long, cdn, topDealscdn } = useGlobalContext();
  

  // Scroll function for carousel
  function scrollFn(dir) {
    const scrollAmt = 200;
    const car = document.getElementById("car");
    if (car) {
      car.scrollBy({
        left: dir === "left" ? -scrollAmt : scrollAmt,
        behavior: "smooth",
      });
    }
  }

  function dealscrollFn(dir) {
    const scrollAmt = 200;
    const dealscroll = document.getElementById("dealscroll");
    if (dealscroll) {
      dealscroll.scrollBy({
        left: dir === "left" ? -scrollAmt : scrollAmt,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${long}&restaurantId=${itemId}&catalog_qa=undefined&submitAction=ENTER`
        );
        const data = await res.json();

        // Extract REGULAR cards dynamically

        let arr2 =
          data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
            1
          );

        if (arr2[0].card.card.carousel) {
          setCarData(arr2[0].card.card.carousel);
          arr2 = arr2.slice(1);
        }

        setMenuData(arr2.slice(0, arr2.length - 2));
        setResData(arr2[arr2.length - 1]?.card?.card || {});
        setMenuBox(data.data?.cards[2].card.card.info || {});
        setTopDeals(
          data.data.cards[3].card?.card?.gridElements?.infoWithStyle?.offers ||
            []
        );

        let arr3 = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        setFssai(arr3[arr3.length - 2]);
        setResPlace(arr3[arr3.length - 1]);
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    }

    if (lat && long && itemId) {
      getData();
    }
  }, [lat, long, itemId]);

  return (
    <div>

      <ResNavbar />

      {menuData.length === 0 ? (
        <RiseLoader2 />
      ) : (
        <div className=" max-w-[72vw] mx-auto mt-25 font-gilroy flex flex-col ">
          <h1 className="font-extrabold ml-3 text-3xl">{resData.name}</h1>

          {/* MenuBox */}
          <div className="  bg-gradient-to-t from-gray-200 to-whiteborder-gray-50 rounded-2xl  mb-5  mt-5 p-5">
            <div className="border bg-white  border-gray-400 rounded-2xl p-3">
              <p className="flex mb-2 items-center gap-1 font-bold ">
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
                {menuBox.avgRatingString} ({menuBox.totalRatingsString}){" "}
                <span className="font-bold text-2xl leading-none">·</span>
                {menuBox.costForTwoMessage}
              </p>
              <h1 className="font-bold text-[#FF5200] text-sm underline ml-1 ">
                {menuBox.cuisines.join(", ")}
              </h1>
              <p className="text-gray-600 mt-2 ml-1">
                <span className="text-black underline">Address:</span>{" "}
                {resData.completeAddress}
              </p>
            </div>
          </div>

          {/* Top Deals */}

          <div className="p-2">
            <div className="flex items-center justify-between mb-5 mt-5">
              <h1 className="text-xl font-bold">Deals for you</h1>
              <div className="flex gap-4">
                <div
                  className="px-1.5 rounded-[50%] hover:bg-gray-300"
                  onClick={() => dealscrollFn("left")}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div
                  className="px-1.5 rounded-[50%] hover:bg-gray-300"
                  onClick={() => dealscrollFn("right")}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div
              id="dealscroll"
              className="flex gap-5 overflow-x-scroll hide-scrollbar"
            >
              {topDeals.length > 0 &&
                topDeals.map((item) => {
              
                  
                  return (
                    <div
                      key={item.info.offerIds[0]}
                      className="border flex gap-4 items-center min-w-[35%] p-2 rounded-2xl border-gray-400 "
                    >
                      <img
                        src={topDealscdn + item.info.offerLogo}
                        className="w-[55px]"
                      />
                      <div>
                        <h1 className="font-bold text-[18px] text-left">
                          {item.info.header}
                        </h1>
                        <p className="font-bold text-[15px] text-gray-500 text-left">
                          {item.info.offerTag
                            ? item.info.offerTag
                            : item.info.primaryDescription}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* MENU STYLE */}

          <div className="flex justify-center gap-2 items-center mt-10 mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 16"
              fill="none"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <g opacity="0.8" fill="gray" stroke="gray" strokeWidth="1">
                <path d="M10.558 4c-.073 0-.119.002-.13.003-1.821 0-3.33.92-4.788 1.811-1.456.889-2.961 1.808-4.796 1.808a.252.252 0 0 0-.251.252c0 .14.112.253.251.253h6.29a.252.252 0 0 0 .25-.253.252.252 0 0 0-.25-.252H3.33c.91-.363 1.747-.874 2.57-1.376 1.464-.894 2.847-1.738 4.541-1.738.03-.002 1.683-.074 2.742.937.598.571.902 1.389.902 2.43.002.033.097 1.753-.882 2.8-.508.544-1.226.82-2.134.82-.021 0-1.156.034-1.864-.655-.388-.377-.583-.912-.58-1.59 0-.012 0-.753.554-1.31.432-.435 1.088-.655 1.95-.655h.052a.252.252 0 0 0 .002-.505c-1.03-.01-1.827.262-2.366.809a2.492 2.492 0 0 0-.694 1.665c-.004.816.243 1.475.736 1.952.865.839 2.167.795 2.22.793h.002c1.043 0 1.884-.33 2.49-.98 1.129-1.21 1.02-3.082 1.016-3.161 0-1.17-.357-2.112-1.061-2.783C12.48 4.08 11.004 4 10.558 4ZM23.163 7.748h-7.327a.248.248 0 0 0-.243.252c0 .14.109.252.243.252h7.328A.248.248 0 0 0 23.407 8a.248.248 0 0 0-.244-.252Z" />
              </g>
            </svg>

            <p className="text-gray-500 text-sm font-medium">MENU</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 16"
              fill="none"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <g opacity="0.8" fill="gray" stroke="gray" strokeWidth="1">
                <path d="M8.163 7.748H.836A.248.248 0 0 0 .593 8c0 .14.109.252.243.252h7.328A.248.248 0 0 0 8.407 8c0-.14-.11-.252-.244-.252ZM13.442 4c.073 0 .119.002.13.003 1.821 0 3.33.92 4.788 1.811 1.456.889 2.961 1.808 4.796 1.808a.252.252 0 0 1 0 .505h-6.29a.252.252 0 0 1 0-.505h3.803c-.91-.363-1.747-.874-2.57-1.376-1.464-.894-2.847-1.738-4.541-1.738-.03-.002-1.683-.074-2.742.937-.598.571-.902 1.389-.902 2.43-.001.033-.097 1.753.882 2.8.508.544 1.226.82 2.134.82.021 0 1.155.034 1.864-.655.388-.377.583-.912.58-1.59 0-.012 0-.753-.554-1.31-.432-.435-1.088-.655-1.95-.655h-.052a.252.252 0 0 1-.002-.505c1.03-.01 1.827.262 2.366.809.703.713.694 1.626.694 1.665.004.816-.243 1.475-.736 1.952-.865.839-2.167.795-2.22.793h-.002c-1.043 0-1.884-.33-2.49-.98-1.129-1.21-1.02-3.082-1.016-3.161 0-1.17.357-2.112 1.061-2.783C11.52 4.08 12.996 4 13.442 4Z" />
              </g>
            </svg>
          </div>

          {/* SEARCH BUTTON */}


          <div className="relative w-[100%] flex justify-center mb-13">
          <input
          onClick={()=>{
            navigate('/search')
          }}
            type="text"
            placeholder="Search for restaurants and food"
            className=" placeholder-gray-500 placeholder:font-bold placeholder:text-center bg-gray-100  rounded cursor-pointer   w-[80%] caret-[#FE5005] h-[45px] px-3 outline-none"
          />
          <i className="mr-1 fa-solid text-gray-600 fa-magnifying-glass absolute top-4 right-26"></i>
        
        </div>

          <hr className="w-[100%] border border-[rgba(2,6,12,0.05)]" />

          {/* Carousel - Top Picks */}
          {carData.length > 0 && (
            <div className="w-full mt-5">
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold ">Top Picks</p>
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

              <div
                id="car"
                className="w-full flex overflow-x-auto gap-4 whitespace-nowrap hide-scrollbar mt-4"
              >
                {carData.map((item, index) => (
                  <div key={index} className="shrink-0">
                    <div className="relative">
                      <img
                        className=" h-[250px] w-[250px] rounded-2xl "
                        src={cdn + item.dish.info.imageId}
                        alt=""
                      />
                      <div className="absolute rounded-2xl inset-0 shadow-[inset_30px_20px_60px_rgba(0,0,0,1)]" />
                      <p className="absolute top-3 text-white text-wrap font-bold left-4">
                        {item.dish.info.name}
                      </p>
                      <div className="">
                        <p className="absolute bottom-5 text-white text-wrap font-bold left-4">
                          ₹
                          {Number(
                            item.dish.info.price || item.dish.info.defaultPrice
                          ) / 100}
                        </p>
                       
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Accordion Menu Items */}
          <div className="w-full mt-8">
            {menuData.map((item, idx) => {
              const title = item.card?.card?.title;
              const items = item.card?.card?.itemCards;
              if (items) {
                return (
                  <div key={idx}>
                    <div className=" h-4 bg-gray-200  mb-2 "></div>
                    <Accordions title={title} data={items} />
                  </div>
                );
              } else {
                return (
                  <div key={idx}>
                    <div className=" h-5 bg-gray-200 mb-4 mt-2 "></div>
                    <NestedUI
                      title={item.card.card.title}
                      data={item.card.card.categories}
                    />
                  </div>
                );
              }
            })}
          </div>

          <div className=" mt-3 bg-[#F1F1F6] p-4">
            <div className="flex gap-7 items-center border-b border-gray-400 pb-4">
              <img src={Fssai} className="w-[80px]" />
              <p className="mt-2 text-gray-500 text-[14px] font-medium">
                {fssai.card.card.text}
              </p>
            </div>

            <div className="mt-3 border-b border-gray-400 pb-4">
              <h1 className="font-bold text-gray-400">
                {resPlace.card.card.name}
              </h1>
              <p className="text-gray-400 font-medium">
                (Outlet:{resPlace.card.card.area})
              </p>
              <p className="text-[13px] mt-2 font-medium text-gray-400">
                <i className="mr-1  fa-solid text-gray-400 fa-location-dot ml-1"></i>
                {resPlace.card.card.completeAddress}
              </p>
            </div>

            <div className="flex flex-col items-center mt-5 mb-[80px]">
              <p className="font-bold">
                For better experience, download the Swiggy app now
              </p>
              <div className="flex items-center gap-7">
                <a
                  href="https://shorturl.at/gLoBV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={playStore} className="w-[140px] h-[60px]" />
                </a>

                <a
                  href="https://shorturl.at/OKiKp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={appStore} className="w-[180px] h-[70px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
