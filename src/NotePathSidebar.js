import React from 'react'
import {Link} from 'react-router-dom'
import './NotePathSidebar.css'
import PropTypes from 'prop-types'

export default class NotePathSidebar extends React.Component {
  render() {
    
    let filtered = this.props.folders.filter(item => {
      if (item.id === this.props.id) {
        return item
      }
    })
    return (
      <div>
        <Link to={this.props.returnPath}>
          <p className="return">
            Go back
          </p>
        </Link>
        <h3 className="right-align">{filtered[0].name}</h3>
      </div>
    )
  }
}

NotePathSidebar.prototypes = {
  folders: PropTypes.array,
  id: PropTypes.string,
  returnPath: PropTypes.string
}