import React from 'react'
import Header from '../Header'
import NotePathSidebar from './NotePathSidebar'
import NotePathMain from './NotePathMain'
import PropTypes from 'prop-types'
import ErrorBoundary from '../ErrorBoundary'

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
        <ErrorBoundary>
          <Header />
          <div key={this.props.note} className="flex">
            <NotePathSidebar 
              folders={this.props.folders}
              id={this.props.id}
              returnPath={returnPath}
            />
            <NotePathMain 
              notes={this.props.notes}
              id={this.props.note}
            />
          </div>
        </ErrorBoundary>
      </div>
    ) 
  }
}

NotePath.propTypes = {
  note: PropTypes.array,
  folders: PropTypes.array,
  id: PropTypes.string,
  returnPath: PropTypes.string
}