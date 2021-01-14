import React from 'react'
import PropTypes from 'prop-types';

export default class Options extends React.Component {
  render() {
    let options = this.props.folders.map(item => {
      return <option name="folder" value={item.id} key={item.name}>{item.name}</option>
    })
    return (
      options
    )
  }
}

Options.propTypes = {
  folders: PropTypes.array
};