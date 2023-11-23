import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useEffect,useState} from 'react'

const Layout = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:8000/checkSession.php", {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          setIsLogged(true);
        }
      } catch {
        console.log("Something went wrong");
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged}/>
      <Outlet isLogged={isLogged}/>
      <Footer />
    </>
  );
};

export default Layout;
