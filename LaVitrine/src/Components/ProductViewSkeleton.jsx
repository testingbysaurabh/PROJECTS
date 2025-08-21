import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "./Footer";
import Navbar from "./Navbar";

function ProductViewSkeleton() {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen-[98vh] bg-gray-900 p-6 mt-18">
        <div className="max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 text-white animate-pulse">
          <div className="h-6 w-12 rounded bg-gray-700 flex items-center justify-center">
            <IoMdArrowRoundBack className="h-5 w-11 text-[#48A6A7]" />
          </div>
          {/* Images Skeleton */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-72 h-72 bg-gray-700 rounded-xl mb-4" />
            <div className="w-20 h-20 bg-gray-700 rounded border border-gray-600" />
          </div>
          {/* Info Skeleton */}
          <div className="flex-1 space-y-3">
            <div className="h-8 bg-gray-700 rounded w-2/3" />
            <div className="h-4 bg-gray-700 rounded w-full" />
            <div className="h-4 bg-gray-700 rounded w-5/6" />
            <div className="h-8 bg-emerald-950 rounded w-1/4" />
            <div className="h-6 bg-yellow-900 rounded w-1/5" />
            <div className="border-t border-gray-700 pt-4 mt-4 space-y-2">
              <div className="h-4 bg-gray-700 rounded w-1/2" />
              <div className="h-4 bg-gray-700 rounded w-1/3" />
              <div className="h-4 bg-gray-700 rounded w-1/3" />
              <div className="h-4 bg-gray-700 rounded w-1/2" />
            </div>
            <div className="h-10 bg-emerald-900 rounded mt-6" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ProductViewSkeleton