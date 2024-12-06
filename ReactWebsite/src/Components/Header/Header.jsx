import React from 'react';
import { HeaderMenuItem } from "./HeaderMenuItem"
import contactIcon from './menu-bar.png';

function Header() {
  
  const [isVisible, setIsVisible] = React.useState(false);

  function ToggleNavbar() {
          setIsVisible(!isVisible);
          }

         
  
  return (
      <>
                 { !isVisible &&  <img src={contactIcon} 
                alt="A clickable Icon that brings up navbar"
                onClick={ToggleNavbar}
                id='NavbarIcon'
                 />}

  { isVisible && <header className="siteheader">
  
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