import React from "react";
import HeaderHome from "../components/HeaderHome";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate =useNavigate()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [result, setResult] = useState("");
  

  const postData = () => {
    setResult("");
    if (password !== confirm) {
      setResult("Enter correct Passwords");
      console.log(result);
      return;
    }
    try {
      axios
        .post("http://localhost:5000/api/register", {
          name,
          phone,
          email,
          password,
        })
        .then((res) => {
          if (res.data.msg) {
            setResult(res.data.msg);
          }
          if (res.data.status) {
            navigate('/login')
          }
         
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center min-h-[100vh]">
      <HeaderHome />

      <div className="h-[500px] md:h-[600px] flex flex-col items-center justify-evenly w-[350px] md:w-[500px] outline outline-1 outline-gray-700 rounded-xl mt-6  bg-zinc-900">
        <div className="text-2xl text-gray-400">Create Account</div>
        <div className="flex flex-col items-center w-full ">
          {result ? (
            <div className={"w-4/5  h-[55px] rounded-md mb-2 px-2 outline-none bg-red-500 text-white flex justify-center items-center"}>
              {result}
            </div>
          ) : (
            ""
          )}

          <input
            type="text"
            name=""
            id=""
            className="w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none"
            placeholder="Enter your Name..."
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            className="w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none"
            placeholder="Enter your Phone..."
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            name=""
            id=""
            className="w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none"
            placeholder="Enter your Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            className="w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none"
            placeholder="Enter your Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            className="w-4/5  h-[35px] rounded-md mb-2 px-2 outline-none"
            placeholder="Confirm Password..."
            onChange={(e) => setConfirm(e.target.value)}
          />
          <button
            className={
              name && email && password && confirm && phone
                ? "w-4/5 h-[35px] rounded-md bg-orange-400 text-xl"
                : "w-4/5 h-[35px] rounded-md bg-orange-400 text-xl cursor-not-allowed"
            }
            disabled={!(name && email && password && confirm && phone)}
            onClick={postData}
          >
            SignUp
          </button>
        </div>
        <div className="text-gray-400 flex justify-center">
          Already Have an Account ?{" "}
          <Link className="text-orange-400" to="/login">
            &nbsp;Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
