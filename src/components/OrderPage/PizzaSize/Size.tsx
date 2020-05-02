import React from 'react'
import './Size.css'
import { ReactComponent as PizzaIcon } from '../../../assets/img/pizza.svg'

function PizzaSize() {
  return (
    <section className="PizzaSize animated fadeIn">
      <h2 className="PizzaSize-title">Select your pizza size:</h2>
      <div className="container">
        <div className="PizzaSize-choices row">
          <button className="PizzaSize-icon col-md-3 col-8">
            <PizzaIcon className="pizza-icon col-6"/>
            <span>Small - $5</span>
          </button>
          <button className="PizzaSize-icon col-md-3 col-8">
            <PizzaIcon className="pizza-icon col-8"/>
            <span>Medium - $7</span>
          </button>
          <button className="PizzaSize-icon col-md-3 col-8">
            <PizzaIcon className="pizza-icon col-12"/>
            <span>Large - $9</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PizzaSize
