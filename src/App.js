import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Library from './Components/Library';
import ViewMovie from './Components/ViewMovie';
import AddMovie from './Components/AddMovie';
import './App.css';

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div>
        <div className="header">
          <span className="title">Movie Library</span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Movie</Link></li>
          </ul>
        </div>
        <Route exact path="/" component={Library}/>
        <Route path="/add" component={AddMovie}/>
        <Route path="/movie/:id" component={ViewMovie}/>
      </div>
   </BrowserRouter>);
  }
}

export default App;
