import React from 'react';
import { Route } from 'react-router-dom';
import {API_ENDPOINT} from '../config'
import Main from '../HomeRoute/Main'
import FolderPath from '../FolderRoute/FolderPath'
import NotePath from '../NoteRoute/NotePath'
import AddFolder from '../Forms/AddFolder'
import AddNote from '../Forms/AddNote'
import './App.css'


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      notes:[],
      folders:[]
    } 
  }
  
  retrieveFolders() {
    fetch(`${API_ENDPOINT}/folders`)
      .then(res => res.json())
      .then(resJson => {this.setState({folders: resJson})})
  }

  retrieveNotes() {
    fetch(`${API_ENDPOINT}/notes`)
      .then(res => res.json())
      .then(resJson => {this.setState({notes: resJson})})
  }

  componentDidMount() {  
    this.retrieveFolders()
    this.retrieveNotes()
  }

  render() {
    
    function handleFolderSubmition(e) {
      e.preventDefault();
      let name = e.target.name.value;
      let body = {name}

      fetch(`${API_ENDPOINT}/folders`, 
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        return res.json();
      })
    };
    
    function handleNoteSubmition(e) {
      e.preventDefault();
      let name = e.target.name.value;
      let content = e.target.content.value;
      let folderId = e.target.location.value;
      let modified = new Date();

      let body = { name, content, folderId, modified }

      fetch(`${API_ENDPOINT}/notes`, 
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        return res.json();
      })
    };

    return(
      <main>
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
          return <Route 
          key={item.id} 
          exact path={path} 
          component={() => <FolderPath 
            notes={this.state.notes} 
            folders={this.state.folders} 
            id={item.id} 
            returnPath={path} 
          />} />
        } )}

        {this.state.notes.map(item => {
          const path = `/note/${item.id}`
          return <Route 
          key={item.id} 
          exact path={path} 
          component={() => <NotePath 
            notes={this.state.notes} 
            folders={this.state.folders} 
            id={item.folderId} 
            note={item.id} 
          />} />
        } )}
      </main>
    )
  }
}