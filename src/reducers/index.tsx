import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import order from './order'

const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  order
})

export default createRootReducer