import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    // Todo: Create a type for the response that you get back from the server
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      //window.location = "/todos";
    } else {
      alert("invalid credentials");
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
      <div className="Data  h-screen w-2/4  ">
        <div className="flex flex-col py-52 px-28">
          <h1 className="text-[#7671DE] font-extrabold text-5xl my-1">
            Sign in
          </h1>
          <h1 className="text-4xl font-bold ">to your account</h1>
          <label className="mt-5 font-bold">Email address</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email address"
          />
          <label className="font-bold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
          <button
            onClick={handleLogin}
            className="bg-black text-white py-3 my-3"
          >
            Sign In
          </button>
          <div>
            Don't have an account?{" "}
            <Link className="text-[#7671DE]" to="/signup">
              Sign up
            </Link>
          </div>
          <Link className="text-[#7671DE]" to="">
            {" "}
            Forgor password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
