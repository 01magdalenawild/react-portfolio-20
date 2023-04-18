import React from 'react'
import Notetaker from '../assets/projects/Notetaker.png';
import Password from '../assets/projects/Password.png'
import Quiz from '../assets/projects/Quiz.png'
import Project1 from '../assets/projects/Project1.png'
import Project2 from '../assets/projects/Project2.png'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#4c2a50] '>
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
        <p className='py-6'>// Check out some of my work</p>
                  
    </div>

<div style={{backgroundImage:'url()'}}
className='grid sm:grid-cols-6 md:grid-cols-3 gap-4'>
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content div'>
    <div>
  <img src={ Notetaker } alt="notetaker Image" />
  <p>Notetaker</p>
  <a href="links" />
</div>

<div>
  <img src={ Password } alt="password Image" />
  <p>Password Generator</p>
  <a href="links" />
</div>
<div>
  <img src={ Quiz} alt="Quiz Image" />
  <p>Quiz </p>
  <a href="links" />
</div>
<div>
  <img src={ Project1 } alt="project Image" />
  <p>Project 1</p>
  <a href="links" />
</div>
<div>
  <img src={ Project2 } alt="project Image" />
  <p>Project 2</p>
  <a href="links" />
</div>
       <div>
            <span>

            </span>
            <div className='pt-8 text-center'>
                
                <a href="/">
                    <button></button>
                </a>
                <a href="/">
                    <button></button>
                </a>
            </div>
        </div>
    </div>
</div>

</div>
    </div>
  )
}

export default Work