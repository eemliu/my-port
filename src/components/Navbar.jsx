import { React, useState } from 'react'
import titleIcon from '../assets/title-icon.png'
import { useNavigate } from 'react-router'
import { Context, useContext } from '../context';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { changeDisplay } from '../helpers';

const Navbar = () => {
  const navigate = useNavigate();
  const { getters, setters } = useContext(Context);
  const [activeTab, setActiveTab] = [getters.activeTab, setters.setActiveTab];
  const [isDarkMode, setIsDarkMode] = [getters.isDarkMode, setters.setIsDarkMode];

  const tabs = [{ label: 'About' }, { label: 'Projects' }];
  const displayIconStyling = { 
    color: `${isDarkMode ? '#5487DE' : '#d69c29'}`,
    width: '2em',
    height: '1.5em',
    marginBottom: '0.65em',
    marginLeft: '0.2em'
  }
  return (
    <div className='navbar'>
        <div>
          <img 
          src={titleIcon} 
          className=' hover:cursor-pointer mt-3 ml-5 w-12'
          alt="title-icon"
          onClick={() => {
            navigate('/')
            setActiveTab('')
          }}
          />
        </div>
        
        <div className='flex flex-row justify-center mr-3 items-center'>
          {tabs.map((tab, idx) => { 
            return (
              <div 
              key={idx}
              className={`nav-tabs ${idx === activeTab ? 'border-teal-500' : 'border-transparent hover:border-gray-20'}`}
              onClick={() => {
                setActiveTab(idx)
                console.log(idx);
                console.log(activeTab);
                navigate(`/${tab.label}`)
              }}>
              <h3>{tab.label}</h3>
              </div>
            )
          })}
          
          <div>
            {isDarkMode ? (<MdDarkMode 
          className='display-mode'
          style={displayIconStyling}
          onClick={() => 
            changeDisplay(isDarkMode, setIsDarkMode)
          }
          ></MdDarkMode>) : (<CiLight 
            className='display-mode'
            style={displayIconStyling}
            onClick={() => 
              changeDisplay(isDarkMode, setIsDarkMode)
            }
            ></CiLight>)}
          </div>
        </div>
        
    </div>
  )
}

export default Navbar