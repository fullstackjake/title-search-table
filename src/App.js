import React, { Component } from 'react'
import logo from './avoxi-logo.png'
import './App.css'
import Table from './Components/Results/Table'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 style={{ color: '#000' }}>Placeholder</h1>
        </header>
        <Table />
      </div>
    )
  }
}

export default App
