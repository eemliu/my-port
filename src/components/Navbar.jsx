import React from 'react'
import titleIcon from '../assets/title-icon.png'
import { useNavigate } from 'react-router'
import { Context, useContext } from '../context';
import { WbSunnyIcon, DarkModeIcon } from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate();
  const { getters, setters } = useContext(Context);
  const [activeTab, setActiveTab] = [getters.activeTab, setters.setActiveTab];
  const tabs = ['About', 'Projects'];

  return (
    <div className='navbar'>
        <div
        className='hover:cursor-pointer hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30'
        onClick={() => {
          navigate('/')
          setActiveTab('')
        }}>
          <img src={titleIcon} className='mt-3 ml-5 w-12'alt="title-icon"/>
        </div>

        <div className='flex flex-row justify-center mr-3 items-center'>
          {tabs.map((tab, idx) => { 
            return (
              <div 
              key={idx}
              className={`nav-tabs ${idx === activeTab ? 'border-teal-500' : 'border-transparent hover:border-gray-20'}`}
              onClick={() => {
                setActiveTab(idx)
                console.log(activeTab);
                // navigate('/about')
              }}>
              <h3>{tab}</h3>
              </div>
            )
          })}
        </div>
        

    </div>
  )
}

export default Navbar