import React from 'react'
import {NavLink} from 'react-router-dom'


function Nav() {
  return (
    <>
 

 <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid ">
    <NavLink className="navbar-brand logo " to="/">
    <a className="navbar-brand" href="#">
  <img
  src="/logo.svg"
    alt="Logo"
    width={300}
    height={24}
    className="d-inline-block align-text-top"
  />
 
</a>
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse list" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">

          <NavLink className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>

          <li className="nav-itemn">
          <NavLink className="nav-link active" to ="/Explore">
            Explore
          </NavLink>
        </li>  
        
        <li className="nav-itemn">
          <NavLink className="nav-link active" to ="/Visit">
            Visit
          </NavLink>
        </li> 

     

        <li className="nav-item">
          <NavLink className="nav-link active" to ="/Buy">
           Tickets
          </NavLink>
        </li>
       
   
        </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav