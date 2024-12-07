import React from 'react'
import './About.css'
import { 
    linkedinIcon,
    githubIcon,

} from '../../assets/IconExport.js';

export const About = () => {

    return (
        <>
        <main>
        
        <section>
           <h2>Currently,</h2>
                <p> studying Web Development .Net at Nackademin,I'm dedicated to expanding
                     my technical knowledge while actively seeking hands-on learning 
                     opportunities through practical projects."
                 </p>
        </section>

        <div id='bluebackground'>
        
        <section>
        <h2>Find Me Online</h2>
        

        <div id='social-img-container' >

        <a href="https://www.linkedin.com/in/martin-mohns-809a3b298/"
         target="_blank"
          rel="noopener noreferrer">
            <img src={linkedinIcon}
                 alt="Linkedin Icon that leads to linkedin" />
        </a>

        <a href="https://github.com/MartinNackademin?tab=repositories"
         target="_blank"
          rel="noopener noreferrer">
            <img src={githubIcon}
                 alt="Github icon that leads to github" />
        </a>
        </div>
        </section>
        </div>

        <section>
            <h2>Beyond Coding,</h2>
            <ul className='interests-list'>I like
            <li>Immersing myself in complex video games</li>
            <li>Spending quality time with my family</li>
            <li>Sharing my space with my furry companions</li>
            </ul>
            
        </section>

        </main>

        </>
    )
}