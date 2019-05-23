import React, { Component } from 'react';
import TMDB from './TMDB.js';
import FilmListing from './FilmListing.js';
import FilmDetails from './FilmDetails.js';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
console.log(TMDB.api_key)

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.setCurrentFilm = this.setCurrentFilm.bind(this);
  }

  setCurrentFilm(film) {
    // take in a film as an argument
  if (film.id ===this.state.current.id){
    this.setState({
      current: {}
    })
    return
  }    

    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    axios.get(url)  
    .then((res)=>{
      this.setState({
        current: res.data
      })
    })
    .catch((err)=>{
      console.warn(err)
    })

    // make an API request to get more data about that film
    // set the result to current
  }
  

  handleFaveToggle(film){
    console.log('handlefavetoggle', film)
    let newFavesArray  = [...this.state.faves]
    // check if its already in faves
    const filmIndex = newFavesArray.indexOf(film)
    // if it is, 
    if(filmIndex > -1 ){
      // remove it. if not , add it
      newFavesArray.splice(filmIndex, 1);
    } else {
      newFavesArray.push(film)
    }

    this.setState({
      faves: newFavesArray
    })
    // update the state of faves
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing 
          films={this.state.films} 
          faves={this.state.faves} 
          handleFaveToggle={this.handleFaveToggle}
          setCurrentFilm={this.setCurrentFilm}
          />
        <FilmDetails films={TMDB.films} current={this.state.current} />
      </div>
    )
  }
}

export default App