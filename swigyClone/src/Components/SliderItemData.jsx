import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Utils/Contex/ApiContext";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "./Skeleton";
import TopRes from "./TopRes";
import ResNavbar from "./ResNavbar";

const SliderItemData = () => {
  const navigate = useNavigate();
  const [itemData, setItemData] = useState([]);
  const [description, setDescription] = useState("");
  const { lat, long } = useGlobalContext();
  const { itemId, text } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&collection=${itemId}&tags=${text}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
        );
        const data = await res.json();

        // Set description
        setDescription(data.data?.cards?.[0]?.card?.card?.description || "");

        // Extract restaurants
        const restaurants = data.data?.cards?.slice(2) || [];
        setItemData(restaurants);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }

    // Call only if all params are available
    if (lat && long && itemId) {
      getData();
    }
  }, [lat, long, itemId, text]);

  return (
    <div>
      <ResNavbar />
      
      {/* Header */}
      <h2 className=" text-5xl font-bold ml-15 mt-25 capitalize">{text}</h2>
      <p className=" text-[20px] ml-14 mt-2 text-gray-600">{description}</p>
      {/* Loader or Content */}
      {itemData.length === 0 ? <Skeleton /> :
       <div className="w-[95%] ml-14 mt-10">
          <div className="grid grid-cols-4 gap-6">
          {itemData.map((item, index) => {
            const info = item?.card?.card?.info;
            if (!info) return null;

            return (
              <div
                key={info.id || index}
                onClick={() => navigate(`/menu/${info.id}`)}
                className="cursor-pointer"
              >
                <TopRes
                  size="lg"
                  resId={info.id}
                  cuisines={info.cuisines}
                  slaString={info.sla?.slaString || ""}
                  avgRating={info.avgRating}
                  name={info.name}
                  subHeader={info.aggregatedDiscountInfoV3?.subHeader || ""}
                  header={info.aggregatedDiscountInfoV3?.header || ""}
                  areaName={info.areaName}
                  imageId={info.cloudinaryImageId}
                />
              </div>
            );
          })}
        </div>
       </div>}
    </div>
  );
};

export default SliderItemData;
