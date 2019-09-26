import React, { Component } from 'react';

class FilmDetails extends Component {
  
  render() {
    const {current} = this.props
    const backdropUrl = `https://image.tmdb.org/t/p/w1280/${current.backdrop_path}`
    const posterUrl = `https://image.tmdb.org/t/p/w780/${current.poster_path}`
    return (
      <div className="film-details">
        <h1 className="section-title">Details</h1>
        {current.id && (<div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <img src={backdropUrl} alt="" />
          <h1 className="film-title">{current.title}</h1>
        </figure>

        <div className="film-meta">
          <h2 className="film-tagline">{current.tagline}</h2>
          <p className="film-detail-overview">
            <img src={posterUrl} className="film-detail-poster" alt={current.title} />
            {current.overview}
          </p>
        </div>
      </div>)}
      </div>
    )
  }
}

export default FilmDetails