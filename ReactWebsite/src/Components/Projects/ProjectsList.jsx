import React from 'react';
import { ProjectsListItem } from "./ProjectsListItem"


let projects = [
    {
        name: "Portfolio Website",
        desc: "This is my portfolio website showcasing my projects and skills.",
        image:"https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg",
    },
    {
        name: "Webbpage for generating images with",
        desc: "Currently working on this project.",
        image:"https://thumbs.dreamstime.com/z/to-be-announced-blue-stamp-isolated-white-background-98291768.jpg?ct=jpeg",
    },
    {
        name: "Project 3",
        desc: "Currently working on this project.",
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