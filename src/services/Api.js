import axios from 'axios';

class Api {

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:8080'
    });
  }

  search(term, type) {
    return this.axios.get('/movies/search', {
      params: {
        term,
        type
      }
    })
    .then(res => res.data.movies);
  }

  genres() {
    return this.axios.get('/genres')
    .then(res => res.data.genres);
  }

  actors() {
    return this.axios.get('/actors')
    .then(res => res.data.actors);
  }

  movie(id) {
     return this.axios.get(`/movies/${id}`)
      .then(res => res.data.movie);
  }

  movies() {
    return this.axios.get('/movies')
      .then(res => res.data.movies);
  }
}

const singleton = new Api();

export default singleton;
