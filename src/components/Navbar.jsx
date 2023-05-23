import { React, useState, useEffect } from 'react'
import titleIcon from '../assets/title-icon.png'
import { useNavigate } from 'react-router'
import { Context, useContext } from '../context';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { changeDisplay, initialiseDarkMode } from '../helpers';

const Navbar = () => {
  const navigate = useNavigate();
  const { getters, setters } = useContext(Context);
  const [activeTab, setActiveTab] = [getters.activeTab, setters.setActiveTab];
  const [isDarkMode, setIsDarkMode] = [getters.isDarkMode, setters.setIsDarkMode];

  const tabs = [{ label: 'About' }, { label: 'Projects' }, { label: 'Blog'}];
  const displayIconStyling = { 
    color: `${isDarkMode ? '#d69c29' : '#5487DE'}`,
    width: '2em',
    height: '1.5em',
  }

  useEffect(() => { 
      initialiseDarkMode(isDarkMode, setIsDarkMode);
  }, []);

  return (
    <div className='navbar-desktop navbar-tablet'>
        <div>
          <img 
          src={titleIcon} 
          className=' hover:cursor-pointer 
          mt-3 ml-5 w-12 hover:w-15'
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
              className={`tablet:hidden nav-tabs ${idx === activeTab ? 'border-teal-500' : 'border-transparent hover:border-gray-20'}`}
              onClick={() => {
                setActiveTab(idx)
                console.log(idx);
                console.log(activeTab);
                navigate(`/${tab.label}`)
              }}>
              <h3 className={`${idx === activeTab ? 'text-teal-500' : ''}`}>{tab.label}</h3>
              </div>
            )
          })}

          <div className='hover:bg-slate-400 hover:bg-opacity-20 pr-[0.2em] pt-[0.3em] pl-[0.2em] pb-[0.62em] rounded-full justify-center transition-all duration-100 hover:cursor-pointer'
          onClick={() => 
            changeDisplay(isDarkMode, setIsDarkMode)
          }
          >
            {isDarkMode ? (
            <CiLight 
            style={displayIconStyling}
            ></CiLight>
          ) : (<MdDarkMode
            style={displayIconStyling}
            ></MdDarkMode>)}
          </div>
        </div>
        
    </div>
  )
}

export default Navbar