import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login.php", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${username}&password=${password}`,
      });

      const data = await response.json();

      if (!data.success) {
        setWrongCredentials(true);
      } else {
        setUser({ id: 1, name: "John", role: "admin" });
        navigate("/");
      }
    } catch {
      console.log("Something went wrong");
    }
  };

  return (
    <>
      <div className="border p-5 w-full max-w-xs rounded-xl mt-auto mx-auto">
        <h1 className="text-center text-2xl font-bold mb-8">Log in</h1>
        <form
          method="POST"
          className="flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleUsernameChange}
              value={username}
              className="border border-white h-9 bg-blue-950 rounded-lg focus:bg-blue-900 outline-none pl-3"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="password"
              name="password"
              id="password"
              onChange={handlePasswordChange}
              value={password}
              className="border border-white h-9 bg-blue-950 rounded-lg focus:bg-blue-900 outline-none pl-3"
              placeholder="Password"
            />
          </div>
          {wrongCredentials && (
            <p className="text-red-500 text-center">
              Wrong username or password
            </p>
          )}
          <button
            type="submit"
            className="border w-max mx-auto py-2 px-3 rounded-lg hover:bg-blue-900"
          >
            Log in
          </button>
        </form>
        <div className="mt-4">
          <Link to="/register">
            <p className="text-center text-gray-400 hover:underline">
              Don't have an account? Register now!
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
