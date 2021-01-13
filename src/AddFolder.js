import React from 'react'
import './form.css'
import Header from './Header'
import {Link} from 'react-router-dom'

export default class AddFolder extends React.Component {
  render() {
    
    return (
      <div>
        <Header />
        <Link to={'/'}>
          <div>Go Back</div>
        </Link>
        <form className="add-folder-form" onSubmit={(e) => this.props.callback(e)}>
          <h2>Create A New Folder</h2>
          <label htmlFor="name">Folder Name: </label>
          <input typeof="text" name="name"  id="name" />
          
            <input type="submit" value="submit"/>
          
        </form>
      </div>
    )
  }
}