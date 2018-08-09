import React, { Component } from 'react';
import { Link } from 'react-router-dom'


function GenreIcon(prop) {
	const { name } = prop.genre;
	return (<div className="genre-container">
		<img className="genre-icon" src={`/genre-icons/${name}.png`} />
		<span>{name}</span>
	</div>);
}

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
		          return <li key={a} className="actor">{a.name}</li>;
		      })}
		      {actors.length > 2 ? <li>And {actors.length - 2} more...</li> : false}
		    </ul>
		</div>
		<div className="movie-card-footer">
		  <Link to={`/movies/${id}`}>View Movie</Link>
		</div>     
	</div>);
}

function LoadingContainer() {
	return (<div className="loading-container">
		<span>Loading...</span>
		<div className="spinner"></div>
	</div>);
}

class MovieList extends Component {
  
  renderList() {
    const { movies } = this.props;
    return (<div className="movie-list">
      {movies.map(m => <MovieCard key={m.id} movie={m} />)}
    </div>);
  }

  render() {
    const { loading, movies } = this.props;
    return loading ? <LoadingContainer /> : this.renderList();
  }

}

export default MovieList;
