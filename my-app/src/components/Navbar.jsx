import React,{useState} from 'react'
import { FaBars, } from 'react-icons/fa'
const Navbar = () => {
    const [nav, setNav]= useState(false)
    const handleClick = () => setNav(!nav)
    
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
<div onClick={handleClick} className='md:hidden z-10'>
<FaBars />
</div>

{/*mobile menu*/}
<ul className={!nav ? 'hidden' : 'absolute top-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items center'}>
<li>Home</li>
    <li className='py-6 text-4xl '>About</li>
    <li className='py-6 text-4xl'>Skills</li>
    <li className='py-6 text-4xl'>Projects</li>
    <li className='py-6 text-4xl'>Contact</li>
   
</ul>
       
       
       
       {/*social icons*/}
       <div className='hidden'>

       </div>
</div>
    )
}

export default Navbar