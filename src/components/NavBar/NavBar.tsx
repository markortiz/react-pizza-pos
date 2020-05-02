import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function PizzaApp() {
  return (
    <nav className="PizzaApp-navbar">
      <NavLink exact to='/' className="PizzaApp-logo container">
        <i className="PizzaApp-logo--icon fas fa-pizza-slice"></i>
        <h1 className="PizzaApp-logo--name">Yummy Pizza</h1>
      </NavLink>
    </nav>
  )
}

export default PizzaApp
