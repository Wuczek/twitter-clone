import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="h-screen grid place-content-center text-center">
      <h1 className="text-7xl">404</h1>
      <p className="text-4xl">Page not found</p>
      <Link to="/" className="mt-6 underline text-2xl">
        Go back to homepage
      </Link>
    </div>
  );
};

export default NoPage;
