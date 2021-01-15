import React from 'react'
import Options from './Option'
import './form.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Header from '../Header'

export default class AddFolder extends React.Component {
  render() {
    return (
      <div>
          <Header />
          <Link to={'/'}>
            <div className="btn">Go Back</div>
          </Link>
          <form className="add-folder-form" onSubmit={(e) => this.props.callback(e)}>
            <h2>Create A New Note</h2>
            <label htmlFor="name">Note Name: </label>
            <input typeof="text" name="name"  id="name" required/>
    
            <label htmlFor="content">Note Content: </label>
            <input typeof="text" name="content"  id="content" required />
    
            <label htmlFor="location">Note Location: </label>
            <select name="location"  id="location">
              <Options folders={this.props.folders}/>
            </select>
            
              <input type="submit" value="submit"/>
            
          </form>
      </div>
    )
  }
}

AddFolder.propTypes = {
  folders: PropTypes.array,
  callback: PropTypes.func.isRequired
};