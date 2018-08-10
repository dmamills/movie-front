import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable';
import autoBind from 'auto-bind';

import Api from '../../services/Api';

class AddMovie extends Component {

  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      title: '',
      actors: [],
      genre: null,
      actorsLoading: false,
      errors: [],
    }
  }

  mapOptions(o) {
    return {
      label: o.name,
      value: o.id.toString(),
    };
  }

  loadGenres(term) {
    return Api.genres()
      .then(genres => genres.map(this.mapOptions));
  }

  genreChange(genre) {
    this.setState({
      genre,
    });
  }

  loadActors(term) {
    return Api.actors()
      .then(actors => {
        const filteredActors = actors.filter(a => a.name.toLowerCase().includes(term.toLowerCase()));
        return filteredActors.map(this.mapOptions)
      });
  }
  
  actorChange(actors) {
    this.setState({
      actors
    });
  }

  actorCreate(actor) {
    this.setState({
      actorsLoading: true,
    }, () => {
      Api.createActor(actor)
        .then(a => ({ label: a.name, value: a.id.toString()}))
        .then(newActor => {
          this.setState({
            actorsLoading: false,
            actors: [...this.state.actors, newActor]
          });
        });
    });
  }

  validateForm() {
    const { title, actors, genre } = this.state;
    const errors = [];
  
    if(title.length === 0) {
      errors.push({ field: 'title', error: 'Title is required' });
    }

    if(actors.length === 0) {
      errors.push({ field: 'actors', error: 'At least one actor required' });
    }

    if(!genre) {
      errors.push({ field: 'genre', error: 'Genre is required' });
    }

    this.setState({ errors });

    return errors.length === 0;
  }

  submitMovie() {
    if(!this.validateForm()) {
      return;
    }

    this.setState({
      errors: [],
    });

    const { title, actors, genre } = this.state;

    Api.createMovie({
      title,
      genre: parseInt(genre.value, 10),
      actors: actors.map(a => parseInt(a.value, 10))
    }).then(movie => {
      this.props.history.push(`/movies/${movie.id}`);
    });
  }

  render() {
    const { actorsLoading, actors, errors } = this.state;

    return (<div className="movie-create">
      <h2>Add New Movie</h2>
      {errors.length > 0 ? <div className="errors-container">
        <ul>
          {errors.map(e => <li key={e.field}>{e.error}</li>)}
        </ul>
      </div> : false }

      <div className="add-form">

        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={(e) => {
            const title = e.target.value;
            this.setState({ title });
          }} />
        </div>

        <div className="input-group">
          <label htmlFor="genre">Genre</label>
          <AsyncSelect
            id="genre"
            isSearchable={false}
            defaultOptions
            loadOptions={this.loadGenres}
            onChange={this.genreChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="genre">Actors</label>
          <AsyncCreatableSelect
            id="actors"
            isMulti
            onChange={this.actorChange}
            onCreateOption={this.actorCreate}
            defaultOptions
            isDisabled={actorsLoading}
            isLoading={actorsLoading}
            loadOptions={this.loadActors}
            value={actors}
          />

        </div>

        <div className="input-group">
          <button onClick={this.submitMovie}>Add Movie</button>
        </div>

      </div>
    </div>);
  }
}

export default AddMovie;
