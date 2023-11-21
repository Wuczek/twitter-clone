import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className='flex justify-between'>
        <Link to="/"><BsTwitter size={30} color='white'/></Link>
        <Link to="/login"><BsFillPersonFill size={30} color='white'/></Link>
    </nav>
  )
}

export default Navbar