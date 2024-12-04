import { HeaderMenuItem } from "./HeaderMenuItem"

function Header() {
  return (
      <>
 <header className="siteheader">
        <div className="logo">
            <i className='bx bxs-cat logoicon'></i>
            Martin Mohns<span class="logopart2"> Website</span>                
        </div>
        <nav>
            <ul className="navmenu">
                <HeaderMenuItem headerName="Home" />
                <HeaderMenuItem headerName="Projects & Skills"/>
                <HeaderMenuItem headerName="Socials"/>  
                <HeaderMenuItem headerName="CV"/>
                <HeaderMenuItem headerName="Contact"/>
            </ul>
        </nav>
        <ul className="navicons">
           <li><a className="navanchor" href="#"><i class='bx bx-search-alt navicon'></i></a></li> 
           <li><a className="navanchor" href="#"><i class='bx bx-menu navicon' ></i></a></li> 
        </ul>
    </header>      
      </>
    )
  }
  
  export default Header