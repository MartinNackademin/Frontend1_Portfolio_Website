import React from 'react'
import { Home } from '../Home/Home'
import { Projects } from '../Projects/Projects'
import { Skills } from '../Skills/Skills'
import { About } from '../About/About'
import { PageContext } from '../data/PageContext'
import { useContext } from 'react';

function Main() {
const {activePage,setActivePage} = useContext(PageContext);


    return (
<>

{  activePage == 'Home' && <Home/> }
{  activePage == 'Projects' && <Projects/> }
{  activePage == 'Skills' && <Skills/> }
{  activePage == 'About' && <About/> }
 
 

</>
    )
  }
  
  export default Main