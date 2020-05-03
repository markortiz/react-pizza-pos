import React, { useState } from 'react'
import './Toppings.css'

function PizzaToppings(props: any) {
  const { onNextView, toppings, addOns } = props;
  const [selectedToppings, setToppings] = useState<string[]>([])
  const [warning, setWarning] = useState<string|null>(null)

  const addActiveClass = (event: any) => {
    const { target } = event
    const item = target.getAttribute('data-item')
    const index = selectedToppings.indexOf(item)
    const maxToppings = 5
    let newToppings = [...selectedToppings]
    let warningMessage = warning


    // Check if already selected
    if (index > -1) {
      selectedToppings.splice(index, 1)
      newToppings = [...selectedToppings]
      target.classList.remove('active')
      target.classList.remove('free')
    } else if (newToppings.length < maxToppings){
      newToppings = [...selectedToppings, item]
      target.classList.add('active')
      if (selectedToppings.length < 3) target.classList.add('free')
    }

    if (selectedToppings.length >= maxToppings) {
      warningMessage = `Maximum toppings available for this size is ${maxToppings}.`
    } else {
      warningMessage = null
    }

    setWarning(warningMessage)
    setToppings(newToppings)
    target.blur()
  }
  const addToppingsToCart = () => {
    onNextView({ toppings:selectedToppings })
  }

  return (
    <section className="PizzaToppings container">
      <h2 className="PizzaToppings-title row">Choose your pizza toppings:</h2>
      {
        warning && <h5 className="PizzaToppings-warning row">{warning}</h5>
      }
      <div className="PizzaToppings-choices row">
        {
          toppings.map((item: string) => (
            <button key={`pizza-toppings--${item}`}
              className="PizzaToppings-icon col-md-3 col-4"
              data-item={item}
              onClick={addActiveClass}>
                <span>
                  {item}
                  { 
                    selectedToppings.length >= addOns?.freeToppings 
                    && (<small><br/>(+${addOns.excessToppingsPrice.toFixed(2)})</small>)
                  }
                </span>
            </button>
          ))
        }
      </div>
      <div className="PizzaToppings-next row">
        <button className="PizzaToppings-next--btn col-6" onClick={addToppingsToCart}>Next</button>
      </div>
    </section>
  )
}

export default PizzaToppings
