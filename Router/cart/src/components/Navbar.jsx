import React from 'react'
import {NavLink} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa'

export const Navbar = () => {
  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <NavLink to = "/faq">FAQ</NavLink>
        <NavLink to = "/">Products</NavLink>
        <NavLink to = "/contactus">Contact us</NavLink>
        <NavLink to = "/aboutus">About us</NavLink>
        <FaShoppingCart/>
        </div>
    </div>
  )
}
