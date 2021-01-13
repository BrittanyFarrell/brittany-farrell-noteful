import React from 'react'
import Header from './Header'
import FolderPathMain from './FolderPathMain'
import FolderPathSidebar from './FolderPathSidebar'
import PropTypes from 'prop-types'
//import './Main.css'

export default class FolderPath extends React.Component {
  render() {
    return (
      <div className="parent">
        <Header />
        <div className="flex">
          <FolderPathSidebar 
            folders={this.props.folders} 
            id={this.props.id}
          />
          <FolderPathMain 
            notes={this.props.notes}
            id={this.props.id}
            returnPath={this.props.returnPath}
          />
        </div>
      </div>
    )
  }
}

FolderPath.protoTypes = {
  folders: PropTypes.array,
  id: PropTypes.string,
  notes: PropTypes.array,
  returnPath: PropTypes.string
}