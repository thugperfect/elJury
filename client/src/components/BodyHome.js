import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const BodyHome = ({ size }) => {
  return (
    <div className="w-full flex">
      {size.width > 900 ? (
        <>
          <Login />
          <div className="w-2/3 min-h-[700px] bg-slate-200 dark:bg-zinc-900 dark:text-white relative bg-backgroung-image bg-cover">
          
            <div className="absolute">
            <div className="">Browse Books</div>
            <Link to='/signup'><div className="">Join Us</div></Link>
            </div>
          
          </div>
        </>
      ) : (
        <div className="w-full min-h-[89vh] bg-slate-200 dark:bg-zinc-900 dark:text-white">
          <div className="">Browse Books</div>
          <Link to='/signup'><div className="">Join Us</div></Link>
          <Link to="/login">
            <div className="">Login</div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BodyHome;
