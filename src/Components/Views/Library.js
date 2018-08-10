import React, { Component } from 'react';
import autoBind from 'auto-bind';

import SearchBar from '../SearchBar';
import MovieList from '../MovieList';
import Api from '../../services/Api';

class Library extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      loading: false,
      movies: []
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    }, () => {
      Api.movies()
      .then(movies => {
        this.setState({
          loading: false,
          movies,
        });
      });
    });
  }

  onSearch(query, type) {
    console.log(query, type);
    this.setState({
      loading: true
    }, () => {
      Api.search(query, type)
      .then(movies => {
        this.setState({
          loading: false,
          movies
        });
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    return (<div className="library">
      <SearchBar onSearch={this.onSearch} />
      <MovieList 
        movies={movies} 
        loading={loading}
      />
    </div>);
  }
}

export default Library;
