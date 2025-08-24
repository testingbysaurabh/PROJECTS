import React, { useEffect } from "react";
import { contextCall } from "../Utlity/MyContext";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import toast from "react-hot-toast";
import NoProductInCart from "./NoProductInCartSimmer";
import { FaShoppingBag } from "react-icons/fa";


const Cart = () => {
  const { orignalData, cartData, setCartData } = contextCall();
  const navigate = useNavigate();
  const [obj] = useSearchParams();
  const quaryId = obj.get("id");

  useEffect(() => {
    if (quaryId) {
      const product = orignalData.find((item) => item.id == quaryId);
      const isAlreadyInCart = cartData.some(
        (item) => item.product.id === product.id
      );

      if (product && !isAlreadyInCart) {
        setCartData([...cartData, { product, quantity: 1 }]);
      }
    }
  }, [quaryId, orignalData]);


  const handleRemove = (id) => {
    const updatedCart = cartData.filter((item) => item.product.id !== id);
    setCartData(updatedCart);
    toast.success("Item removed from cart");
  };

  const handleIncrease = (id) => {
    const updatedCart = cartData.map((item) =>
      item.product.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartData(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cartData
      .map((item) =>
        item.product.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCartData(updatedCart);
  };

  const totalPrice = cartData.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (!cartData || cartData.length === 0) {
    return <NoProductInCart />;
  }

  function ProductPageView(id) {
    navigate(`/productpage?id=${id}`);
  }


  return (
    <div className=" bg-gray-900 min-h-screen py-10 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto bg-gray-200  rounded-lg shadow-lg p-6 space-y-8">
        {/* Back Button */}

        <div className="flex justify-between items-center">
          <button
            className="flex items-center gap-1 text-[#48A6A7] hover:text-[#36c4c6] transition mb-4 cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <IoMdArrowRoundBack size={22} />
            Back to Home
          </button>

          <button
            className="flex items-center gap-1 text-[#48A6A7] hover:text-[#36c4c6] transition mb-4 cursor-pointer"
            onClick={() => navigate("/home")}
          >
            <FaShoppingBag size={25} />
          </button>
        </div>



        {/* Cart Items */}
        <div className="grid gap-6">
          {cartData.map((item) => (
            <div
              key={item.product?.id}
              className="flex flex-col md:flex-row gap-6 border-b pb-6"
            >

              <img

                onClick={() => ProductPageView(item.product.id)}

                src={item.product?.images?.[0] || item.product?.thumbnail}
                alt={item.product?.title}
                className="w-full max-w-xs h-48 object-contain bg-gray-100 rounded-md p-2 mx-auto md:mx-0 cursor-pointer"
              />


              <div className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold cursor-pointer"
                  onClick={() => ProductPageView(item.product.id)}
                >{item.product?.title}</h2>
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

                {/* Quantity Controls */}
                <div className="flex gap-2 items-center mt-2">
                  <button
                    className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                    onClick={() => handleDecrease(item.product.id)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="text-sm font-semibold">{item.quantity}</span>
                  <button
                    className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                    onClick={() => handleIncrease(item.product.id)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item.product.id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Price Summary */}
        <div className="border border-gray-300 rounded-md p-4 self-end md:w-5/12 mx-auto">
          <h3 className="text-lg font-semibold border-b pb-2 mb-4 text-gray-800">
            PRICE DETAILS
          </h3>
          <div className="flex justify-between text-sm mb-2">
            <span>Price</span>
            <span>₹{(totalPrice).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Discount</span>
            <span className="text-green-600"> ₹{cartData.length}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-bold text-gray-700">
            <span>Total Amount</span>
            {/* <span>₹{totalPrice - cartData.length}</span> */}
            <span>₹{(totalPrice - cartData.length).toFixed(2)}</span>
          </div>
          <button
            onClick={() => navigate("/ShippingDetails")}
            className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded shadow cursor-pointer">
            Proceed to Buy
          </button>
        </div>
      </div>




      {/* Footer */}

      <footer className="bg-gray-900 text-white mt-10 rounded-2xl ">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">About LaVitrine</h2>
            <p className="text-sm text-gray-400">
              We bring you premium products with fast delivery & elegant design.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <Link to="/home" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-white">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

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
