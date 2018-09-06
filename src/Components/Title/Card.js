import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => {
  return {
    newTitle: title => dispatch({ type: 'NEW_TITLE', data: title }),
    showTitle: () => dispatch({ type: 'SHOW_TITLE' }),
    hideTitle: () => dispatch({ type: 'HIDE_TITLE' })
  }
}

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = { details: false }
  }

  render() {
    return (
      <div>
        <h1>Hello From Card</h1>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
