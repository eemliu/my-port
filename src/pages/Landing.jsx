import { React, useRef } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import portrait from '../assets/photo.jpeg'
import ProjectCard from '../components/ProjectCard';
import weemi from '../assets/weemi.png'
import travel from '../assets/travel.png'
import blobs from '../assets/blobs-1.png'
import ContactButtons from '../components/ContactButtons';
import resume from '../assets/resume-2023.pdf'

const Landing = () => {
  // Scroll content into view 
  const callback = function (entries) {
    entries.forEach((entry) => {
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

  // Smooth scroll
  const Landing = useRef(null);
  const About = useRef(null);
  const Projects = useRef(null);
  const Blogs = useRef(null);
  const footer = useRef(null);
  function scrollDown (sectionName) {
    console.log(sectionName)
    window.scrollTo({
      top: sectionName.current.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <Navbar scrollDown={scrollDown}></Navbar>
      <div className='default-page-styling'>
          <div className='landing-layout1'>
            <div className='flex flex-col'>
              <section className='landing-section show-on-scroll' ref={Landing} id='Home'>
                <h1 className='landing-header'>
                  Hi there, I'm</h1>
                <div className="flex items-center justify-start tablet:justify-center w-[100%] show-on-scroll">
                  <div className=" flex tablet:justify-center
                  ">
                  <h1 className="typing-text ">Emily!</h1>
                  </div>
                </div>
                <div className='landing-subHeader show-on-scroll'>
                  <p className='break-normal'>
                    <span
                    className='landing-subHeader-hover'
                    onClick={() => {console.log('ji')}}>Aspiring UX Engineer</span>
                    <span> &#183; </span>
                    <span
                    className='landing-subHeader-hover'>Design Enthusiast</span>
                  </p>
                </div>
                <h1 className='landing-body show-on-scroll'>I'm a penultimate student studying B.Computer Science/B.Commerce student at <a className='link-decor dark:text-[#E0E0E0] text-darkFont2 tablet:text-primary' href="https://www.linkedin.com/school/unsw/?originalSubdomain=au"
                target="_blank">UNSW</a>. I'm passionate about <a className='link-decor dark:text-[#E0E0E0] text-darkFont2 tablet:text-primary whitespace-pre-wrap'
                href="#">front-end web-dev</a> and <a className='link-decor dark:text-[#E0E0E0] text-darkFont2 tablet:text-primary' href="#">UI/UX design</a> and am constantly driven to experiment with new technologies to create beautiful, seamless applications!
                </h1>
                <div className='flex flex-row gap-4 tablet:justify-center laptop:justify-start
                mt-[1.5em]
                show-on-scroll'>
                  <button className='contact-buttons'><a href={resume} target='_blank'>Resume</a></button>
                  <button
                  className='contact-buttons'
                  onClick={() => {scrollDown(footer)}}
                  >Get In Touch!</button>
                </div>
                {/* <h1 className='get-in-touch show-on-scroll'>Get in touch!</h1>
                <div className='show-on-scroll'>
                  <ContactButtons/>
                </div> */}
              </section>
            </div>
            <div>
              <img 
              className='blob-monster'
              src={blobs} alt="" />
            </div>
          </div>

          <div className='landing-layout'>
          <section className='about-section show-on-scroll' id='About' ref={About}>
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
          <section className='projects-section hidden show-on-scroll' id='Projects'>
            <h1 className='animate-character dark:text-[#FAFDFF] text-darkFont2 font-medium tablet:text-[3em] laptop:text-[4em] tablet:text-center'>/ projects</h1>
            <div className='proj-body'>
              <ProjectCard source={weemi} header='Weemi'/>
              <ProjectCard source={travel} header='TravelConnect'/>
              <ProjectCard/>
              <ProjectCard/>
            </div>
            <p className='mt-[0.5em] dark:text-lightFont2 text-darkFont2 tablet:text-center laptop:text-[1.3em]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum asperiores nobis illum placeat temporibus quas natus, at beatae voluptas corporis, minus optio eaque commodi eos. Sit labore impedit dolorum placeat?
            </p>
          </section>
          <section className='blog-section show-on-scroll' id='Blog'>
            <h1 className='animate-character dark:text-[#FAFDFF] text-darkFont2 font-medium tablet:text-[2.9em] laptop:text-[4em] tablet:text-center'>/ blog-posts</h1>
            <p className='mt-[0.5em] dark:text-lightFont2 text-darkFont2 tablet:text-center laptop:text-[1.3em]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum asperiores nobis illum placeat temporibus quas natus, at beatae voluptas corporis, minus optio eaque commodi eos. Sit labore impedit dolorum placeat?
            </p>
          </section>
        </div>
      </div>
      <div ref={footer}>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Landing