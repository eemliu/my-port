import React from 'react'
import Navbar from '../components/Navbar'
import { Context, useContext } from '../context';

const Landing = () => {
  const { getters, setters } = useContext(Context);

  return (
    <div className='default-page-styling'>
      <Navbar/>
        <h3>
            this is my landing yay
        </h3>
    </div>
  )
}

export default Landing