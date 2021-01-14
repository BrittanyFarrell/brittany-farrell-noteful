import React from 'react' 
import PropTypes from 'prop-types'

export default class NotePathMain extends React.Component {
  render() {
    let filtered = this.props.notes.filter(item => item.id === this.props.id)
    let note = filtered[0]
    return (
      <div>
        <div className="note" id={note.id}>
          <h2>{note.name}</h2>
          <div className="flex">
            <p className="date">Date Modified: {note.modified}</p>
            <button>Delete</button>
          </div>
        </div>
        <p className="content">{note.content}</p>
      </div>
    )
  }
}

NotePathMain.prototypes = {
  notes: PropTypes.array
}