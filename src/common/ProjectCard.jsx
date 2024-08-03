import React from 'react';
import '../sections/Projects/ProjectStyles.module.css';

function ProjectCard({icon,link,title,des,styles}) {
  return (
    <div className="project">
       <a href={link} target="_blank">
          <img src={icon} className="hover" />
          <h3>{title}</h3>
          <p>{des}</p>
        </a>
    </div>
  )
}

export default ProjectCard
