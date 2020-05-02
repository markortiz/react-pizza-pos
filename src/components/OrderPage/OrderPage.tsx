import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './Order.css'
import PizzaSize from './PizzaSize/Size'
import PizzaCrust from './PizzaCrust/Crust'
import PizzaToppings from './PizzaToppings/Toppings'

function OrderPage() {
  const [view, setView] = useState('size')

  const onNextView = () => {
    console.log('view',view)
    if(view === 'size') {
      setView('crust')
    } else if(view === 'crust') {
      setView('toppings')
    } else {
      setView('size')
    }
  }

  return (
    <section className="OrderPage animated fadeIn">
      <TransitionGroup component={null}>
        {
          view==='size' && (
            <CSSTransition
              key='pizza-size'
              timeout={350}
              unmountOnExit={true}
              classNames='display'
            >
              <PizzaSize onNextView={onNextView}/>
            </CSSTransition>
          )
        }
        {
          view==='crust' && (
            <CSSTransition
              key='pizza-crust'
              timeout={350}
              unmountOnExit={true}
              classNames='display'
            >
              <PizzaCrust onNextView={onNextView}/>
            </CSSTransition>
          )
        }
        {
          view==='toppings' && (
            <CSSTransition
              key='pizza-toppings'
              timeout={350}
              unmountOnExit={true}
              classNames='display'
            >
              <PizzaToppings onNextView={onNextView}/>
            </CSSTransition>
          )
        }
      </TransitionGroup>
    </section>
  )
}

export default OrderPage
