import React, { Component } from 'react'
import TableTitle from './TableTitle'
import axios from 'axios'

class Table extends Component {
  constructor(props) {
    super()

    this.state = { titles: [] }

    this.getTitles = this.getTitles.bind(this)
    this.sortTitles = this.sortTitles.bind(this)
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

  sortTitles = param => {
    console.log(this.state.titles)
    const titlesToSort = this.state.titles.sort().reverse()
    console.log(titlesToSort)
    this.setState({ titles: titlesToSort })
  }

  componentDidMount() {
    this.getTitles('cinderella')
  }

  render() {
    return (
      <div className="title__table">
        <table
          className="table table-striped"
          onClick={e => {
            this.sortTitles()
          }}>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Type</th>
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
