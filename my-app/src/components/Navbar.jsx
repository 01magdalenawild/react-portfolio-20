import React from 'react'
import { FaBars, } from 'react-icons/fa'
const Navbar = () => {
    return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#141a76] text-gray-300'>
    


    {/*menu*/}
<ul className='hidden md:flex'>
    <li>Home</li>
    <li>About</li>
    <li>Skills</li>
    <li>Projects</li>
    <li>Contact</li>
   
</ul>


{/*Hamburger*/}
<div className='md:hidden'>
<FaBars />
</div>

{/*mobile menu*/}
<ul className='hidden'>
<li>Home</li>
    <li>About</li>
    <li>Skills</li>
    <li>Projects</li>
    <li>Contact</li>
   
</ul>
       
       
       
       {/*social icons*/}
       <div className='hidden'>

       </div>
</div>
    )
}

export default Navbar