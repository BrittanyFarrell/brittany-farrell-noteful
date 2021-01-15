import React from 'react'
import Header from '../Header'
import FolderPathMain from './FolderPathMain'
import FolderPathSidebar from './FolderPathSidebar'
import PropTypes from 'prop-types'

export default class FolderPath extends React.Component {
  render() {
    return (
      <div>
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

FolderPath.propTypes = {
  folders: PropTypes.array,
  id: PropTypes.string,
  notes: PropTypes.array,
  returnPath: PropTypes.string
}