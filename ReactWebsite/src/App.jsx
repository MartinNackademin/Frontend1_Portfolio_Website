import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import React, { useState } from "react";
import {PageContext} from './Components/data/PageContext'
import { Contact } from './Components/Contact/Contact';



function App() 
{
  const [activePage, setActivePage] = useState("Home");
  const {showContact, setShowContact} = useState(false);
  

  return (
    <>
    
    <PageContext.Provider value={ {activePage, setActivePage} }>
      <Header/>
      <Contact/>
      <Main/>
    </PageContext.Provider>
   
    <Footer/>


    </>
    )
}

export default App
