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
      let day = new Date(dateGiven).getDate();
      let year = new Date(dateGiven).getFullYear();
      return (`${month + 1}/${day}/${year}`)
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
              <button >Delete</button>
            </div>
          </div>
        </ErrorBoundary>
      </div>
    )
  }
}

Note.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}