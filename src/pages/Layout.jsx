import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useEffect,useState} from 'react'

const Layout = ({setIsLogged,isLogged}) => {

  return (
    <>
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
