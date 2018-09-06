import AppReducer from './AppReducer'

const RootReducer = (state, action) => {
  return AppReducer(state, action)
}

export default RootReducer
