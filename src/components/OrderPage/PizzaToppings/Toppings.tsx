import React from 'react'
import './Toppings.css'

function PizzaToppings(props: any) {

  const { onNextView } = props;

  return (
    <section className="PizzaToppings container">
      <h2 className="PizzaToppings-title">Choose your pizza toppings:</h2>
      <div className="container">
        <div className="PizzaToppings-choices row">
          <button className="PizzaToppings-icon col-md-3 col-5" onClick={onNextView}>
            <span>Pepperoni</span>
          </button>
          <button className="PizzaToppings-icon col-md-3 col-5" onClick={onNextView}>
            <span>Tomatoes</span>
          </button>
          <button className="PizzaToppings-icon col-md-3 col-5" onClick={onNextView}>
            <span>Bell Pepper</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PizzaToppings
