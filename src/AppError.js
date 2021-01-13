import React from 'react'

export default class AppError extends React.Component {
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.props.state.hasError) {      
      return (
        <h2>Could not display content</h2>
      );
    }
    return this.props.children;
  }  

}