import React, { useContext, useEffect } from "react";
import { contextCall } from "../Utlity/MyContext";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import Footer from "./Footer";

const Home = () => {
  const { orignalData, setOrignalData, data, setData, val, setVal } =
    contextCall();

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setOrignalData(data.products);
      setData(data.products);
    }
    getData();
  }, []);

  return (
    <>
      <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-900 min-h-screen pb-20">
        {data.length > 0 &&
          data.map((item) => {
            return (
              <Link to={`/productpage?id=${item.id}`} key={item.id}>
                <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-50 object-contain"
                  />
                  <div className="p-4 text-white">
                    <h2 className="text-lg font-semibold mb-1">{item.title}</h2>

                    <div className="flex justify-between mb-2">
                      <p className="text-emerald-400 font-bold">
                        ₹ {item.price}
                      </p>
                      <p className="text-yellow-400">⭐ {item.rating}</p>
                    </div>

                    <button
                      // onClick={cartBtnhandler}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg
                  w-full mt-2 transition-colors duration-300 flex items-center justify-between"
                    >
                      {/* 🛒 Add to Cart */}
                      view
                      <FaRegEye />
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <Footer />
    </>
  );
};

export default Home;
