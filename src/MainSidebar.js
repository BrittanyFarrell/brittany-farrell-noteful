import { render } from '@testing-library/react';
import React from 'react'
import Folder from './Folder.js'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

export default class mainSidebar extends React.Component {
  render() {
    let mapped = this.props.folders.map(item => {
      //console.log(item.name)
      return (
        <Folder 
          name={item.name}
          key={item.id}
          id={item.id} 
        />
      )
    })
    return (
      <div class="folders">
        <h2>Folders:</h2>
        {mapped}
        <Link to={'/add-folder'}>
          <div>Add folder</div>
        </Link>
      </div>
    )
  }
}

mainSidebar.propTypes = {
  folders: PropTypes.array,
  notes: PropTypes.array
};

