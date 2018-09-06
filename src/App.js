import React, { Component } from 'react'
import logo from './avoxi-logo.png'
import './App.css'
import Table from './Components/Results/Table'
import Card from './Components/Title/Card'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  activeTitle: state.activeTitle,
  titleDetails: state.titleDetails
})

const mapDispatchToProps = dispatch => {
  return {
    newTitle: title => dispatch({ type: 'NEW_TITLE', data: title }),
    showTitle: () => dispatch({ type: 'SHOW_TITLE' }),
    hideTitle: () => dispatch({ type: 'HIDE_TITLE' })
  }
}

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          {/* <img
            src={logo}
            className="App-logo"
            alt="logo"
            onClick={() => {
              this.props.showTitle()
            }}
          /> */}
          <h1
            onClick={() => {
              this.props.showTitle()
            }}
            style={{ color: '#000' }}>
            Placeholder
          </h1>
        </header>
        <Table />
        <Card />
        <button
          onClick={() => {
            this.props.newTitle({
              string: 'Hello String',
              title: 'Stringer'
            })
          }}>
          Make New
        </button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
