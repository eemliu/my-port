import React from 'react'
import Navbar from '../components/Navbar'
import { Context, useContext } from '../context';

const Landing = () => {
  const { getters, setters } = useContext(Context);

  return (
    <div className='default-page-styling'>
      <Navbar/>
      {/* <div class="flex min-h-screen items-center justify-start bg-gradient-to-tr to-blue-400 from-green-500 p-10"> */}
      <div class="flex min-h-screen items-center justify-start  p-10">
        <div class="w-max">
        <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-teal-500 pr-5 text-6xl font-semibold text-darkFont dark:text-lightFont dark:border-r-lightFont">Hi there! I'm Emily </h1>
        </div>
      </div>
    </div>
  )
}

export default Landing