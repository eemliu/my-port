import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Landing = () => {

  return (
    <div className='default-page-styling'>
      <div className='landing-layout'>
        <h1 className=' landing-header'>
          Hi there! I'm</h1>
        <div className="flex items-center justify-start tablet:justify-center w-[100%]">
          <div className=" flex tablet:justify-center
          ">
          <h1 className="typing-text ">Emily!</h1>
          </div>
        </div>
        
        <h1 className='landing-subHeader'>Aspiring UX Engineer &#183; Design Enthusiast</h1>

        <h1 className='landing-body'>I'm a penultimate B.Computer Science/B.Commerce student at UNSW <span className='dark:text-[#E0E0E0] text-darkFont2 tablet:text-primary' href="">Engineer</span>  I'm a software engineer and artist based in Toronto. I have great interest in full-stack development, artificial intelligence, human-computer interactions, and everything in between.</h1>
        
        <h1 className='text-[#CCD6F6]'>
       
        </h1>
      </div>
     
    </div>
  )
}

export default Landing