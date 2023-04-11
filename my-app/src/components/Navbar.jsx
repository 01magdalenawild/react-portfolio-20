import React from 'react'
import { FaBars, } from 'react-icons/fa'
const Navbar = () => {
    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#141a76] text-gray-300'>
    


    {/*menu*/}
<div>
<ul className='flex'>
    <li>Home</li>
    <li>About</li>
    <li>Skills</li>
    <li>Projects</li>
    <li>Contact</li>
   
</ul>
</div>
{/*Hamburger*/}
<div>
<FaBars />
</div>
{/*mobile menu*/}
<div></div>
       
       
       
       {/*social icons*/}
       <div></div>
</div>
    )
}

export default Navbar