import React, { Component } from 'react';
import TMDB from './TMDB.js';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		films: TMDB.films,
  		faves: [],
  		current: {},
  	}
  }

  handleDetailsClick(film) {
    console.log(`Fetching details for ${film.title}`);
  }

  handleFaveToggle = (film) => {
  	// find the film in faves
  	// console.log(film);
  	const index = this.state.faves.indexOf(film);
  	// if the film exists in faves
  	if (index > -1) {
  		const newFaves = this.state.faves;
  		newFaves.splice(index, 1);
  		this.setState({ faves: newFaves });
  	} else {
  		// else add it to faves
  		// this.state.films.push(film);
  		const newFaves = this.state.faves.concat(film);
  		this.setState({ faves: newFaves });
  	}


  }

  render() {
    return (
      <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} 
        			 onFaveToggle={this.handleFaveToggle}
        			 handleDetailsClick={this.handleDetailsClick} />
        <FilmDetails films={this.state.films} current={this.state.current} />
      </div>
    )
  }
}

export default App