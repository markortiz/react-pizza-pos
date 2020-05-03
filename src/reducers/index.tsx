import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import cart from './cart'

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  cart
})

export default createRootReducer