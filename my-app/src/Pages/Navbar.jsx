import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";



const Navbar = () => {
    const [openMenu, setOpenMenu]= useState(false)
  return (
    <div>
        <IoMdMenu onClick={()=>setOpenMenu(!openMenu)} className='text-2xl' />
      <ul className={`bg-cyan-400 inline-block absolute p-4 ${openMenu ? "duration-1000":"-mt-60 duration-1000"}`} >
        <li>Home</li>
        <li>About</li>
        <li>Blogs</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Navbar
