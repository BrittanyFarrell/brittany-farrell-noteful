import React from 'react'
import {Link} from 'react-router-dom'
import Note from '../NoteComponent/Note'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'

export default class FolderPathMain extends React.Component {
  render() {
    let filtered = this.props.notes.filter(item => item.folder_id === this.props.id)
    let mapped = filtered.map(item => {
      
      return (
        <Note 
          name={item.name}
          date={item.date_modified}
          key={uuid()}
          id={item.id} 
          returnPath={this.props.returnPath}
          delete={(e) => this.props.delete(e)}
        />
      )
    })
    return <div className="notes"><h2>Notes:</h2>{mapped}<Link to={'/add-note'}><div className="btn">Add note</div></Link></div>
  }
}

FolderPathMain.propTypes = {
  notes: PropTypes.array,
  id: PropTypes.number
}