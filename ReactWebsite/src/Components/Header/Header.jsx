import React from 'react';
import { HeaderMenuItem } from "./HeaderMenuItem"
import contactIcon from './menu-bar.png';
import closeIcon from './close_icon.png';
import mmIcon from './mm.png';
import './Header.css';
import '../.././index.css';

function Header() {
  
  const [isVisible, setIsVisible] = React.useState(false);

  function ToggleNavbar() {
          setIsVisible(!isVisible);
          }

  return (
      <>
      <div>
        <div id="headerTopBar"/>
                <div id='menuToggle'> { !isVisible &&  <img id='menuImage'  src={contactIcon} 
                alt="A clickable Icon that brings up navbar"
                onClick={ToggleNavbar}
                 />}</div>
        </div>
  { isVisible && <header id='HeaderMenu'>
        <nav>
          <span id='exitbutton'  >

          <img id='exitbuttonimage'  
              src={closeIcon} 
              alt="A clickable Icon that exits the navbar"
              onClick={ToggleNavbar}></img>
          </span>
          
            <ul className="navmenu">
            <img src={mmIcon} id="mmicon" alt="Website Creator Logo" /> 
                <HeaderMenuItem className="headermenuitem"  headerName="Home" ToggleNavbar={ToggleNavbar} />
                <HeaderMenuItem className="headermenuitem"  headerName="Projects" ToggleNavbar={ToggleNavbar}/>
                <HeaderMenuItem className="headermenuitem"  headerName="Skills" ToggleNavbar={ToggleNavbar}/>  
                <HeaderMenuItem className="headermenuitem"  headerName="About" ToggleNavbar={ToggleNavbar}/>
                <HeaderMenuItem className="headermenuitem"  headerName="CV" ToggleNavbar={ToggleNavbar}/>
            </ul>
        </nav>
    </header> }
      
      </>
    )
  }
  
  export default Header