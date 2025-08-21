import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartHover = ({ timeID, setter }) => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const cartSliceData = useSelector((store) => store.cart);

  useEffect(() => {
    let ans = 0;
    cartSliceData.data.forEach((item) => {
      ans += item.quantity * (Number(item.price || item.defaultPrice) / 100);
    });
    setTotal(ans);
  }, [cartSliceData]);

  return (
    <div
      onMouseEnter={() => {
        if (timeID) clearTimeout(timeID);
      }}
      onMouseLeave={() => {
        setter(false);
      }}
      className="absolute w-[320px] z-10 top-[65px] right-[0px] bg-white border-t-2 border-[#FF5200]  shadow-2xl p-4 transition-all duration-300"
    >
      <div className="absolute right-10  -top-[10px] w-4 h-4 bg-white rotate-45 border-t-2 border-l-2 border-[#FF5200] z-[-1]"></div>

      {cartSliceData.data.length === 0 ? (
        <div className="text-center p-4">
          <h1 className="font-bold text-2xl mb-2 text-gray-700">
            Cart is Empty
          </h1>
          <p className="text-sm text-gray-500">
            Good food is always cooking! Go ahead, order some yummy items.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
            {cartSliceData.data.map((item, index) => (
              <div
                key={item.id || index}
                className="flex justify-between items-center  pb-1"
              >
                <p className="text-sm font-medium text-gray-700">
                  {item.name.length > 22
                    ? item.name.slice(0, 22) + "..."
                    : item.name}{" "}
                  × {item.quantity}
                </p>
                <span className="text-sm font-semibold text-gray-800">
                  ₹
                  {(
                    (Number(item.price || item.defaultPrice) / 100) *
                    item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t pt-3 flex justify-between items-start">
            <div>
              <h2 className="text-sm font-semibold text-gray-800">Subtotal</h2>
              <p className="text-xs text-gray-500">Extra charges may apply</p>
            </div>
            <p className="text-sm font-bold text-gray-800">
              ₹{total.toFixed(2)}
            </p>
          </div>

          <button
            onClick={() => navigate("/cart")}
            className="w-full cursor-pointer mt-2 py-2 bg-[#FF5200] hover:bg-[#e64b00] text-white font-semibold rounded transition-all duration-200"
          >
            CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default CartHover;
