import { ADDTOCART } from '../actions/cart';

const initialState = {
  cart: { totalPrice: 0.00 },
  menu: {
    sizes: [
      {
        name: 'Small',
        price: 8,
        maxToppings: 5,
      },
      {
        name: 'Medium',
        price: 10,
        maxToppings: 7,
      },
      {
        name: 'Large',
        price: 12,
        maxToppings: 9,
      }
    ],
    crusts: [
      {
        name: 'Thin',
        price: 2,
      },
      {
        name: 'Thick',
        price: 4
      },
    ],
    toppings: [
      'Pepperoni',
      'Mushrooms',
      'Onions',
      'Sausage',
      'Bacon',
      'Extra cheese',
      'Black olives',
      'Green peppers',
      'Pineapple',
      'Spinach'
    ],
    addOns: {
      freeToppings: 3,
      excessToppingsPrice: 0.50,
    }
  }
  

}

export default (state = initialState, action : any) => {
  switch (action.type) {
    case ADDTOCART:
      return {
        ...state,
        cart: action.cart
      }
    default:
      return state;
  }
}