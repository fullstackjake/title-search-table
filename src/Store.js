import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './Reducers/RootReducer'
export default function configureStore() {
  return createStore(RootReducer, applyMiddleware(thunk))
}
