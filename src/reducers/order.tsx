import { ADDORDER } from '../actions/order';

const initialState = {
  order: [],
}

export default (state = initialState, action : any) => {
  switch (action.type) {
    case ADDORDER:
      return {
        ...state,
        order: action.order
      }
    default:
      return state;
  }
}