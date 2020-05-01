import React from 'react'
import './PizzaApp.css'

function PizzaApp() {
  return (
    <div className="PizzaApp">
      <header className="PizzaApp-header">
        <div className="PizzaApp-logo container">
          <i className="PizzaApp-logo--icon fas fa-pizza-slice"></i>
          <h1 className="PizzaApp-logo--name">Yummy Pizza</h1>
        </div>
      </header>
      <main className="PizzaApp-main">
        <h2 className="PizzaApp-title">Create your own delicious Freshly Bake Pizza</h2>
        <button className="PizzaApp-button">Order Pizza Now</button>
      </main>
    </div>
  )
}

export default PizzaApp
