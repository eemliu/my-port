import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Projects = () => {
  return (
    <div className='default-page-styling'>
      <h2>you have reached:</h2>
      <TypeAnimation
      sequence={[
        'One', // Types 'One'
        1000, // Waits 1s
        'Two', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Two Three', // Types 'Three' without deleting 'Two'
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
        <h3>Projects!</h3>
    </div>
  )
}

export default Projects