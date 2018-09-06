const showTitle = () => dispatch => {
  dispatch({
    type: 'SHOW_TITLE'
  })
}

const hideTitle = () => dispatch => {
  dispatch({
    type: 'HIDE_TITLE'
  })
}

const newTitle = () => dispatch => {
  dispatch({
    type: 'NEW_TITLE',
    payload: 'result_of_simple_action'
  })
}

export default basicActions
