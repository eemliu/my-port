import React from 'react'
import ContactButtons from './ContactButtons'

const Footer = () => {
  return (
    <div className='footer'>
        {/* <h1 className='footer-header'>Get in touch!</h1> */}
        <ContactButtons></ContactButtons>
        <h3 className='footer-subheader'>Made in 2023 &#9829;</h3>
    </div>
  )
}

export default Footer