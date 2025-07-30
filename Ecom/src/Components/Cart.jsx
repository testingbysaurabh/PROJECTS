import React, { useEffect } from "react";
import { contextCall } from "../Utlity/MyContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Cart = () => {
  const { orignalData, cartData, setCartData} =
    contextCall();

  const Navigate = useNavigate();
  const [obj] = useSearchParams();
  const quaryId = obj.get("id");

  useEffect(() => {
    if (quaryId) {
      const product = orignalData.find((items) => items.id == quaryId);
      if (
        product &&
        !cartData.some((item) => item.product?.id === product.id)
      ) {
        setCartData([...cartData, { product }]);
      }
    }
  }, [quaryId, orignalData]);

  
  const handleRemove = (id) => {
    const updatedCart = cartData.filter((item) => item.product.id !== id);
    setCartData(updatedCart);
   
  };

  const totalPrice = cartData.reduce(
    (sum, item) => sum + (item.product?.price || 0),
    0
  );

  if (!cartData || cartData.length === 0) {
    return (
      <div className="text-center text-red-500 mt-10 text-xl">
        No products in cart
      
      </div>
    );

  }
  console.log(cartData.length)

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 space-y-8">

        {/* Back Button */}
        <button
          className="flex items-center gap-1 text-[#48A6A7] hover:text-[#36c4c6] transition"
          onClick={() => Navigate("/home")}
        >
          <IoMdArrowRoundBack size={22} />
          Back to Home
        </button>

        {/* Cart Items */}
        <div className="grid gap-6">
          {cartData.map((item, idx) => (
            <div
              key={item.product?.id || idx}
              className="flex flex-col md:flex-row gap-6 border-b pb-6"
            >
              <img
                src={item.product?.images?.[0] || item.product?.thumbnail}
                alt={item.product?.title}
                className="w-32 h-32 object-contain bg-gray-100 rounded-md p-2"
              />
              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold">{item.product?.title}</h2>
                <p className="text-sm text-gray-500">{item.product?.brand}</p>
                <p className="text-green-600 font-bold text-md">
                  ₹{item.product?.price}
                </p>
                <p className="text-yellow-500 text-sm">
                  ⭐ {item.product?.rating} / 5
                </p>
                <p className="text-sm text-gray-400">
                  Category: {item.product?.category}
                </p>
                <button
                  onClick={() => handleRemove(item.product.id)}
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Price Summary */}
        <div className="md:w-11/12 mx-auto border border-gray-300 rounded-md p-4 self-end ">
          <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-gray-800">
            PRICE DETAILS
          </h3>
          <div className="flex justify-between text-sm mb-2">
            <span>Price</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Discount</span>
            <span className="text-green-600">− ₹{cartData.length * 50}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-bold text-gray-700">
            <span>Total Amount</span>
            <span>₹{totalPrice - cartData.length * 50}</span>
          </div>
          <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded shadow">
            Proceed to Buy
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-10">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About */}
          <div>
            <h2 className="text-lg font-semibold mb-2">About LaVitrine</h2>
            <p className="text-sm text-gray-400">
              We bring you premium products with fast delivery & elegant design.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="text-sm text-gray-400 space-y-1">
              <li><a href="/home" className="hover:text-white">Home</a></li>
              <li><a href="/cart" className="hover:text-white">Cart</a></li>
              <li><a href="#" className="hover:text-white">Products</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-sm text-gray-400">📧 support@lavitrine.com</p>
            <p className="text-sm text-gray-400">📱 +91 9876543210</p>
            <p className="text-sm text-gray-400">📍 Delhi, India</p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-700">
          © {new Date().getFullYear()} LaVitrine. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Cart;
