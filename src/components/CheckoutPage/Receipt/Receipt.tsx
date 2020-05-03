import React from 'react'
import './Receipt.css'

function Receipt(props: any) {
  return (
    <main className="Receipt">
      <h2 className="Receipt-title">We got your order!</h2>
      <h3 className="Receipt-sub-title">Your pizza will be deliver at your door steps.</h3>
    </main>
  )
}

export default Receipt
