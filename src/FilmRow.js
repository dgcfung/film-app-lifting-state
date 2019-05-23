import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

class FilmDetails extends Component {

  handleDetailsClick(film){
    console.log(`fetching details for ${film.title}`)
  }

  render() {
    return (
        <div 
          className="film-row"
          onClick={() => this.handleDetailsClick(this.props.film)}
        >
         <FilmPoster film={this.props.film} />
      
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{new Date(this.props.film.release_date).getFullYear()}</p>
        </div>
        <Fave 
          handleFaveToggle={this.props.handleFaveToggle}
        />
      </div>
    )
  }
}

export default FilmDetails