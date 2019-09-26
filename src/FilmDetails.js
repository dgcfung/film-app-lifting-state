import React, { Component } from 'react';

class FilmDetails extends Component {
  
  render() {
    const {current} = this.props
    return (
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
      </div>
    )
  }
}

export default FilmDetails