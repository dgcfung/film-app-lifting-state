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
    const allFilms = this.props.films.map( (film, index) => (
        <FilmRow film={film} key={film.id} /> 
    ))

    return (
      <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
              <div onClick={() => this.handleFilterClick('all')} className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''} `}>
                  ALL
                  <span className="section-count">{this.props.films.length}</span>
              </div>

              <div onClick={() => this.handleFilterClick('faves')} className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''} `}>
                  FAVES
                  <span className="section-count">0</span>
              </div>
          </div>

          {allFilms}
      </div>
    )
  }
}

export default FilmListing
