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
    // if this.state.filter == "faves"
    // this.props.faves
    // else 
    // this.props.films;
    const films = this.state.filter == "all" ? this.props.films : this.props.faves;
    const allFilms = films.map( (film, index) => (
        <FilmRow film={film} key={film.id} 
                 isFave={this.state.filter == "faves" ? 
                         true : this.props.faves.includes(film)}
                 onFaveToggle={() => this.props.onFaveToggle(film)}
                 handleDetailsClick={() => this.props.handleDetailsClick(film)} /> 
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
                  <span className="section-count">{this.props.faves.length}</span>
              </div>
          </div>

          {allFilms}
      </div>
    )
  }
}

export default FilmListing
