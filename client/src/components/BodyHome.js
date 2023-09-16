import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const BodyHome = ({ size }) => {
  return (
    <div className="w-full flex">
      {size.width > 900 ? (
        <>
          <Login />
          <div className="w-2/3 min-h-[700px] bg-zinc-900 text-white relative bg-backgroung-image bg-cover flex justify-center items-center">
          
            <div className="md:flex">
            <Link to="/book"><div className=" w-[150px] flex justify-center items-center h-[40px] bg-blue-500 cursor-pointer mr-5 mb-5">Browse Books</div></Link>
            <Link to='/signup'><div className="pr-5 pl-5 pt-2 pb-2 bg-blue-500 cursor-pointer">Join Us</div></Link>
            </div>
          
          </div>
        </>
      ) : (
        // 
        <div className="w-full min-h-[700px] bg-zinc-900 text-white relative bg-backgroung-image bg-cover flex justify-center items-center">
          
        <div className="md:flex">
        <Link to="/book"><div className=" w-[150px] flex justify-center items-center h-[40px] bg-blue-500 cursor-pointer mr-5 mb-5">Browse Books</div></Link>
        <Link to='/signup'><div className="w-[150px] flex justify-center items-center h-[40px] bg-blue-500 cursor-pointer mr-5 mb-5">Join Us</div></Link>
       <Link to='/login'>
        <div className="w-[150px] flex justify-center items-center h-[40px] bg-blue-500 cursor-pointer">Login</div>
        </Link> 
        </div>
      
      </div>
      )}
    </div>
  );
};

export default BodyHome;
