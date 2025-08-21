import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearItems } from "../Utils/store/CartSlice";

const Modals = ({ onClose }) => {
   const dispatch = useDispatch()
  useEffect(() => {
    // Stop background scroll when modal is open
    document.body.classList.add("overflow-hidden");

    return () => {
      // Re-enable scroll on close
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 ">
        {/* <div className="absolute  inset-0 " /> */}

      <div className=" p-6  w-[40%]  text-center bg-white border-2 border-gray-300 shadow-sm" >
        <p className="text-xl font-semibold  mb-4">
            Item is from a different restaurant. Empty the cart to add it.
        </p>
    <div className="flex items-center justify-center gap-8">
        <button
          onClick={onClose}
          className="cursor-pointer  border-1 px-4 py-2 rounded hover:bg-gray-300 hover:border-gray-400"
        >
          Cancel
        </button>

        <button
          onClick={()=>{
            dispatch(clearItems())
            onClose();
          }}
          className="cursor-pointer bg-[#FF5200] text-white px-4 py-2 rounded hover:bg-[#FF9100]"
        >
          Empty
        </button>

        </div>
      </div>
    </div>
  );
};

export default Modals;
