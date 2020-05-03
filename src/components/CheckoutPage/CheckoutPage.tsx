import React from 'react'
import { NavLink } from 'react-router-dom'
import './CheckoutPage.css'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../../actions/cart';

function CheckoutPage(props: any) {
  const { cart } = props

  return (
    <main className="CheckoutPage animated fadeIn">
      <h2 className="CheckoutPage-title">Check your custom pizza</h2>
      <ul>
      {
        cart.map((item: Object) => (<li>{JSON.stringify(item)}</li>))
      }
      </ul>
      <NavLink exact to='/checkout' className="CheckoutPage-button">Checkout Now</NavLink>
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
