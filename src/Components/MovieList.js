import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard';
import LoadingContainer from './LoadingContainer';

class MovieList extends Component {
  
  renderList() {
    const { movies } = this.props;

  if(movies.length === 0) {
    return (<div className="movie-list">
      <span className="no-results">No Results Found.</span>
    </div>);
  }

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
