import React, { Component } from 'react';
import TMDB from './TMDB.js';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env);

class App extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		films: TMDB.films,
  		faves: [],
  		current: {},
  	}
  }

  handleDetailsClick = async (film) => {
  	const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    try {
	    const response = await axios.get(url);
	    const current = response.data;
	    console.log(current);
	    this.setState({ current });
	} catch(err) {
		console.log(err);
	}
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