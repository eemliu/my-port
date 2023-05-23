import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import blob from '../assets/blobs-1.png'

const Landing = () => {
  const callback = function (entries) {
    entries.forEach((entry) => {
      console.log(entry);
  
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn");
      } else {
        entry.target.classList.remove("animate-fadeIn");
      }
    });
  };
  
  const observer = new IntersectionObserver(callback);
  
  const targets = document.querySelectorAll(".show-on-scroll");
  targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
  });
  
  return (
    <div className='default-page-styling'>
      <div className='tablet:hidden'>
        <img classname='blob-monster' src={blob} alt="" />
      </div>

      <div className='landing-layout'>
        <h1 className=' landing-header show-on-scroll'>
          Hi there! I'm</h1>
        <div className="flex items-center justify-start tablet:justify-center w-[100%] show-on-scroll">
          <div className=" flex tablet:justify-center
          ">
          <h1 className="typing-text ">Emily!</h1>
          </div>
        </div>
        
        <h1 className='landing-subHeader show-on-scroll'>Aspiring UX Engineer &#183; Design Enthusiast</h1>

        <h1 className='landing-body show-on-scroll'>I'm a penultimate student studying B.Computer Science/B.Commerce student at <a className='link-decor dark:text-[#E0E0E0] text-darkFont2 tablet:text-primary' href="https://www.linkedin.com/school/unsw/?originalSubdomain=au"
        target="_blank">UNSW</a>. I'm passionate about <a className='link-decor dark:text-[#E0E0E0] text-darkFont2 tablet:text-primary whitespace-pre-wrap'
        href="#">front-end web-dev</a> and <a className='link-decor dark:text-[#E0E0E0] text-darkFont2 tablet:text-primary' href="">UI/UX design</a> and am constantly driven to experiment and develop with new technologies to create beautiful, seamless applications. 
        </h1>
        
        <h1 className='get-in-touch show-on-scroll'>Get in touch!</h1>
        <div className='flex flex-row space-x-2 laptop:justify-start tablet:justify-center tablet:w-[100%] laptop:mb-[2em] tablet:mb-[1em]
        show-on-scroll'>
          <a href='https://www.linkedin.com/in/emily-liu-28b040229/' target="_blank">
            <LinkedInIcon className='get-in-touch-buttons' 
            fontSize='large'
            />
          </a>
          <a href='https://github.com/eemliu' target="_blank">
            <GitHubIcon className='get-in-touch-buttons'
            fontSize='large'/>
          </a>
          <a href="mailto: emilyliu496@gmail.com" target="_blank">
            <EmailIcon className='get-in-touch-buttons'
            fontSize='large'/>
          </a>
        </div>

        <div className='about-section flex flex-col show-on-scroll'>
          <h1 className=' dark:text-[#FAFDFF] text-darkFont2 font-medium text-[3em] tablet:text-center show-on-scroll'>/ about-me</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum asperiores nobis illum placeat temporibus quas natus, at beatae voluptas corporis, minus optio eaque commodi eos. Sit labore impedit dolorum placeat?
          </p>
        </div>

        <h1 className=' show-on-scroll'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dolor qui obcaecati architecto porro ex error fugit molestiae assumenda alias, dolore praesentium recusandae hic vitae, excepturi temporibus laborum? Explicabo.</h1>

        <br />

        <h1 className='show-on-scroll'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dolor qui obcaecati architecto porro ex error fugit molestiae assumenda alias, dolore praesentium recusandae hic vitae, excepturi temporibus laborum? Explicabo.</h1> 
        
        <br />

        <h1 className='show-on-scroll'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dolor qui obcaecati architecto porro ex error fugit molestiae assumenda alias, dolore praesentium recusandae hic vitae, excepturi temporibus laborum? Explicabo.</h1> 
        
        <br />

        <h1 className='flex show-on-scroll'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dolor qui obcaecati architecto porro ex error fugit molestiae assumenda alias, dolore praesentium recusandae hic vitae, excepturi temporibus laborum? Explicabo.</h1> 
        
        <br />
        
        <h1 className='show-on-scroll'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dolor qui obcaecati architecto porro ex error fugit molestiae assumenda alias, dolore praesentium recusandae hic vitae, excepturi temporibus laborum? Explicabo.</h1> 
        
        <br />

        <h1 className='show-on-scroll'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dolor qui obcaecati architecto porro ex error fugit molestiae assumenda alias, dolore praesentium recusandae hic vitae, excepturi temporibus laborum? Explicabo.</h1> 
        
        <br />

        <h1 className='show-on-scroll'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dolor qui obcaecati architecto porro ex error fugit molestiae assumenda alias, dolore praesentium recusandae hic vitae, excepturi temporibus laborum? Explicabo.</h1> 
        
        <br />

        <h1 className='show-on-scroll'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dolor qui obcaecati architecto porro ex error fugit molestiae assumenda alias, dolore praesentium recusandae hic vitae, excepturi temporibus laborum? Explicabo.</h1>
      </div>
    
    </div>
  )
}

export default Landing