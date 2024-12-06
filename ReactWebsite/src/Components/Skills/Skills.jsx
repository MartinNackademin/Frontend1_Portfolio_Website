import { 
    csharpIcon,
    css3Icon,
    githubIcon,
    html5Icon,
    reactIcon,
    unityIcon,
    vitejsIcon

} from '../../assets/IconExport.js';

export const Skills = () => {
    
     
    return (
        <main>
             <section>
                <h1>My Skillset</h1>
                <img src={csharpIcon} alt="csharp icon" />
                <img src={css3Icon} alt="css3 icon" />
                <img src={githubIcon} alt="github icon" />
                <img src={html5Icon} alt="html5 icon" />
                <img src={reactIcon} alt="react icon" />
                <img src={unityIcon} alt="unity icon" />
                <img src={vitejsIcon} alt="vitejs icon" />
             </section>
        
             <section>

                <h1>My references</h1>

             </section>
        </main>
    )
}