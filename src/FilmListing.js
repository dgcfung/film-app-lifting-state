import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {
 
 state = {
  filter: 'all'
 }
  handleFilterClick(filter) {
    this.setState(prevState => ({
      filter
    }))
  }

  render() {
      // the films we render depends on the state of the filter
      const films = this.state.filter === "all" ?  this.props.films : this.props.faves
      
      // calculate isFave (i.e., determine weather each film is in the faves array)
      const allFilms = films.map( (film, index) => (
          <FilmRow 
            handleFaveToggle={this.props.handleFaveToggle} 
            film={film} 
            key={film.id}
            isFave={this.props.faves.includes(film)}
            setCurrentFilm={this.props.setCurrentFilm}
            /> 
      ))

      return (
      <div className="film-list">
      <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
              <div 
                className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
                onClick={() => this.handleFilterClick('all')}
              >
                  ALL
                  <span className="section-count">{this.props.films.length}</span>
              </div>
              <div 
                className={`film-list-filter ${this.state.filter === 'filter' ? 'is-active' : ''}`}
                onClick={() => this.handleFilterClick('filter')}
              >
                  FAVES
                  <span className="section-count">{this.props.faves.length}</span>
              </div>
          </div>

          {allFilms.length > 0 ? allFilms : <div>No films to show</div>}
      </div>
      )
  }
}

export default FilmListing
