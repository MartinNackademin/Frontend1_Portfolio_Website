import React from 'react';
import { ProjectsListItem } from "./ProjectsListItem"
import { projects } from '../data/ProjectData';



export const ProjectsList = () => {

    return (
    <>
            <ul>
                {projects.map((project, index) => (
                    <ProjectsListItem
                        key={index}
                        urlname={project.urlname}
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