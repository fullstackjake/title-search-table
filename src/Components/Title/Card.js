import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => {
  return {
    hideTitle: () => dispatch({ type: 'HIDE_TITLE' })
  }
}

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = { details: false }
  }

  render() {
    console.log(this.props.titleDetails)
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img
              className="card-img-top"
              src={this.props.titleDetails.Poster}
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.titleDetails.Title}</h5>
              <p className="card-text">{this.props.titleDetails.Plot}</p>
              <button
                onClick={() => this.props.hideTitle()}
                className="btn btn-primary">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
