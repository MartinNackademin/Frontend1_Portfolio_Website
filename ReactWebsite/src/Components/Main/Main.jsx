import React from 'react'
import { Home } from '../Home/Home'
import { Projects } from '../Projects/Projects'
import { PageContext } from '../data/PageContext'
import { useContext } from 'react';

function Main() {
const {activePage,setActivePage} = useContext(PageContext);

    return (
<>

{  activePage == 'Home' && <Home/> }
{  activePage == 'Projects' && <Projects/> }
 
 
 

</>
    )
  }
  
  export default Main