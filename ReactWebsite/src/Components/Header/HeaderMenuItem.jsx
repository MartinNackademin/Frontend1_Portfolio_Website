import React, { useState } from 'react'
import { PageContext } from '../data/PageContext'
import { useContext } from 'react';

export const HeaderMenuItem = ({headerName, ToggleNavbar}) => {
    const {activePage,setActivePage} = useContext(PageContext);

const IWasClicked = () =>
    {
        setActivePage(headerName);
        ToggleNavbar();
    }


    return(
        <li>
            <a
            onClick={ IWasClicked }
            className={`headeranchor ${activePage === headerName ? 'active' : ''}`}
             href="#">
             {headerName} 
             </a>
        </li>
    )  

}