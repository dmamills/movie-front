import React, { Component } from 'react';

import Api from '../services/Api';

class ViewMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
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

    return loading ? <div>Loading...</div> : <div className="movie-detail">
      <h1>{movie.title}</h1>
    </div>;
  }
}

export default ViewMovie;
