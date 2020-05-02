import React from 'react'
import './Order.css'
import { ReactComponent as PizzaIcon } from '../../assets/img/pizza.svg'

function OrderPage() {
  return (
    <section className="OrderPage animated fadeIn">
      <h2 className="OrderPage-title">Select your pizza size:</h2>
      <div className="container">
        <div className="OrderPage-pizza-sizes row">
          <button className="OrderPage-pizza-icon col-md-3 col-8">
            <PizzaIcon className="pizza-icon col-6"/>
            <span>Small - $5</span>
          </button>
          <button className="OrderPage-pizza-icon col-md-3 col-8">
            <PizzaIcon className="pizza-icon col-8"/>
            <span>Medium - $7</span>
          </button>
          <button className="OrderPage-pizza-icon col-md-3 col-8">
            <PizzaIcon className="pizza-icon col-12"/>
            <span>Large - $9</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default OrderPage
