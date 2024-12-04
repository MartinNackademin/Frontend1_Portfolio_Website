function Footer() {
  const currentYear = new Date().getFullYear();
    return (
    <>
      <footer>
        (C) Martin Mohns {currentYear}
      </footer>    
    </>
    )
  }
  
  export default Footer