import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../../actions/cart';

import './Order.css'
import PizzaSize from './PizzaSize/Size'
import PizzaCrust from './PizzaCrust/Crust'
import PizzaToppings from './PizzaToppings/Toppings'

function OrderPage(props: any) {
  const { sizes, crusts, toppings, addOns, addToCart } = props
  const [view, setView] = useState('size')
  const history = useHistory();

  const onNextView = (item: Object) => {
    addToCart(item)

    if(view === 'size') {
      setView('crust')
    } else if(view === 'crust') {
      setView('toppings')
    } else {
      history.push("/checkout")
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
              classNames='page'
            >
              <PizzaSize onNextView={onNextView} sizes={sizes} />
            </CSSTransition>
          )
        }
        {
          view==='crust' && (
            <CSSTransition
              key='pizza-crust'
              timeout={350}
              unmountOnExit={true}
              classNames='page'
            >
              <PizzaCrust onNextView={onNextView} crusts={crusts} />
            </CSSTransition>
          )
        }
        {
          view==='toppings' && (
            <CSSTransition
              key='pizza-toppings'
              timeout={350}
              unmountOnExit={true}
              classNames='page'
            >
              <PizzaToppings onNextView={onNextView} toppings={toppings} addOns={addOns} />
            </CSSTransition>
          )
        }
      </TransitionGroup>
    </section>
  )
}



function mapStateToProps(state: any) {
  return {
    cart: state.cart.cart,
    sizes: state.cart.menu.sizes,
    crusts: state.cart.menu.crusts,
    toppings: state.cart.menu.toppings,
    addOns: state.cart.menu.addOns,
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
)(OrderPage);
