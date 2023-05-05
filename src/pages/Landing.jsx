import React from 'react'
// import { Context, useContext } from '../context';

const Landing = () => {
  // const { getters, setters } = useContext(Context);

  return (
    <div className='default-page-styling'>
      <div className='flex flex-col justify-start pr-[3em]'>
        <h1 className='text-[3em] dark:text-white transition-all duration-100 font-light'>Hi there! I'm</h1>
        <div className="flex items-center justify-start">
          <div className="w-max">
          <h1 className="typing-text bg-teal-500 dark:bg-[#A99D89] bg-opacity-20 dark:bg-opacity-20">Emily!</h1>
          </div>
        </div>
        <h1 className='mt-[1em] mb-[1em] text-darkFont dark:text-[#E0E0E0]'>I'm an aspiring <span className='border-b-4 border-teal-500 border-opacity-40 hover:border-none hover:bg-teal-500 transition-all duration-150'>UX engineer</span> and passionate about everything design!</h1>
{/* 
        <h1 className='mt-[1em] mb-[1em] text-darkFont dark:text-[#E0E0E0]'>I'm an aspiring <span className='bg-teal-500 bg-opacity-20 absolute h-[100%] mr-10'>UX engineer</span> and passionate about everything design!</h1> */}

        <h1 className='mt-[1em] mb-[1em] text-darkFont dark:text-[#E0E0E0]'>I'm an aspiring <a 
        href=""
        className='bg-teal-500 b-[2rem] w-[100%] h-[4em] hover:bottom-0 hover:h-[100%]
        '
        >UX Engineer</a> and passionate about everything design!</h1> 


        <h1 className='mt-[1em] mb-[1em] text-darkFont dark:text-white'>Penultimate B.Computer Science/B.Commerce student @ UNSW</h1>
      </div>
      {/* <div className="flex items-center justify-start">
        <div className="w-max">
        <h1 className="typing-text">Hi there! I'm <span className='bg-teal-500 bg-opacity-20'>Emily</span></h1>
        </div>
      </div> */}
    </div>
  )
}

export default Landing