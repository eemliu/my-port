import { React, useEffect } from 'react'
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
  }

  useEffect(() => { 
      initialiseDarkMode(setIsDarkMode);
  }, []);

  return (
    <div className='navbar-desktop navbar-tablet'>
        <div>

          <a href="#Home">
            <img
            src={titleIcon}
            className=' hover:cursor-pointer
            mt-3 ml-5 w-12 hover:w-15'
            alt="title-icon"
            // onClick={() => {
            //   // navigate('/')
            //   setActiveTab('')
            // }}
            />
          </a>
        </div>
        
        <div className='flex flex-row justify-center mr-3 items-center'>
          {tabs.map((tab, idx) => { 
            return (
              <a 
              key={idx}
              className={`tablet:hidden nav-tabs ${idx === activeTab ? 'border-teal-500' : 'border-transparent hover:border-gray-20'}`}
              onClick={() => {
                setActiveTab(idx)
                console.log(idx);
                console.log(activeTab);
                console.log(tab.label);
                // navigate(`/${tab.label}`)
              }}
              href={`#${tab.label}`}>
              <h3 className={`${idx === activeTab ? 'text-teal-500' : ''}`}>{tab.label}</h3>
              </a>
            )
          })}

          <div className='mode-hover'
          onClick={() => 
            changeDisplay(isDarkMode, setIsDarkMode)
          }
          >
            {isDarkMode ? (
            <CiLight 
            style={displayIconStyling}
            className='mode-icon'
            ></CiLight>
          ) : (<MdDarkMode
            style={displayIconStyling}
            className='mode-icon'
            ></MdDarkMode>)}
          </div>
        </div>
        
    </div>
  )
}

export default Navbar