import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [result,setResult] = useState("")

  const postData = (email,password) =>{
    setResult("")
    axios.post('http://localhost:5000/api/login',{
      email,password
    }).then(res=>{
      console.log(res)
    })

  
  }
  return (
    <div className=" w-1/3 min-h-[700px]  bg-zinc-800 flex flex-col justify-evenly items-center">
      <div></div>
      <div className="flex flex-col items-center w-full">
        <input
          type="text"
          name=""
          id=""
          className="w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none"
          placeholder="Enter your Email..."
          onChange={e=>setEmail(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          className="w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none"
          placeholder="Enter your Password..."
          onChange={e=>setPassword(e.target.value)}
        />
        <button className={(email && password) ? "w-4/5 h-[35px] rounded-md bg-orange-400 text-xl " :"w-4/5 h-[35px] rounded-md bg-orange-400 text-xl cursor-not-allowed"}
        disabled={(email && password)?false:true}
        onClick={()=>postData(email,password)}
        >
          Login
        </button>
      </div>
      <div className="text-gray-400">
        Don't Have an Account ?{" "}
        <Link className="text-orange-400" to="/signup">
          &nbsp;Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
