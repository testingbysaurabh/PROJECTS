import { useEffect, useState } from "react";
import ResNavbar from "./ResNavbar";
import { useGlobalContext } from "../Utils/Contex/ApiContext"
import SearchSkeleton from './SearchSkeleton'
const SearchItem = () => {
  const [suggestion, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");
  console.log(suggestion);

  const { cdn, lat, long } = useGlobalContext();
  useEffect(() => {
     if (!query) {
    setSuggestions([]); 
    return;
  }
    const timerID = setTimeout(() => {
      async function getItem() {
        const res = await fetch(
          `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${lat}&lng=${long}&str=${query}&trackingId=undefined&includeIMItem=true`
        );
        const data = await res.json();
        // console.log(data);
        setSuggestions(data.data.suggestions || []);
      }

      getItem();
    }, 1200);

    return () => {
      clearTimeout(timerID);
    };
  }, [lat, long, query]);

  return (
    <div className="font-gilroy">
      <ResNavbar />
      <div className="w-[100%] flex justify-center ">
        <div className="relative  w-[60%] mt-20 ">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search for restaurants and food"
            className="border placeholder-gray-600 placeholder:font-bold border-gray-400 rounded w-[100%] caret-[#FE5005] h-[45px] px-3 outline-none"
          />

          {query ? (
            <i
              onClick={() => {
                setQuery("");
                setSuggestions([]);
              }}
              className="mr-1 fa-solid  fa-xmark absolute top-4 right-3 cursor-pointer"
            ></i>
          ) : (
            <i className="mr-1 fa-solid text-gray-600 fa-magnifying-glass absolute top-4 right-3"></i>
          )}
        </div>
      </div>
     
      {query && suggestion.length ===0  ? <SearchSkeleton/> : (
        <div className="mt-4">
          {suggestion.map((item, index) => {
            const part = item.highlightedText;
            const process = (text) => text.replace(/{{(.*?)}}/g, "<b>$1</b>");

            return (
              <div
                key={index}
                className="flex items-center gap-4 w-[57%] py-4 mx-auto hover:bg-[#F2F6FC]"
              >
                <img
                  src={cdn + item.cloudinaryId}
                  className="w-[70px] max-h-[70px] rounded"
                />
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: process(item.highlightedText),
                    }}
                  />
                  <p className="text-gray-400 text-[15px] font-medium">
                    {item.tagToDisplay}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    
    </div>
  );
};

export default SearchItem;
