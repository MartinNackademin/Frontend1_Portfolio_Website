
import React from 'react';



export const ProjectsListItem = ({name,image,desc}) =>{

return(
    <li className="projectsListItem">
        <img src={image} alt="Project Picture"/>
        <h3>{name}</h3>
        <h3>{desc}</h3>
        
   </li>
)  

}