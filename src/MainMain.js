import React from 'react'
import Note from './Note'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default class MainMain extends React.Component {
  render() {
    let mapped = this.props.notes.map(item => {
      return (
        <Note 
          name={item.name}
          date={item.modified}
          key={item.id}
          id={item.id} 
        />
      )
    })
    return <Link to={'/add-note'}><div class="notes"><h2>Notes:</h2>{mapped}<button>Add note</button></div></Link>
  }
}

MainMain.propTypes = {
  note: PropTypes.array
}