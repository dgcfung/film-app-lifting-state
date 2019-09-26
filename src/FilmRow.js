import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

class FilmRow extends Component {

  handleDetailsClick(film){
    console.log(`Fetching details for ${film}`)

  }

  render() {
    return (
        <div onClick={() => this.handleDetailsClick(this.props.film)} className="film-row">
         <FilmPoster film={this.props.film} />
      
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{new Date(this.props.film.release_date).getFullYear()}</p>
        </div>
        <Fave />
      </div>
    )
  }
}

export default FilmRow