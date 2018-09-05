import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
// import './Search.css'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { default: false }
  }

  passSearch = e => {
    e.preventDefault()
    let titleToSearch = encodeURIComponent(
      findDOMNode(this.refs.title).value.trim()
    )
    this.props.handleSearch(e, titleToSearch)
  }

  render() {
    return (
      <form className="row searchArea">
        <div className="col-md-6">
          <div className="form-group">
            <input
              ref="title"
              type="text"
              name="title"
              className="form-control search__input"
              placeholder="Search..."
            />

            <button
              onClick={e => {
                this.passSearch(e)
              }}
              className="btn btn-primary searchButton">
              Submit
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default Search
