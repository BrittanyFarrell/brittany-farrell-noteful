import React from 'react' 
import PropTypes from 'prop-types'
import uuid from 'react-uuid'
import Note from '../NoteComponent/Note'

export default class NotePathMain extends React.Component {
  
  render() {
    let filtered = this.props.notes.filter(item => item.id === this.props.id)
    let item = filtered[0]

    function convertTime(dateGiven) {
      let month = new Date(dateGiven).getMonth();
      let day = new Date(dateGiven).getDate();
      let year = new Date(dateGiven).getFullYear();
      return (`${month + 1}/${day}/${year}`)
    }

   let modified = convertTime(item.date_modified)
    return (
      <div>
        <Note 
          name={item.name}
          key={uuid()}
          date={item.date_modified}
          id={item.id} 
          delete={(e) => this.props.delete(e)}
        />
        <div className="content">
          <h3>Content: </h3>
          <p>{item.content}</p>
        </div>
      </div>
    )
  }
}

NotePathMain.prototypes = {
  notes: PropTypes.array,
  id: PropTypes.number
}