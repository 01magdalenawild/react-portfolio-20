import React from 'react'
import GitHub from '../assets/github-mark-white.png'
import CSS from '../assets/CSS.png'
import Tailwinds from '../assets/Tailwinds.png'
import HTML from '../assets/HTML.png'

const Skills = () => {
    return (
        <div name='skills' classname='bg-[#4c2a50]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl text-gray-300 py-4'>Experience</p>
                    <p>//These are the technologies I've worked with/</p>
                </div>
                <div>
                    <img className='w-20 mx-auto' src="{HTML}" alt="HTML icon" />
                    <p>HTML</p>
                </div>
            </div>
        </div>
    )
}

export default Skills