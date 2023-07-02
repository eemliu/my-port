import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import blob from '../assets/blobs-1.png'
import portrait from '../assets/photo.jpeg'
import ProjectCard from '../components/ProjectCard';
import weemi from '../assets/weemi.png'

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
      console.log('yur');
  
  return (
    <div className='default-page-styling'>
      <div className='landing-layout'>
        <section className='landing-section show-on-scroll' id='Home'>
          <h1 className='landing-header'>
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
          href="#">front-end web-dev</a> and <a className='link-decor dark:text-[#E0E0E0] text-darkFont2 tablet:text-primary' href="">UI/UX design</a> and am constantly driven to experiment with new technologies to create beautiful, seamless applications!
          </h1>
          
          <h1 className='get-in-touch show-on-scroll'>Get in touch!</h1>
          <div className='buttons-container show-on-scroll'>
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
        </section>

        <section className='about-section show-on-scroll' id='About'>
          <h1 className='about-header'>/ about-me</h1>
          <div className='about-body'>
            <p>
              Hi I'm Emily! Welcome to my page :) 
              <br />
              I'm currently 3rd year Computer Science/Commerce student studying at UNSW, though I actually spent my first year at uni studying Vision Science and Clinical Optometry! 
              <br />
              <br />
              In my spare time, you can catch me rewatching <a href="" className='link-decor dark:text-[#E0E0E0] text-darkFont2'>AOT</a> for the 120398th time, finding cool new places to eat in Sydney or revamping my <a className='link-decor dark:text-[#E0E0E0] text-darkFont2' href="https://open.spotify.com/user/emilyyy496?si=dcf0986a334f4ee">Spotify</a> playlists!
            </p>
            <br />
            <img className='rounded-full object-cover tablet:h-[15em] tablet:w-[15em] laptop:h-[15em] laptop:w-[15em]' src={portrait} alt="" />
          </div>
        </section>

        <section className='projects-section  show-on-scroll' id='Projects'>
          <h1 className='animate-character dark:text-[#FAFDFF] text-darkFont2 font-medium tablet:text-[3em] laptop:text-[4em] tablet:text-center'>/ projects</h1>
          <div className='proj-body'>
            <ProjectCard source={weemi} header='Weemi'></ProjectCard>
            <ProjectCard></ProjectCard>

          </div>
          <p className='mt-[0.5em] dark:text-lightFont2 text-darkFont2 tablet:text-center laptop:text-[1.3em]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum asperiores nobis illum placeat temporibus quas natus, at beatae voluptas corporis, minus optio eaque commodi eos. Sit labore impedit dolorum placeat?
          </p>
        </section>

        <section className='blog-section flex flex-col show-on-scroll' id='Blog'>
          <h1 className='animate-character dark:text-[#FAFDFF] text-darkFont2 font-medium tablet:text-[2.9em] laptop:text-[4em] tablet:text-center'>/ blog-posts</h1>
          <p className='mt-[0.5em] dark:text-lightFont2 text-darkFont2 tablet:text-center laptop:text-[1.3em]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum asperiores nobis illum placeat temporibus quas natus, at beatae voluptas corporis, minus optio eaque commodi eos. Sit labore impedit dolorum placeat?
          </p>
        </section>
      </div>
    </div>
  )
}

export default Landing