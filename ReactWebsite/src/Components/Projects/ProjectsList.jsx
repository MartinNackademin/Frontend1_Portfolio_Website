import React from 'react';
import { ProjectsListItem } from "./ProjectsListItem"


let projects = [
    {
        name: "Portfolio Website",
        desc: "showcasing my projects and skills.",
        image:"https://thumbs.dreamstime.com/z/to-be-announced-blue-stamp-isolated-white-background-98291768.jpg?ct=jpeg",
        url:"https://github.com/MartinNackademin/Frontend1_Portfolio_Website"
    },
    {
        name: "Ai Web image generator",
        desc: "Currently working on this project.",
        image:"https://thumbs.dreamstime.com/z/to-be-announced-blue-stamp-isolated-white-background-98291768.jpg?ct=jpeg",
        url:"https://github.com/MartinNackademin?tab=repositories"
    },
    {
        name: "Project.exe is missing",
        desc: "Hopefully I will have more projects to showcase soon.",
        image:"https://thumbs.dreamstime.com/z/to-be-announced-blue-stamp-isolated-white-background-98291768.jpg?ct=jpeg",
        url:"https://github.com/MartinNackademin?tab=repositories"
    }

];




export const ProjectsList = () => {
    return (
    <>
            <ul>
                {projects.map((project, index) => (
                    <ProjectsListItem
                        key={index}
                        name={project.name}
                        image={project.image}
                        desc={project.desc}
                        url={project.url}
                    />
                ))}
         
        </ul>
    </>
    );
}