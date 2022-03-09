import React from "react";
import {  NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../Redux/auth/auth.actions";
export const Navbar = () => {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        margin: "20px",
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      {isUserLoggedIn ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
};
