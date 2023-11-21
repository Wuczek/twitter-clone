import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";



const Navbar = () => {
  return (
    <nav className='flex justify-between'>
        <BsTwitter size={30} color='white'/>
        <BsFillPersonFill size={30} color='white'/>
    </nav>
  )
}

export default Navbar