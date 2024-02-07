import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { useSetRecoilState } from "recoil";
//import { authState } from "../store/authState.ts";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    // Todo: Create a type for the response that you get back from the server
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      //toast(data.message);
      navigate("/login");
    } else {
      toast(data.message);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="Image w-2/4">
        <img
          className="h-screen"
          src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
        ></img>
      </div>
      <div className="Data  h-screen w-2/4 bg-[#ebeafb]  ">
        <div className="flex flex-col py-52 px-28">
          <h1 className="text-[#7671DE] font-extrabold text-5xl my-1">
            Sign up
          </h1>
          <h1 className="text-4xl font-bold ">to your account</h1>
          <label className="mt-5 font-bold">Email address</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email address"
            className="border-2 border-black mb-5 px-4 py-2"
          />
          <label className="font-bold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            className="border-2 border-black px-4 p-2"
          />
          <button
            onClick={handleSignup}
            className="bg-black text-white py-3 mt-10"
          >
            Sign Up
          </button>
          <ToastContainer />
          <div className="text-center my-2">
            Already Signed Up?
            <Link className="text-[#7671DE]" to="/login">
              Sign In
            </Link>
          </div>
          <Link className="text-[#7671DE] text-center" to="">
            Forgor password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
