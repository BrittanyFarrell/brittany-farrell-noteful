import React from 'react'
import Note from '../NoteComponent/Note'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default class MainMain extends React.Component {
  render() {
    let mapped = this.props.notes.map(item => {
      return (
        <div key={item.name}>
          <Note 
            name={item.name}
            date={item.modified}
            id={item.id} 
          />
        </div>
      )
    })
    return <div ><h2>Notes:</h2>{mapped}<Link to={'/add-note'}><div className="btn">Add note</div></Link></div>
  }
}

MainMain.propTypes = {
  notes: PropTypes.array
}