import React, { useState } from "react";

import Login from "../pages/Login";

const BodyHome = ({ size }) => {

  return (
    
    <div className="w-full flex">
      {size.width>1000 ?
   <>
  <Login/>
   <div className="w-2/3 min-h-[700px] bg-slate-200 dark:bg-zinc-900 dark:text-white">
        <div className="">Browse Books</div>
        <div className="">Join Us</div>

   </div>
 </>:  <div className="w-full min-h-[89vh] bg-slate-200 dark:bg-zinc-900 dark:text-white">

 <div className="">Browse Books</div>
        <div className="">Join Us</div>
        <div className="">Login</div>
 </div>
      }
   
    </div>
  );
};

export default BodyHome;
