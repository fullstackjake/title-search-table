import React, { Component } from 'react'

class TableTitle extends Component {
  constructor(props) {
    super(props)
    this.state = { details: false }
    this.formatTitle = this.formatTitle.bind(this)
    this.confirmImage = this.confirmImage.bind(this)
  }

  // {this.formatTitle(this.props.title.Title, this.props.title.Year)}
  formatTitle = (title, year) => {
    console.log('Hello there')
    console.log(title)
    return `${title} (${year})`
  }

  confirmImage = image => {
    if (image === 'N/A') {
      image = 'https://via.placeholder.com/300x200'
    }
    return image
  }

  componentDidMount() {}

  render() {
    return (
      <tr>
        <td>{this.props.title.Title}</td>
        <td>{this.props.title.Year}</td>
        <td>{this.props.title.Type}</td>
        <td>
          <img
            src={this.confirmImage(this.props.title.Poster)}
            alt={this.props.title.Title}
          />
        </td>
      </tr>
    )
  }
}

export default TableTitle
