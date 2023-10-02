
import React from "react";
import { Link } from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate  = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const url = process.env.REACT_APP_SERVER_URL ||  'http://localhost:5000/'

  const postData = (email, password) => {
    setResult("");
    axios
      .post(`${url}api/login`, {
        email,
        password,
      })
      .then((res) => {
        if (res.data.msg) {
          setResult(res.data.msg);
        }
        if (res.data.status) {
          navigate('/books')
        }
      });
  };
  return (
    <div className=" w-1/3 min-h-[700px]  bg-zinc-800 flex flex-col justify-evenly items-center">
      <div></div>
      <div className="flex flex-col items-center w-full">
        {result ? (
          <div className="w-4/5  h-[55px] rounded-md mb-2 px-2 outline-none bg-red-500 text-white flex justify-center items-center">
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
        <button
          className={
            email && password
              ? "w-4/5 h-[35px] rounded-md bg-orange-400 text-xl "
              : "w-4/5 h-[35px] rounded-md bg-orange-400 text-xl cursor-not-allowed"
          }
          disabled={email && password ? false : true}
          onClick={() => postData(email, password)}
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
