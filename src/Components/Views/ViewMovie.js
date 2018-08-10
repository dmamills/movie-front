import React, { Component } from 'react';

import LoadingContainer from '../LoadingContainer';
import GenreIcon from '../GenreIcon';
import Api from '../../services/Api';

class ViewMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    Api.movie(id).then(movie => {
      this.setState({
        loading: false,
        movie,
      });
    });
  }

  render() {
    const { loading, movie } = this.state;

    return loading ? <LoadingContainer /> : (<div className="movie-detail">
      <div className="movie-header">
        <div className="genre-wrap">
          <GenreIcon genre={movie.genre} size="large" />
        </div>
        <h1>{movie.title}</h1>
      </div>
      <div className="movie-cast">
        <h2>Cast</h2>
        <ul>
          {movie.actors.map(a => <li key={a.id}>{a.name}</li>)}
        </ul>
      </div>
      
    </div>);
  }
}

export default ViewMovie;
