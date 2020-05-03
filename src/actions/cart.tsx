export const ADDTOCART = 'ADDTOCART'

export const addToCart = (item: any) => {
  return (dispatch : any, getState : any) => {
    let { cart } = getState().cart
    cart = [...cart, item]
    dispatch({type: ADDTOCART, cart});
  }
}