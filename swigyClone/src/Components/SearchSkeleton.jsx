import React from "react";

const SearchSkeleton = () => {
  return (
   <div className=" w-[100%] mt-2 ">
     <div
      role="status"
      class="w-[60%] mx-auto p-4 space-y-4  divide-y divide-gray-200 rounded-sm  animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
    >
      <div class="flex items-center justify-between">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>

       <div class="flex items-center justify-between">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>

      
      <div class="flex items-center justify-between pt-4">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <div class="flex items-center justify-between pt-4">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <div class="flex items-center justify-between pt-4">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <div class="flex items-center justify-between pt-4">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        <div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
   </div>
  );
};

export default SearchSkeleton;
