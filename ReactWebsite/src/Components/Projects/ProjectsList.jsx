import React from 'react';
import { ProjectsListItem } from "./ProjectsListItem"


let projects = [
    {
        name: "Portfolio Website",
        desc: "showcasing my projects and skills.",
        image:"https://thumbs.dreamstime.com/z/to-be-announced-blue-stamp-isolated-white-background-98291768.jpg?ct=jpeg",
    },
    {
        name: "Ai Web image generator",
        desc: "Currently working on this project.",
        image:"https://thumbs.dreamstime.com/z/to-be-announced-blue-stamp-isolated-white-background-98291768.jpg?ct=jpeg",
    },
    {
        name: "Project.exe is missing",
        desc: "Hopefully I will have more projects to showcase soon.",
        image:"https://thumbs.dreamstime.com/z/to-be-announced-blue-stamp-isolated-white-background-98291768.jpg?ct=jpeg",
    }

];




export const ProjectsList = () => {
    return (
    <>
        <ul>
        <ProjectsListItem 
            
            name={projects[0].name}
            image={projects[0].image}
            desc={projects[0].desc}
        />

         <ProjectsListItem
            
            name={projects[1].name}
            image={projects[1].image}
            desc={projects[1].desc}
         
         />

         <ProjectsListItem
            name={projects[2].name}
            image={projects[2].image}
            desc={projects[2].desc}
         />
        </ul>
    </>
    );
}