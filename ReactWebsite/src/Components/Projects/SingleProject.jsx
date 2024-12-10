import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { projects } from '../data/ProjectData';


export const SingleProject = () => {
    const { urlname } = useParams();
    const [currentProject, setCurrentProject] = useState(null);

    useEffect(() => {
        let foundProject = projects.find(
            (project) => project.urlname === urlname
        )
        setCurrentProject(foundProject)
    }); 

    if (currentProject==null) 
        return <div><h1>ERROR PROJECT NOT FOUND</h1></div>;
    
    return(
        <>
        <div><h1>{currentProject.name}</h1></div>
        <section>
         <div>{currentProject.desc}</div>
         <img src={currentProject.image} alt="Project Picture"/>
        </section>

        </>
    )
    
}