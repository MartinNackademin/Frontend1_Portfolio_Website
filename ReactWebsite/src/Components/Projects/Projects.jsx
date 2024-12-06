import React from 'react'
import './Projects.css'
import { ProjectsList } from "./ProjectsList"

export const Projects = () => {
    return (
        <main>
            <section id="projectintro">
            <h1>Featured Projects</h1>
            <p>
            Explore my development journey through these selected Projects
        
            </p>



            </section>
            
            <section>
              
                <div>
                <ProjectsList/>
                </div>
                
            
            </section>

        </main>
    )
}