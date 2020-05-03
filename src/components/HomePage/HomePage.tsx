import React from 'react'
import { NavLink } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  return (
    <main className="HomePage animated fadeIn">
      <h2 className="HomePage-title">Make your own delicious Freshly Bake Pizza</h2>
      <NavLink exact to='/order' className="HomePage-button">Create Pizza Now</NavLink>
    </main>
  )
}

export default HomePage
