export const ADDTOCART = 'ADDTOCART'

interface Cart {
  size?: {
    name: string;
    price: number;
    maxToppings: number;
  };
  crust?: {
    name: string;
    price: number;
  };
  toppings?: Array<string>;
  totalPrice?: number;
}
interface AddOns {
  freeToppings: number;
  excessToppingsPrice: number;
}

const computeTotalPrice = (cart: Cart, addOns: AddOns) => {
  const { size, crust, toppings } = cart
  const { freeToppings, excessToppingsPrice } = addOns
  let totalPrice: number = 0

  if (size) totalPrice += size.price
  if (crust) totalPrice += crust.price
  if (toppings) {
    const excessToppings = (toppings.length-freeToppings) || 0
    totalPrice += (excessToppings*excessToppingsPrice)
  }

  return parseFloat(totalPrice.toFixed(2))
} 
export const addToCart = (item: any) => {
  return (dispatch : any, getState : any) => {
    let { cart, menu} = getState().cart
    const totalPrice = computeTotalPrice({...cart, ...item}, menu.addOns)
    cart = { ...cart, ...item, totalPrice }
    dispatch({type: ADDTOCART, cart});
  }
}