import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLogged, setIsLogged }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/logout.php", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        setIsLogged(false);
        navigate("/");
      }
    } catch {
      console.log("Something went wrong");
    }
  };

  return (
    <nav className="flex justify-between">
      <Link to="/">
        <BsTwitter size={30} color="white" />
      </Link>
      {isLogged ? (
        <>
          <div>
            <p>Tomek</p>
            <button onClick={handleLogout}>Wyloguj</button>
          </div>
        </>
      ) : (
        <Link to="/login">
          <BsFillPersonFill size={30} color="white" />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
