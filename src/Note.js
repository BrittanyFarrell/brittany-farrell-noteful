import React from 'react'
import {Link} from 'react-router-dom'
import './Note.css'
import PropTypes from 'prop-types'

export default class Note extends React.Component {
  render() {
    const path = `/note/${this.props.id}`
    return (
      <div className="note" id={this.props.id}>
        <Link to={path}>
          <h2>{this.props.name}</h2>
        </Link>
        <div className="flex">
          <p className="date">Date Modified: {this.props.date}</p>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

Note.propTypes = {
  id: PropTypes.number,
  key: PropTypes.number,
  date: PropTypes.string,
  name: PropTypes.string
}