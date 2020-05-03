import React from 'react'
import './Crust.css'
import { ReactComponent as PizzaThinIcon } from '../../../assets/img/pizza-thin.svg'
import { ReactComponent as PizzaThickIcon } from '../../../assets/img/pizza-thick.svg'

interface Crust {
  name: string;
  price: number;
}

function PizzaCrust(props: any) {
  const { onNextView, crusts } = props;
  const setCrust = (crust: Crust) => {
    onNextView({crust})
  }

  return (
    <section className="PizzaCrust">
      <h2 className="PizzaCrust-title">Choose your pizza crust:</h2>
      <div className="container">
        <div className="PizzaCrust-container row">
          {
            crusts.map((item: Crust, index: number) => {
              return (
                <button key={`pizza-crust--${index}`}  className="PizzaCrust-icon col-5" onClick={() => setCrust(item)}>
                  {
                    item.name.toLowerCase() === 'thin'
                    ? <PizzaThinIcon className="pizza-icon col-12"/>
                    : <PizzaThickIcon className="pizza-icon col-12"/>
                  }
                  <span>{item.name} - (+${item.price})</span>
                </button>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default PizzaCrust
