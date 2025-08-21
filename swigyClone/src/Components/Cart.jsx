import React, { useEffect, useState } from 'react';
import ResNavbar from './ResNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, removeItems } from '../Utils/store/CartSlice';

const Cart = () => {
  const cartSliceData = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let ans = 0;
    cartSliceData.data.forEach((item) => {
      ans += item.quantity * (Number(item.price || item.defaultPrice) / 100);
    });
    setTotal(ans);
  }, [cartSliceData]);

  return (
    <div className="bg-gray-50   min-h-screen">
      <ResNavbar />

      <div className="max-w-4xl mx-auto pt-25  px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

        {cartSliceData.data.length === 0 ? (
          <div className="text-center p-10 bg-white rounded shadow">
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
            <p className="text-gray-400">Looks like you haven’t added anything yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {cartSliceData.data.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded shadow"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {item.name.length > 30 ? item.name.slice(0, 30) + '...' : item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    ₹{((Number(item.price || item.defaultPrice) / 100) * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      dispatch(addItems({ itemId: cartSliceData.id, info: item }))
                    }
                    className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded hover:bg-green-600 transition"
                  >
                    +
                  </button>
                  <span className="text-md font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(removeItems({ id: item.id }))}
                    className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    −
                  </button>
                </div>
              </div>
            ))}

            {/* Grand Total */}
            <div className="flex justify-between items-center bg-white p-4 rounded shadow border-t-2 border-orange-400">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Grand Total</h2>
                <p className="text-sm text-gray-500">Inclusive of all taxes</p>
              </div>
              <p className="text-xl font-bold text-orange-600">₹{total.toFixed(2)}</p>
            </div>

            {/* Checkout button */}
            <div className="text-right">
              <button className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition-all">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
