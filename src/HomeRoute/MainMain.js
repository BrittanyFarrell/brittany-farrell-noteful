import React from 'react'
import Note from '../NoteComponent/Note'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import uuid from 'react-uuid'

export default class MainMain extends React.Component {
  render() {
    let mapped = this.props.notes.map(item => {
      return (
        <Note 
          name={item.name}
          key={uuid()}
          date={item.date_modified}
          id={item.id} 
        />
      )
    })
    return <div ><h2>Notes:</h2>{mapped}<Link to={'/add-note'}><div className="btn">Add note</div></Link></div>
  }
}

MainMain.propTypes = {
  notes: PropTypes.array
}