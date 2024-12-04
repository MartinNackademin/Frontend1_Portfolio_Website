import React, { useState } from 'react'
import { PageContext } from '../data/PageContext'
import { useContext } from 'react';

export const HeaderMenuItem = ({headerName}) => {
    const {activePage,setActivePage} = useContext(PageContext);

const IWasClicked = () =>
    {
        setActivePage(headerName);
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