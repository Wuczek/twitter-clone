import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {useEffect,useState} from 'react'

const Layout = ({setUser,user}) => {

  return (
    <>
      <Navbar user={user} setUser={setUser}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
