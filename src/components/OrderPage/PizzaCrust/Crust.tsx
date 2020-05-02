import React from 'react'
import './Crust.css'
import { ReactComponent as PizzaThinIcon } from '../../../assets/img/pizza-thin.svg'
import { ReactComponent as PizzaThickIcon } from '../../../assets/img/pizza-thick.svg'

function PizzaCrust(props: any) {

  const { onNextView } = props;

  return (
    <section className="PizzaCrust">
      <h2 className="PizzaCrust-title">Select your pizza crust:</h2>
      <div className="container">
        <div className="PizzaCrust-container row">
          <button className="PizzaCrust-icon col-5" onClick={onNextView}>
            <PizzaThinIcon className="pizza-icon col-12"/>
            <span>Thin - (+$2)</span>
          </button>
          <button className="PizzaCrust-icon col-5" onClick={onNextView}>
            <PizzaThickIcon className="pizza-icon col-12"/>
            <span>Thick - (+$4)</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default PizzaCrust
