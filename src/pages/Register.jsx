import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import bcrypt from "bcryptjs";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [formSuccess, setFormSuccess] = useState({
    username: false,
    password: false,
    confirmedPassword: false,
  });
  const usernameErr = useRef();
  const passwordErr = useRef();
  const confirmedPasswordErr = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formSuccess.username &&
      formSuccess.password &&
      formSuccess.confirmedPassword
    ) {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const response = await fetch("http://localhost:8000/register.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: hashedPassword,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch {
        console.log("Something went wrong");
      }
    }
  };

  const handleUsernameChange = async (e) => {
    const usernameValidator = (username) => {
      const regex = /^[a-zA-Z0-9]+$/;
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

  const handleConfirmedPasswordChange = (e) => {
    setConfirmedPassword(e.target.value);
    if (e.target.value === null || e.target.value === "") {
      confirmedPasswordErr.current.innerHTML = "";
      document.getElementById("confirmedPassword").style.border =
        "1px solid white";
      setFormSuccess({ ...formSuccess, confirmedPassword: false });
    } else if (e.target.value !== password) {
      confirmedPasswordErr.current.innerHTML = "Passwords do not match";
      document.getElementById("confirmedPassword").style.border =
        "1px solid red";
      setFormSuccess({ ...formSuccess, confirmedPassword: false });
    } else {
      confirmedPasswordErr.current.innerHTML = "";
      document.getElementById("confirmedPassword").style.border =
        "1px solid white";
      setFormSuccess({ ...formSuccess, confirmedPassword: true });
    }
  };

  return (
    <>
      <div className="border p-5 w-full max-w-xs rounded-xl mt-auto mx-auto">
        <h1 className="text-center text-2xl font-bold mb-8">Create account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
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
            <p className="text-red-400 absolute top-9" ref={usernameErr}></p>
          </div>
          <div className="flex flex-col gap-1 relative">
            <input
              type="password"
              name="password"
              id="password"
              onChange={handlePasswordChange}
              value={password}
              className=" h-9 border-white border bg-blue-950 rounded-lg focus:bg-blue-900 outline-none pl-3"
              placeholder="Password"
              required
            />
            <p className="text-red-400 absolute top-9" ref={passwordErr}></p>
          </div>
          <div className="flex flex-col gap-1 relative">
            <input
              type="password"
              name="confirmedPassword"
              id="confirmedPassword"
              onChange={handleConfirmedPasswordChange}
              value={confirmedPassword}
              className=" h-9 border-white border bg-blue-950 rounded-lg focus:bg-blue-900 outline-none pl-3"
              placeholder="Confirm password"
              required
            />
            <p
              className="text-red-400 absolute top-9"
              ref={confirmedPasswordErr}
            ></p>
          </div>
          <button
            type="submit"
            className="border w-max mx-auto py-2 px-3 rounded-lg hover:bg-blue-900"
          >
            Register
          </button>
        </form>
        <div className="mt-4">
          <Link to="/login">
            <p className="text-center text-gray-400 hover:underline">
              Already have an account? Login now!
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
