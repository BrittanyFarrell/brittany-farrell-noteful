import React from 'react';
import { Route } from 'react-router-dom';
import API_ENDPOINT from './Config'
import * as data from './data-file.json'
import Main from './Main'
import FolderPath from './FolderPath'
import NotePath from './NotePath'
import AddFolder from './AddFolder'
import AddNote from './AddNote'
import AppError from './AppError'

export default class App extends React.Component {

  state={
    notes:[],
    folders:[],
    hasError: false
  }


  componentDidMount() {
    this.setState({
      notes: data.notes,
      folders: data.folders
    })
  }


  render() {
    
    
    function handleFolderSubmition(e) {
      e.preventDefault();
      let name = e.target.name.value;
      let body = { name: name}

      fetch(`${API_ENDPOINT}/folder`, 
        {
          method: 'POST',
          body: body,
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        if (!res.ok) {
          throw new Error('something went wrong!')
        }
        return res.json();
      })
    };
    

    function handleNoteSubmition(e) {
      e.preventDefault();
      let name = e.target.name.value;
      let content = e.target.content.value;
      let folder = e.target.location.value;

      let body = { 
        name: name, 
        content: content, 
        folder: folder
      }

      fetch(`${API_ENDPOINT}/notes`, 
        {
          method: 'POST',
          body: body,
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        if (!res.ok) {
          throw new Error('something went wrong!')
        }
        return res.json();
      })
       
    };

    return(
      <main>
        <AppError state={this.state}>
        <Route
          exact path='/'
          component={() => <Main 
            notes={this.state.notes} 
            folders={this.state.folders}
          />}
        />

        <Route
          exact path='/add-folder'
          component={() => <AddFolder 
            callback={(e) => handleFolderSubmition(e)}
          />}
        />

        <Route
          exact path='/add-note'
          component={() => <AddNote 
            callback={(e) => handleNoteSubmition(e)} folders={this.state.folders}
          />}
        />

        {this.state.folders.map(item => {
          const path = `/folder/${item.id}`
          return <Route exact path={path} component={() => <FolderPath notes={this.state.notes} folders={this.state.folders} id={item.id} returnPath={path} />} />
        } )}

        {this.state.notes.map(item => {
          const path = `/note/${item.id}`
          return <Route exact path={path} component={() => <NotePath notes={this.state.notes} folders={this.state.folders} id={item.folderId} note={item.id} />} />
        } )}
        </AppError>
      </main>
    )
  }
}