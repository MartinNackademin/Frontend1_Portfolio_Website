import React from 'react'
import './Projects.css'
import { ProjectsList } from "./ProjectsList"

export const Projects = () => {
    return (
        <main>
            <section>Intro section</section>
            <section>
                The project list section
                <div>
                <ProjectsList/>
                </div>
                The project list section
            </section>
        </main>
    )
}