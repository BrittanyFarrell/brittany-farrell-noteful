import React from 'react'
import Header from './Header'
import MainMain from './MainMain'
import MainSidebar from './MainSidebar'
import './Main.css'
import PropTypes from 'prop-types'

export default class Main extends React.Component {
  render() {
    return (
      <div className="parent">
        <Header />
        <div className="flex">
          <MainSidebar folders={this.props.folders} />
          <MainMain notes={this.props.notes}/>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  folders: PropTypes.array,
  notes: PropTypes.array
};