
import React from 'react';



export const ProjectsListItem = ({name,image,desc,url}) =>{

return(
    <a href={url}>
    <li className="projectsListItem">
       <img src={image} alt="Project Picture"/>
        <h3>{name}</h3>
        <p>{desc}</p>
        
   </li>
</a>
)  

}