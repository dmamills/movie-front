import React from 'react';
import { Link } from 'react-router-dom'

import GenreIcon from './GenreIcon';

function MovieCard(props) {
  const { id, title, actors, genre } = props.movie;
  
  return (<div className="movie-card">
    <div className="movie-card-header">
      <h1>{title}</h1>
      <GenreIcon genre={genre} />
    </div>
    <div className="movie-cast">
        <h2>Cast</h2>
        <ul>
          {actors.slice(0,2).map(a => {
              return <li key={a.name} className="actor">{a.name}</li>;
          })}
          {actors.length > 2 ? <li>And {actors.length - 2} more...</li> : false}
        </ul>
    </div>
    <div className="movie-card-footer">
      <Link to={`/movies/${id}`}>View Movie</Link>
    </div>     
  </div>);
}

export default MovieCard;
