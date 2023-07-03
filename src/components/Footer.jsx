import React from 'react'
import ContactButtons from './ContactButtons'

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='footer-header'>Get in touch!</h1>
      <ContactButtons></ContactButtons>
      <h3 className='footer-subheader'>Made with ReactJS and Tailwind</h3>
    </div>
  )
}

export default Footer