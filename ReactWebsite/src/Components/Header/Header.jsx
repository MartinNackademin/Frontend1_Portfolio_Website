import React from 'react';
import { useState, useEffect } from 'react';
import { HeaderMenuItem } from "./HeaderMenuItem"
import contactIcon from './menu-bar.png';
import closeIcon from './close_icon.png';
import mmIcon from './mm.png';
import './Header.css';
import '../.././index.css';
import { Contact } from '../Contact/Contact';

function Header() {
  
  const [isVisible, setIsVisible] = React.useState(false);




// This is a custom hook that listens for window resize events
// this was AI generated as i do not know how listeners work.
// this was a quick fix cause i will not be able to make my assignment in time otherwise.
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  function ToggleNavbar() {
          setIsVisible(!isVisible);
          }

  return (
      <>
      <div>
        
        <div id="headerTopBar"/>
                <div id='menuToggle'>
                <Contact/>
                { !isVisible &&  <img id='menuImage'  src={contactIcon} 
                alt="A clickable Icon that brings up navbar"
                onClick={ToggleNavbar}
                 />}</div>
        </div>
  { (isVisible  || window.innerWidth >= 1024) && <header id='HeaderMenu'>
        <nav>
          <span id='exitbutton'  >

          <img id='exitbuttonimage'  
              src={closeIcon} 
              alt="A clickable Icon that exits the navbar"
              onClick={ToggleNavbar}></img>
          </span>
          
            <ul className="navmenu">
            <img src={mmIcon} id="mmicon" alt="Website Creator Logo" /> 
                <HeaderMenuItem className="headermenuitem"  headerName="Home" ToggleNavbar={ToggleNavbar} navLink="/" />
                <HeaderMenuItem className="headermenuitem"  headerName="Projects" ToggleNavbar={ToggleNavbar}navLink="/Projects"/>
                <HeaderMenuItem className="headermenuitem"  headerName="Skills" ToggleNavbar={ToggleNavbar}navLink="/Skills"/>  
                <HeaderMenuItem className="headermenuitem"  headerName="About" ToggleNavbar={ToggleNavbar}navLink="/About"/>
                <li><a 
                className="headermenuitem"  
                href="https://docs.google.com/document/d/1HhawroGTGV-e7v5KnI873mSGoFZz9z--SQ2EESekM7U/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={ToggleNavbar}
                >
                  CV
                  </a></li>
            </ul>
        </nav>
    </header> }

    
      
      </>
    )
  }
  
  export default Header