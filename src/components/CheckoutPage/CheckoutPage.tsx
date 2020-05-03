import React from 'react'
import { NavLink } from 'react-router-dom'
import './CheckoutPage.css'

function CheckoutPage() {
  return (
    <main className="CheckoutPage animated fadeIn">
      <h2 className="CheckoutPage-title">Check you custom pizza</h2>
      <NavLink exact to='/checkout' className="CheckoutPage-button">Checkout Now</NavLink>
    </main>
  )
}

export default CheckoutPage
