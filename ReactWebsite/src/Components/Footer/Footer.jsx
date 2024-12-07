import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
    return (
    <>
      <footer>
        (C) {currentYear}  Martin Mohns. All Cats Reserved.
      </footer>    
    </>
    )
  }
  
  export default Footer