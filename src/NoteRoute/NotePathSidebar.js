import React from 'react'
import {Link} from 'react-router-dom'
import './NotePathSidebar.css'
import PropTypes from 'prop-types'

export default function NotePathSidebar(props){
    
  let filtered = props.folders.filter(item => {
    return item.id === props.id
  })

  return (
    <div>
      <Link to={props.returnPath}>
        <p className="return">
          Go back
        </p>
      </Link>
      <h2 className="right-align">{filtered[0].name}</h2>
    </div>
  )
  
}

NotePathSidebar.prototypes = {
  folders: PropTypes.array,
  id: PropTypes.string,
  returnPath: PropTypes.string
}