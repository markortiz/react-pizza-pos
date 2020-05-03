export const ADDTOCART = 'ADDTOCART'

export const addToCart = (item: any) => {
  return (dispatch : any, getState : any) => {
    dispatch({type: ADDTOCART, item});
  }
}