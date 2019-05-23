import React, { Component } from 'react';

class FilmDetails extends Component {
  
  render() {
    const {current} = this.props
    return (
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <br/><br/><br/>

        
    { current.id ?  <div>{current.overview}</div> : <div> <i>Click a movie to see the description!!!!!</i> </div> }
        
      </div>
    )
  }
}

export default FilmDetails