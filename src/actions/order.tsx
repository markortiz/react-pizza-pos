export const ADDORDER = 'ADDORDER'

export const addOrder = (item: any) => {
  return (dispatch : any, getState : any) => {
    dispatch({type: ADDORDER, item});
  }
}