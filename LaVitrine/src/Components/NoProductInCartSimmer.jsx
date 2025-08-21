import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Navbar from "./Navbar";

const NoProductInCart = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-gray-300 mt-[25vh]">
                <FaShoppingCart className="text-6xl text-gray-600 mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-4">Looks like you haven't added anything yet.</p>
                <Link
                    to="/home"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition duration-200"
                >
                    Shop Now
                </Link>
            </div>
        </>
    );
};

export default NoProductInCart;
