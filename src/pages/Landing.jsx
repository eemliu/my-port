import React from 'react'
import { Context, useContext } from '../context';

const Landing = () => {
  const { getters, setters } = useContext(Context);

  return (
    <div className='default-page-styling'>
      <div className="flex min-h-screen items-center justify-start  p-10">
        <div className="w-max">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-teal-500 pr-5 pb-3 text-6xl font-semibold text-darkFont dark:text-lightFont dark:border-r-lightFont">Hi there! I'm Emily </h1>
        </div>
      </div>
    </div>
  )
}

export default Landing