import React from 'react'
// import { Context, useContext } from '../context';

const Landing = () => {
  // const { getters, setters } = useContext(Context);

  return (
    <div className='default-page-styling pt-[1em] pl-[15em]'>
      <h1 className='text-[3em] dark:text-white transition-all duration-100'>Hi there! I'm</h1>
      <div className="flex items-center justify-start">
        <div className="w-max">
        <h1 className="typing-text bg-teal-500  bg-opacity-20">Emily</h1>
        </div>
      </div>

      {/* <div className="flex items-center justify-start">
        <div className="w-max">
        <h1 className="typing-text">Hi there! I'm <span className='bg-teal-500 bg-opacity-20'>Emily</span></h1>
        </div>
      </div> */}
      <h1>yessur</h1>
    </div>
  )
}

export default Landing