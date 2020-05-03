import React from 'react'
import './Size.css'
import { ReactComponent as PizzaIcon } from '../../../assets/img/pizza.svg'

interface Size {
  name: string;
  price: number;
  maxToppings: string;
}

function PizzaSize(props: any) {
  const { onNextView, sizes } = props
  const iconSizes = ['col-6', 'col-8', 'col-12'] // Let's store this to array for simplicity

  const setSize = (size: Size) => {
    onNextView({size})
  }

  return (
    <section className="PizzaSize">
      <h2 className="PizzaSize-title">Select your pizza size:</h2>
      <div className="container">
        <div className="PizzaSize-choices row">
          {
            sizes.map((item: Size, index: number) => {
              return (
              <button key={`pizza-size--${index}`} className="PizzaSize-icon col-md-3 col-8" onClick={() => setSize(item)}>
                <PizzaIcon className={`pizza-icon ${iconSizes[index]}`}/>
                <span>{item.name} - ${item.price}</span>
              </button>
            )})
          }
        </div>
      </div>
    </section>
  )
}

export default PizzaSize
