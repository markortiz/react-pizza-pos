import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './CheckoutPage.css'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CartActions from '../../actions/cart'

import PizzaDetails from './PizzaDetails/Details'
import Receipt from './Receipt/Receipt'

function CheckoutPage(props: any) {
  const { cart } = props
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
              <PizzaDetails onNextView={onNextView} cart={cart} />
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
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({
    addToCart: CartActions.addToCart,
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
