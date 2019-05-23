import React, { Component } from 'react';
import TMDB from './TMDB.js';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }
  

  handleFaveToggle(film){

  }

  render() {
    return (
      <div className="film-library">
        <FilmListing 
          films={this.state.films} 
          faves={this.state.faves} 
          handleFaveToggle={this.handleFaveToggle}
          />
        <FilmDetails films={TMDB.films} current={this.state.current} />
      </div>
    )
  }
}

export default App