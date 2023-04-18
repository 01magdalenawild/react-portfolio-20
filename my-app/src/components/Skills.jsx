import React from 'react'
import GitHub from '../assets/github-mark-white.png';
import CSS from '../assets/CSS.png';
import Tailwinds from '../assets/Tailwinds.png';
import HTML from '../assets/HTML.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#4c2a50]  text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>//These are the technologies I've worked with/</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text center py-8'>
                    <div className='shawdow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                        <img className='w-20 mx-auto' src="{HTML.png}" alt="HTML.png" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shawdow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                        <img className='w-20 mx-auto' src="{github-mark-white.png}" alt="Github icon" />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shawdow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                        <img className='w-20 mx-auto' src="{CSS.png}" alt="CSS icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shawdow-md shadow-[#040c16] hover:scale-110 duration-500'> 
                        <img className='w-20 mx-auto' src="{Tailwinds.png}" alt="Tailwinds icon" />
                        <p className='my-4'>Tailwinds</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills