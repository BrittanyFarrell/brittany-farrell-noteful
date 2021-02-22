import React from 'react'
import Folder from '../FolderComponent/Folder.js'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import uuid from 'react-uuid'

export default function MainSidebar(props) {
  
  let mapped = props.folders.map(item => {
    return (
      <Folder 
        key={uuid()}
        name={item.name}
        id={item.id} 
      />
    )
  })

  return (
    <div className="folders">
      <h2>Folders:</h2>
      {mapped}
      <Link to={'/add-folder'}>
        <div className="btn">Add folder</div>
      </Link>
    </div>
  ) 
}

MainSidebar.propTypes = {
  folders: PropTypes.array
}
