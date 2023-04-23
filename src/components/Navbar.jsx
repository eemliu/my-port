import React from 'react'
import titleIcon from '../assets/title-icon.png'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <div
        onClick={() => {
          navigate('/')
        }}>
          <img src={titleIcon} className='mt-3 ml-5 w-12'alt="title-icon"/>
        </div>
    </div>
  )
}

export default Navbar