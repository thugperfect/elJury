import React from "react";
import SingleBook from "./SingleBook";

const BookHome = () => {
  return (
    <div className="bg-white flex justify-center text-black dark:text-white dark:bg-black">
      <div className=" w-full md:w-5/6  p-4">
        <div className="flex gap-2">
          <div className="w-[100px] flex justify-center bg-blue-500 p-2 rounded-r-full rounded-l-full cursor-pointer">
            All Books
          </div>
          <div className="w-[100px] flex justify-center bg-blue-500 p-2 rounded-r-full rounded-l-full cursor-pointer">
            Ayurvedha
          </div>
          <div className="w-[100px] flex justify-center bg-blue-500 p-2 rounded-r-full rounded-l-full cursor-pointer">
            Unani
          </div>
          <div className="w-[100px] flex justify-center bg-blue-500 p-2 rounded-r-full rounded-l-full cursor-pointer">
            Siddha
          </div>
        </div>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full">
            <div className="name text-2xl mb-3">New Books</div>
            <div className="flex overflow-x-scroll horizontal ">
              <div className="flex">
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
                <SingleBook />
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHome;
