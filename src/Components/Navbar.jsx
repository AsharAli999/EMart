import React from 'react'

import {NavLink} from 'react-router-dom';
import  {useSelector} from 'react-redux';

const Navbar = () => {

  const state = useSelector((state) => state.handleCart);

  return (
    <div> 
        <nav className ="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
  <div className ="container ">
    <NavLink className="navbar-brand " to="#">Online Clothing Mart</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
      </ul>
      <form className="d-flex">
          <NavLink to="/cart" className='btn btn-outline-light'>
            <i className='fa fa-shopping-cart '> </i>
             Cart({state.length})
          </NavLink>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar