import React from 'react'
import {Link} from 'react-router-dom'
import Note from './Note'

export default class FolderPathMain extends React.Component {
  render() {
    let filtered = this.props.notes.filter(item => item.folderId === this.props.id)
    let mapped = filtered.map(item => {
      
      return (
        <Note 
          name={item.name}
          date={item.modified}
          key={item.id}
          id={item.id} 
          returnPath={this.props.returnPath}
        />
      )
    })
    return <Link to={'/add-note'}><div className="notes"><h2>Notes:</h2>{mapped}<button>Add note</button></div></Link>
  }
}