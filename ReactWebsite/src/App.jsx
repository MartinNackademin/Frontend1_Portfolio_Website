import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import React, { useState } from "react";
import {PageContext} from './Components/data/PageContext'



function App() 
{
  const [activePage, setActivePage] = useState("Home");
  

  return (
    <>
    <PageContext.Provider value={ {activePage, setActivePage} }>
      <Header/>
      <Main/>
    </PageContext.Provider>
    <Footer/>
    </>
    )
}

export default App
