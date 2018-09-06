const InitState = {
  activeTitle: false,
  titleDetails: {}
}

const TitleInfo = (state = InitState, action) => {
  switch (action.type) {
    case 'SHOW_TITLE':
      return { ...state, activeTitle: true }

    case 'HIDE_TITLE':
      return { ...state, activeTitle: false }

    case 'NEW_TITLE':
      return { ...state, titleDetails: action.data }

    default:
      return state
  }

  //return state
}

export default TitleInfo
