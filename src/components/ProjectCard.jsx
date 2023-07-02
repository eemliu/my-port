import React from 'react'
import weemi from '../assets/weemi.png'

const ProjectCard = ({ source, header }) => {
  return (
    <div className='proj-card'>
        <div>
          <img src={source} alt="" className='proj-card-img'/>
        </div>
        <div>
          <h1 className='proj-card-header'>{header}</h1>
        </div>
    </div>
  )
}

export default ProjectCard