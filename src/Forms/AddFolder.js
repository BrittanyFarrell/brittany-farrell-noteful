import React from 'react'
import './form.css'
import Header from '../Header'
import {Link} from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary'

export default class AddFolder extends React.Component {
  render() {
    
    return (
      <div>
        <ErrorBoundary>
          <Header />
          <Link to={'/'}>
            <div className="btn">Go Back</div>
          </Link>
          <form className="add-folder-form" onSubmit={(e) => this.props.callback(e)}>
            <h2>Create A New Folder</h2>
            <label htmlFor="name">Folder Name: </label>
            <input typeof="text" required name="name"  id="name" />
            
              <input type="submit" value="submit"/>
            
          </form>
        </ErrorBoundary>
      </div>
    )
  }
}