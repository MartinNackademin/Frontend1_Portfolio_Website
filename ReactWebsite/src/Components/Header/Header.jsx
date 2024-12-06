import React from 'react';
import { HeaderMenuItem } from "./HeaderMenuItem"
import contactIcon from './menu-bar.png';
import closeIcon from './close_icon.png';
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
        <div id="headerTopBar"></div>
                <div id='menuToggle' > { !isVisible &&  <img id='menuImage'  src={contactIcon} 
                alt="A clickable Icon that brings up navbar"
                onClick={ToggleNavbar}
                 />}</div>
        </div>
  { isVisible && <header id='HeaderMenu'>
    <span id='exitbutton'  ><img id='exitbuttonimage'  src={closeIcon} 
                alt="A clickable Icon that exits the navbar"
                onClick={ToggleNavbar}></img>
    </span>
        <nav>
            <ul className="navmenu">
                <HeaderMenuItem headerName="Home" />
                <HeaderMenuItem headerName="Projects & Skills"/>
                <HeaderMenuItem headerName="Socials"/>  
                <HeaderMenuItem headerName="CV"/>
                
            </ul>
        </nav>
    </header> }
      
      </>
    )
  }
  
  export default Header