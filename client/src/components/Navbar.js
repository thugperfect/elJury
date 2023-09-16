import React, { useRef } from "react";
import { BsGear, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUserCircle,BiMailSend } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import {useNavigate} from "react-router-dom"
import logo from '../images/eljurylogo.jpg'
const Navbar = () => {
  const searchRef = useRef()
  const navigate =  useNavigate()
  return (
    <div className="w-full h-[80px] bg-zinc-800  text-white flex justify-between items-center px-2 md:px-5">
      <div className="text-2xl md:text-4xl flex items-center gap-3">

        <div onClick={()=>navigate('/book')}  className="cursor-pointer flex items-center gap-2">
          <img src={logo} alt="none" className="w-[50px] h-[50px] rounded-full hidden md:block" />
          El Jury</div>
      </div>
      <div></div>
      <div></div>
      <div className="flex rounded-lg">
        <div onClick={()=>searchRef.current.focus()} className="w-[30px] out-r  rounded-l-full bg-zinc-950 outline outline-1 outline-slate-500 flex justify-center items-center" ><AiOutlineSearch/></div>
        <input type="text" ref={searchRef} name="" id="" className="h-[30px] w-[150px] md:w-[200px] rounded-r-full bg-zinc-950 outline outline-1 outline-slate-500 px-2" />
      </div>
      <div className="flex gap-2 items-center">
        <BiSolidUserCircle className="cursor-pointer w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
        <BsThreeDotsVertical className="cursor-pointer w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-full outline outline-1 outline-slate-400 p-2" />
        <FcAbout className="cursor-pointer w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
      </div>
    </div>
  );
};

export default Navbar;
