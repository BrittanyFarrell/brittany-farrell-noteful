import React from 'react'
import Header from '../Header'
import NotePathSidebar from './NotePathSidebar'
import NotePathMain from './NotePathMain'
import PropTypes from 'prop-types'

export default class NotePath extends React.Component {
  render() {
    let returnPath = ''

    if (!this.props.returnPath) {
      returnPath = '/'
    }
    if (this.props.returnPath) {
      returnPath = this.props.returnPath
    }
    return (
      <div>
          <Header />
          <div key={this.props.note} className="flex">
            <NotePathSidebar 
              folders={this.props.folders}
              id={this.props.id}
              returnPath={returnPath}
            />
            <NotePathMain 
              delete={(e) => this.props.delete(e)}
              notes={this.props.notes}
              id={this.props.note}
            />
          </div>
      </div>
    ) 
  }
}

NotePath.propTypes = {
  notes: PropTypes.array,
  note: PropTypes.number,
  folders: PropTypes.array,
  id: PropTypes.number,
  returnPath: PropTypes.string
}