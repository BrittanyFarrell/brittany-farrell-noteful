import React from 'react'
import Folder from '../FolderComponent/Folder.js'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

export default function MainSidebar(props) {
  
  let mapped = props.folders.map(item => {
    return (
      <div key={item.name}>
        <Folder 
          name={item.name}
          id={item.id} 
        />
      </div>
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
  folders: PropTypes.array,
  notes: PropTypes.array
};

