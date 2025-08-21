import React, { useState } from "react";
import AccordionsCard from "./AccordionsCard";
import Modals from "./Modals";
import { useGlobalContext } from "../Utils/Contex/ApiContext";

const Accordions = ({ title, data, nested ,isLast }) => {
  const [isExpandedAccordions, setIsExpandedAccordions] = useState(true);
const{setShowModals,showModals}=useGlobalContext()

  return (
    <div className={"w-[100%] pb-2 "+(nested ? (isLast ? "": "border-b  border-gray-300") : "") }>
     {showModals && <Modals onClose={() => setShowModals(false)} />}

      <div className=" flex justify-between">
        <p className={`mt-3 ml-3 ${nested ? "text-[15px] font-medium " : "text-[20px] font-bold"}`}>
          {title}({data.length})
        </p>

        <svg
          onClick={() => setIsExpandedAccordions(!isExpandedAccordions)}
          className={`mr-3 cursor-pointer mt-1 transition-transform duration-400 ${
            isExpandedAccordions ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 6.586L3.293 15.293l1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z" />
        </svg>
      </div>

      

      <div>
        {isExpandedAccordions && (
          <div>
            {data.map((item,index) => {
              return (
                <div key={index}>
                <AccordionsCard isLast={index==data.length-1}  info={item.card.info}/>
                
                </div>
              )
            })}
          </div>
        )}
      </div>


      
    </div>
  );
};

export default Accordions;
