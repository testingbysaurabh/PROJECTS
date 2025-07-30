import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { contextCall } from "../Utlity/MyContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "./Footer";

const ProductView = () => {
  const [obj] = useSearchParams();
  const queryID = obj.get("id");
  const { orignalData } = contextCall();
  const Navigate = useNavigate();

  const viewDetail = orignalData.find((item) => item.id === Number(queryID));
  // console.log(viewDetail);

  if (!viewDetail) {
    return (
      <div className="text-red-500 text-center mt-10 text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div>
    <div className="min-h-screen-[98vh] bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 text-white">
        <button
          className="2px h-6 w-12 rounded bg-gray-700  text-[#48A6A7] flex items-center"
          onClick={() => {
            Navigate("/home");
          }}
        >
          <IoMdArrowRoundBack className="2px h-5 w-11" />
        </button>

        <div className="flex-1 flex flex-col items-center">
          <img
            src={
              Array.isArray(viewDetail.images) && viewDetail.images.length > 0
                ? viewDetail.images[0]
                : viewDetail.thumbnail
            }
            alt={viewDetail.title}
            className="w-72 h-72 object-contain rounded-xl bg-gray-700 p-2 shadow-md"
          />
          <img
            src={viewDetail.thumbnail}
            alt="Thumbnail"
            className="w-20 h-20 object-cover mt-4 rounded border border-gray-600"
          />
        </div>

        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-semibold">{viewDetail.title}</h1>
          <p className="text-gray-300">{viewDetail.description}</p>

          <div className="text-lg font-bold text-emerald-400">
            ₹{viewDetail.price}
          </div>
          <div className="text-sm text-yellow-400 font-semibold">
            ⭐ {viewDetail.rating} / 5
          </div>

          <div className="border-t border-gray-700 pt-4 mt-4 space-y-2 text-sm text-gray-300">
            <p>
              <span className="font-medium text-white">Brand:</span>{" "}
              {viewDetail.brand}
            </p>
            <p>
              <span className="font-medium text-white">Category:</span>{" "}
              {viewDetail.category}
            </p>
            {viewDetail.weight && (
              <p>
                <span className="font-medium text-white">Weight:</span>{" "}
                {viewDetail.weight}
              </p>
            )}
            {viewDetail.returnPolicy && (
              <p>
                <span className="font-medium text-white">Return Policy:</span>{" "}
                {viewDetail.returnPolicy}
              </p>
            )}
            {viewDetail.warrantyInformation && (
              <p>
                <span className="font-medium text-white">Warranty:</span>{" "}
                {viewDetail.warrantyInformation}
              </p>
            )}
          </div>

          {/* muje redux usge kerna hai */}
          <button
            className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-md shadow-md transition duration-300 w-full"
            onClick={() => {
              Navigate(`/Cart?id=${queryID}`)
              
            }}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductView;
