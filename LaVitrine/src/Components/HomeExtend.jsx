import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import h4 from "../assets/h4.jpg";
import h5 from "../assets/h5.jpg";
import h1 from "../assets/u1.jpg";
import h2 from "../assets/u2.jpg";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const HomeExtend = () => {
  let img = [h2, h1, h4, h5];
  const Navigate = useNavigate();

  const [Slider, setSlider] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSlider((prev) => (prev + 1) % img.length);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [img.length]);

  return (
    <>
      <Navbar />
      <div className="bg-bg-gray-800 min-h-[100vh]  bg-gray-800 mt-18">
        <div className="flex justify-center items-center bg-bg-gray-800 min-h-[92vh]  bg-gray-800 ">
          <div
            id="sliderImage"
            className="relative w-[99vw] h-[88vh] rounded-xl  overflow-hidden shadow-2xl border-2 border-white"
          >
            <img
              src={img[Slider]}
              alt="slider"
              className="object-bottom  w-full h-full transition-all duration-700 scale-105 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg mb-4 animate-fadeInUp">
                Explore Now
              </h1>
              <button
                className="px-6 py-2 hover:cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 transition-all font-semibold"
                onClick={() => Navigate("/home")}
              >
                Shop Collection
              </button>
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {img.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full border-2 border-white ${Slider === idx ? "bg-white" : "bg-gray-400/60"
                    } transition-all`}
                ></span>
              ))}
            </div>
          </div>
        </div>

        <div id="pack" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              LaVitrine Services
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto mb-12">
              LaVitrine offers complementary wrapping on all orders, carefully
              packaged in the Maison's iconic boxes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <img
                src={g1}
                alt="img"
                className="rounded-lg shadow-md object-cover w-full h-[500px]"
              />
              <img
                src={g2}
                alt="img"
                className="rounded-lg shadow-md object-cover w-full h-[500px]"
              />
              <img
                src={g3}
                alt="img"
                className="rounded-lg shadow-md object-cover w-full h-[500px]"
              />
            </div>
          </div>
          <div >
            <video
              className="w-full  max-w-[100vw] rounded-2xl shadow-xl mx-auto my-6 mt-20"

              autoPlay
              muted
              loop
            >
              <source
                src="https://vod.freecaster.com/louisvuitton/9eecd719-290c-4135-9ac9-d5a9de8d7955/QzAnLGY2JxkrmccHLgIIY9vx_11.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <Footer />
      </div>
    </>);
};

export default HomeExtend;
