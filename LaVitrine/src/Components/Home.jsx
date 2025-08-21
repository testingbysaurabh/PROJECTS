import React, { useEffect, useState } from "react";
import { contextCall } from "../Utlity/MyContext";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import Footer from "./Footer";
import SkeletonCard from "../Components/SkeletonCard";
import toast from "react-hot-toast";
// import { LiaCartPlusSolid } from "react-icons/lia";
import { LuShoppingCart } from "react-icons/lu";
import Navbar from "./Navbar";

const Home = () => {
  const { orignalData, setOrignalData, data, setData, cartData, setCartData } = contextCall();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    async function getData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          setOrignalData(data.products);
          setData(data.products);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          toast.error("Server Not Found 404");
          setLoading(false);
        }
        console.error(error);
      }
    }
    getData();

    return () => {
      isMounted = false;
    };
  }, [setOrignalData, setData]);

  const viewBtnHandler = (id) => {
    navigate(`/productpage?id=${id}`);
  };

  const AddtocartBtnHandler = (id) => {
    const product = orignalData.find(item => item.id === id);
    const isAlreadyInCart = cartData.some(item => item.product.id === id);
    if (!isAlreadyInCart) {
      setCartData([...cartData, { product, quantity: 1 }]);
      toast.success(`${product.title} added to cart`);
    } else {
      toast('Product already in cart');
    }

  };

  return (
    <>
      <Navbar />
      <div className="grid gap-6 p-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-900 min-h-screen pb-20 mt-18">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
          : data.map(item => (
            <div key={item.id}>
              <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-50 object-contain cursor-pointer"
                  onClick={() => viewBtnHandler(item.id)}
                />
                <div className="p-4 text-white">
                  <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                  <div className="flex justify-between mb-2">
                    <p className="text-emerald-400 font-bold">₹ {item.price}</p>
                    <p className="text-yellow-400">⭐ {item.rating}</p>
                  </div>

                  <div className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg w-full mt-2 transition-colors duration-300 flex items-center justify-between">
                    <button
                      onClick={() => viewBtnHandler(item.id)}
                      className="flex items-center justify-between bg-emerald-500 rounded-lg hover:bg-emerald-700 px-3 cursor-pointer">
                      View &nbsp;<FaRegEye />
                    </button>

                    <button
                      onClick={() => AddtocartBtnHandler(item.id)}
                      className="flex items-center justify-between bg-emerald-500 rounded-lg hover:bg-emerald-700 px-2 cursor-pointer"
                    >
                      Add to &nbsp; <LuShoppingCart size={23} />

                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <Footer />
    </>
  );
};

export default Home;
