const InitState = {
  activeTitle: false,
  titleDetails: {}
}

const AppReducer = (state = InitState, action) => {
  switch (action.type) {
    case 'SHOW_TITLE':
      console.log('SHOW_TITLE CLICKED')
      return { ...state, activeTitle: true }

    case 'HIDE_TITLE':
      return { ...state, activeTitle: false }

    case 'NEW_TITLE':
      return { ...state, titleDetails: action.data }

    default:
      return state
  }
}

export default AppReducer
