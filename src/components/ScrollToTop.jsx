import { React, useState } from 'react'
import blobUpLight from '../assets/scroll-up1.png'
import blobUpDark from '../assets/scroll-up2.png'
import { Context, useContext } from '../context';

const ScrollToTop = () => {
  const { getters } = useContext(Context);
  const [isDarkMode] = [getters.isDarkMode];
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
	  const scrolled = document.documentElement.scrollTop;
	  if (scrolled > 300){
	    setVisible(true)
	  } else if (scrolled <= 300){
	    setVisible(false)
	  }
	};
  
  const scrollUp = () =>{
	  window.scrollTo({
	    top: 0, 
	    behavior: 'smooth'
	  });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return (
	<div>  
      <img src={isDarkMode ? blobUpDark : blobUpLight} 
      className='scroll-up'
      onClick={scrollUp} 
      style={{display: visible ? 'inline' : 'none'}}
      alt="" />
	  </div>
  )
}

export default ScrollToTop