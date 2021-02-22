import React from 'react'
import {Link} from'react-router-dom'
import uuid from 'react-uuid'
import PropTypes from 'prop-types'

export default class FolderPathSidebar extends React.Component {
  render() {
    let mapped = this.props.folders.map(item => {
      let path = `/folder/${item.id}`
      if (item.id === this.props.id) {
        return (
        <div className="selected folder" key={uuid()} id={item.id}>
          <Link to={path}>
            <h2>{item.name}</h2>
          </Link>
        </div>
        )
      } else {
        return (
          <div className="folder"  key={uuid()} id={item.id}>
            <Link to={path}>
              <h2>{item.name}</h2>
            </Link>
          </div>
          )
      }
    })
    return (
    <div>  
        <h2>Folders: </h2>
        {mapped}
        <Link to={'/add-folder'}>
          <div className="btn">Add folder</div>
        </Link>
    </div>
    )
  }
}

FolderPathSidebar.propTypes = {
  folders: PropTypes.array.isRequired,
  id: PropTypes.number
}