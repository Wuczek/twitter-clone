import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [inputData, setInputData] = useState("");
  const [responseData, setResponseData] = useState(null);

  const sendDataToPHP = () => {
    const phpURL = "http://localhost:8000/login.php";

    const dataToSend = { input: inputData };

    fetch(phpURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseData(data.processedData);
      })
      .catch((error) => {
        console.error("Błąd:", error);
      });
  };

  return (
    <>
      <div className="border p-5 w-full max-w-xs rounded-xl mt-auto mx-auto">
        <h1 className="text-center text-2xl font-bold mb-8">Create account</h1>
        <form action="" className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Enter your username</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setInputData(e.target.value)}
              className="border border-white h-9 bg-blue-950 rounded-lg focus:bg-blue-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setInputData(e.target.value)}
              className="border border-white h-9 bg-blue-950 rounded-lg focus:bg-blue-900"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Enter your password</label>
            <input
              type="password"
              name="password"
              id="password"
              className=" h-9 border-white border bg-blue-950 rounded-lg focus:bg-blue-900"
            />
          </div>
          <button
            type="submit"
            onClick={sendDataToPHP}
            className="border w-max mx-auto py-2 px-3 rounded-lg hover:bg-blue-900"
          >
            Login
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
