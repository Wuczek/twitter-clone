import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [formSuccess, setFormSuccess] = useState({
    username: false,
    password: false,
  });

  const usernameErr = useRef();
  const passwordErr = useRef();

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const usernameValidator = (username) => {
      const regex = /^[a-zA-Z0-9]{3,}$/;
      return regex.test(username);
    };
    const newUsername = e.target.value;
    setUsername(newUsername);

    if (newUsername === null || newUsername === "") {
      usernameErr.current.innerHTML = "";
      document.getElementById("username").style.border = "1px solid white";
      setFormSuccess({ ...formSuccess, username: false });
    } else if (!usernameValidator(newUsername)) {
      usernameErr.current.innerHTML = "Invalid Username";
      document.getElementById("username").style.border = "1px solid red";
      setFormSuccess({ ...formSuccess, username: false });
    } else {
      usernameErr.current.innerHTML = "";
      document.getElementById("username").style.border = "1px solid white";
      setFormSuccess({ ...formSuccess, username: true });
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValidator = (password) => {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
      return regex.test(password);
    };

    setPassword(e.target.value);
    if (e.target.value === null || e.target.value === "") {
      passwordErr.current.innerHTML = "";
      document.getElementById("password").style.border = "1px solid white";
      setFormSuccess({ ...formSuccess, password: false });
    } else if (!passwordValidator(e.target.value)) {
      passwordErr.current.innerHTML = "Invalid password";
      document.getElementById("password").style.border = "1px solid red";
      setFormSuccess({ ...formSuccess, password: false });
    } else {
      passwordErr.current.innerHTML = "";
      document.getElementById("password").style.border = "1px solid white";
      setFormSuccess({ ...formSuccess, password: true });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formSuccess.username && formSuccess.password) {
      try {
        const response = await fetch("http://site26981.web1.titanaxe.com/php/login.php", {
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
          setUser({ username: data.username, role: data.role });
          navigate("/");
        }
      } catch {
        console.log("Something went wrong");
      }
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
          <div className="flex flex-col gap-1 relative">
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleUsernameChange}
              value={username}
              className="border border-white h-9 bg-blue-950 rounded-lg focus:bg-blue-900 outline-none pl-3"
              placeholder="Username"
              required
            />
            <p
              className="text-red-400 absolute -bottom-6"
              ref={usernameErr}
            ></p>
          </div>
          <div className="flex flex-col gap-1 relative">
            <input
              type="password"
              name="password"
              id="password"
              onChange={handlePasswordChange}
              value={password}
              className="border border-white h-9 bg-blue-950 rounded-lg focus:bg-blue-900 outline-none pl-3"
              placeholder="Password"
              required
            />
            <p
              className="text-red-400 absolute -bottom-6"
              ref={passwordErr}
            ></p>
          </div>
          {wrongCredentials && (
            <p className="text-red-400 text-center">
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
