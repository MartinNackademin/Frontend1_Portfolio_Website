import { Link } from 'react-router-dom';
import React from 'react';



export const ProjectsListItem = ({name,image,desc,url,urlname}) =>{

return(
    <Link to={`/Projects/${urlname}`}>
    <li className="projectsListItem">
       <img src={image} alt="Project Picture"/>
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>Git hub:{url} </p>
        
   </li>
</Link>
)  

}