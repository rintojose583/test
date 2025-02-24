import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div style={{ width: "100%", background: "lightblue", padding: "15px", display:"flex", gap:"15px", flexWrap: "wrap" }}>
      <NavLink className={({isActive})=>(isActive ? "active-link" : "inactive-link" )} to="/">Home</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active-link" : "inactive-link" )} to="/about-us">About</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active-link" : "inactive-link" )} to="/example">Example</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active-link" : "inactive-link" )} to="/useReducer">Use Reducer</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active-link" : "inactive-link" )} to="/useLayout">Use Layout</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active-link" : "inactive-link" )} to="/imperativeHandle">ImperativeHandle</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active-link" : "inactive-link" )} to="/ref">Ref</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active-link" : "inactive-link" )} to="/callback">Callback</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active-link" : "inactive-link" )} to="/memoExample">MemoExample</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active-link" : "inactive-link" )} to="/reduxToolkit">ReduxToolkit</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active-link" : "inactive-link" )} to="/testing">Testing</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active-link" : "inactive-link" )} to="/reduxApi">ReduxApi</NavLink>
    </div>
  );
};
