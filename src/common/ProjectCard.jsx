import React from 'react';


function ProjectCard({icon,link,title,des}) {
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
