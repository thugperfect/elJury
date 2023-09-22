import React from "react";
import { Link } from "react-router-dom";
import HeaderHome from "../components/HeaderHome";
import { useState,useEffect } from "react";
const LoginPage = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [result,setResult] = useState('')
  const postData = (email,password) =>{
    axios.post('http://localhost:5000/api/login',{
      email,password
    }).then(res=>console.log(res))

  }
  return (
    <div className="flex flex-col items-center min-h-[100vh]">
      <HeaderHome />
      <div className="h-[500px] md:h-[600px] flex flex-col items-center justify-evenly w-[350px] md:w-[500px] outline outline-1 outline-gray-700 rounded-xl mt-6 bg-zinc-900">
        <div className="text-2xl text-gray-400"></div>
        <div className="flex flex-col items-center w-full ">
          <input
            type="text"
            name=""
            id=""
            className="w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none border border-1 border-gray-400"
            placeholder="Enter your Email..."
            onChange={e=>setEmail(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            className="w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none border border-1 border-gray-400"
            placeholder="Enter your Password..."
            onChange={e=>setPassword(e.target.value)}
          />
          <button className={(email && password) ? "w-4/5 h-[35px] rounded-md bg-orange-400 text-xl ":"w-4/5 h-[35px] cursor-not-allowed rounded-md bg-orange-400 text-xl"}
          disabled={!(email && password)}>
            Login
          </button>
        </div>
        <div className="text-gray-400 flex justify-center">
          Don't Have an Account ?{" "}
          <Link className="text-orange-400" to="/signup">
            &nbsp;Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
