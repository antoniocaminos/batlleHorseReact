import React from "react";
import CartWidget from "../CartWichtget";
import "./styles.css"

const menuItems = [
  {
    id:0,
    label: "cat0",  
  },
  {
    id:1,
    label: "cat1",  
  },
  {
    id:2,
    label: "cat2",  
  },
  {
    id:3,
    label: "cat3",
  }
]
export const NavBar = () => {
  return (
    <div className='nav'>
      <h1 className='nav-logo'>Brand</h1>
      <div className="nav-cat">
          {menuItems.map((item) => (
          <a href='/' className='nav-item' key={item.id}>
          {item.label}
          </a> 
        ))}
        </div>
        <CartWidget />
      </div>
  );
}
export default NavBar