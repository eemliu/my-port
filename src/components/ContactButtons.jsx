import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';

const ContactButtons = () => {
  return (
    <div className='footer-buttons-container'>
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
  )
}

export default ContactButtons