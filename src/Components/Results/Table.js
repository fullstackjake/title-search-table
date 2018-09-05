import React, { Component } from 'react'
import TableTitle from './TableTitle'
import './Table.css'
import Search from './Search'
import axios from 'axios'

class Table extends Component {
  constructor(props) {
    super()

    this.state = { titles: [], previousSort: '' }

    this.getTitles = this.getTitles.bind(this)
    this.sortTitles = this.sortTitles.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  getTitles = title => {
    if (title === null || title === '' || title === undefined) {
      title = 'crank'
    }
    let url = `https://www.omdbapi.com/?s=${title}&r=json&apikey=9f572b90`
    // console.log(url)
    axios
      .get(url)
      .then(response => {
        let titles = response.data.Search
        this.setState({ titles: titles })
        console.log(this.state.titles)
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
    // .then(response => {
    //   console.log(this.state.titles)
    // })
  }

  sortTitles = (objs, param) => {
    let sorted
    if (this.state.previousSort === param) {
      sorted = objs.reverse()
    } else
      sorted = objs.sort(function(a, b) {
        return a[param] > b[param] ? 1 : b[param] > a[param] ? -1 : 0
      })

    this.setState({ titles: sorted, previousSort: param })
  }

  handleSearch = (e, title) => {
    e.preventDefault()
    console.log(title)
    this.getTitles(title)
  }

  componentDidMount() {}

  render() {
    return (
      <div className="title__table">
        <Search handleSearch={this.handleSearch} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th
                className="sortable"
                scope="col"
                onClick={e => {
                  this.sortTitles(this.state.titles, 'Title')
                }}>
                Title &#9650;
              </th>
              <th
                className="sortable"
                scope="col"
                onClick={e => {
                  this.sortTitles(this.state.titles, 'Year')
                }}>
                Year
              </th>
              <th
                className="sortable"
                scope="col"
                onClick={e => {
                  this.sortTitles(this.state.titles, 'Type')
                }}>
                Type
              </th>
              <th scope="col">Poster</th>
            </tr>

            {this.state.titles.map((title, index) => (
              <TableTitle key={index} title={title} />
            ))}
          </thead>
          <tbody />
        </table>
      </div>
    )
  }
}

export default Table
