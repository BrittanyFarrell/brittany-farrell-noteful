import React from 'react'
import {Link} from 'react-router-dom'
import './Note.css'
import PropTypes from 'prop-types'
import ErrorBoundary from '../ErrorBoundary'

export default class Note extends React.Component {
  render() {
    const path = `/note/${this.props.id}`


    function convertTime(dateGiven) {
      let month = new Date(dateGiven).getMonth();
      let day = new Date(dateGiven).getDay();
      let year = new Date(dateGiven).getYear();
      return (`${month + 1}/${day}/${year -100}`)
    }


   let modified = convertTime(this.props.date)
    return (
      <div>
        <ErrorBoundary>
          <div className="note" id={this.props.id}>
            <Link to={path}>
              <h2 key={this.props.name}>{this.props.name}</h2>
            </Link>
            <div className="flex">
              <p className="date">Date Modified: {modified}</p>
              <button>Delete</button>
            </div>
          </div>
        </ErrorBoundary>
      </div>
    )
  }
}

Note.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}