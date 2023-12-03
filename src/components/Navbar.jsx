import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isRegisterOrLoginPage =
    location.pathname === "/login" || location.pathname === "/register";

  const handleLogout = async () => {
    try {
      const response = await fetch("http://site26981.web1.titanaxe.com/php/logout.php", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        setUser(null);
        navigate("/");
      }
    } catch {
      console.log("Something went wrong");
    }
  };

  return (
    <nav className="flex justify-between">
      <Link to="/" className="self-start">
        <BsTwitter size={30} color="white" />
      </Link>
      {user ? (
        <>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <BsFillPersonFill size={20} color="white" />
              <p>{user.username}</p>
            </div>
            <button onClick={handleLogout}>Wyloguj</button>
          </div>
        </>
      ) : (
        <>
          {isRegisterOrLoginPage ? null : (
            <Link to="/login" className="self-end">
              <BsFillPersonFill size={30} color="white" />
            </Link>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
