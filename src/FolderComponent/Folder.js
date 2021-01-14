import React from 'react'
import {Link} from 'react-router-dom'
import './Folder.css'
import PropTypes from 'prop-types'
import ErrorBoundary from '../ErrorBoundary'

export default class Folder extends React.Component {
  render() {
    const path = `/folder/${this.props.id}`
    return (
      <div>
        <ErrorBoundary>
          <div className="folder" id={this.props.id}>
            <Link to={path}>
              <h2>{this.props.name}</h2>
            </Link>
          </div>
        </ErrorBoundary>
      </div>
    )
  }
}

Folder.propTypes = {
  name: PropTypes.string,
  key: PropTypes.string,
  id: PropTypes.string
};