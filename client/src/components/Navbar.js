import React, { useRef } from "react";
import { BsGear, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
const Navbar = () => {
  const searchRef = useRef()
  return (
    <div className="w-full h-[80px] bg-slate-100 dark:bg-zinc-800 text-gray-600 dark:text-white flex justify-between items-center px-2 md:px-5">
      <div className="text-2xl md:text-4xl flex items-center gap-3">
        <div>El Jury</div>
      </div>
      <div></div>
      <div></div>
      <div className="flex rounded-lg">
        <div onClick={()=>searchRef.current.focus()} className="w-[30px] out-r bg-white rounded-l-full dark:bg-zinc-950 outline outline-1 outline-slate-300 dark:outline-slate-500 flex justify-center items-center" ><AiOutlineSearch/></div>
        <input type="text" ref={searchRef} name="" id="" className="h-[30px] w-[200px] rounded-r-full dark:bg-zinc-950 outline outline-1 outline-slate-300 dark:outline-slate-500 px-2" />
      </div>
      <div className="flex gap-2 items-center">
        <BiSolidUserCircle className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
        <BsThreeDotsVertical className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-full outline outline-1 outline-slate-400 p-2" />
      </div>
    </div>
  );
};

export default Navbar;
