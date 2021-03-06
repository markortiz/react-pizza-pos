import React from 'react'
import './Details.css'

function Details(props: any) {
  const { cart, onNextView,  addOns } = props
  const { size, crust, toppings, totalPrice } = cart
  const { freeToppings, excessToppingsPrice } = addOns
  const formatAmount = (amount: number) => `(+$${amount.toFixed(2)})`

  return (
    <main className="Details container">
      <h2 className="Details-title">Check your custom pizza:</h2>
      <div className="container">
        <div className="Details-custom-pizza row">
          <div className="Details-custom-pizza--col col-md-4 col-12">
            <h4 className="Details-title-3">Size</h4>
            <p>{size.name} {formatAmount(size.price)}</p>
          </div>
          <div className="Details-custom-pizza--col col-md-4 col-12">
            <h4 className="Details-title-3">Crust</h4>
            <p>{crust.name} {formatAmount(crust.price)}</p>
          </div>
          <div className="Details-custom-pizza--col col-md-4 col-12">
            <h4 className="Details-title-3">Toppings</h4>
            <ul>
              {
                toppings.map((item:string, index: number) => (
                  <li key={`toppings-${item}`}>
                    {item} {index >= freeToppings && formatAmount(excessToppingsPrice)}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="Details-custom-price row">
          <div className="col-4"><h4 className="price-label">Total Price:</h4></div>
          <div className="col-8"><h4 className="price-amount">${totalPrice.toFixed(2)}</h4></div>
        </div>
      </div>
      <button className="Details-button" onClick={onNextView}>Bake it now!</button>
    </main>
  )
}

export default Details
