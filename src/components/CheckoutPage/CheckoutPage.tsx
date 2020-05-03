import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './CheckoutPage.css'

import { connect } from 'react-redux'

import PizzaDetails from './PizzaDetails/Details'
import Receipt from './Receipt/Receipt'

function CheckoutPage(props: any) {
  const { cart, addOns } = props
  const [view, setView] = useState('details')

  const onNextView = () => {
    if (view === 'details') {
      setView('receipt')
    }
  }

  return (
    <main className="CheckoutPage">
      <TransitionGroup component={null}>
        {
          view==='details' && (
            <CSSTransition
              key='pizza-details'
              timeout={350}
              unmountOnExit={true}
              classNames='page'
            >
              <PizzaDetails onNextView={onNextView} cart={cart} addOns={addOns} />
            </CSSTransition>
          )
        }
        {
          view==='receipt' && (
            <CSSTransition
              key='receipt'
              timeout={350}
              unmountOnExit={true}
              classNames='page'
            >
              <Receipt />
            </CSSTransition>
          )
        }
      </TransitionGroup>
    </main>
  )
}

function mapStateToProps(state: any) {
  return {
    cart: state.cart.cart,
    addOns: state.cart.menu.addOns
  };
}

export default connect(
  mapStateToProps,
)(CheckoutPage);
