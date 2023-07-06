import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaSpotify } from "react-icons/fa";

const ContactButtons = () => {
  return (
    <div className='footer-buttons-container'>
        <a href="https://www.instagram.com/eemliu/"
        target='_blank'
        className='get-in-touch-hover'>
          <InstagramIcon className='get-in-touch'
            style={{ fontSize: 50 }}/>
        </a>
        <a href='https://www.linkedin.com/in/emily-liu-28b040229/' target="_blank"
        className='get-in-touch-hover'>
            <LinkedInIcon className='get-in-touch'
            style={{ fontSize: 50 }}/>
        </a>
        <a href='https://github.com/eemliu' target="_blank"
        className='get-in-touch-hover'>
            <GitHubIcon className='get-in-touch'
            style={{ fontSize: 50 }}/>
            </a>
        <a href="mailto: emilyliu496@gmail.com" target="_blank"
        className='get-in-touch-hover'>
            <EmailIcon className='get-in-touch'
            style={{ fontSize: 50 }}/>
        </a>
        <a href="https://open.spotify.com/user/emilyyy496?si=9808b1faf1dd4a85"
        target='_blank'
        className='get-in-touch-hover'>
          <FaSpotify 
          className='get-in-touch'
          style={{ fontSize: 50 }}/>
        </a>
    </div>
  )
}

export default ContactButtons