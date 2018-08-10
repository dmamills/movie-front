import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Library from './Components/Views/Library';
import ViewMovie from './Components/Views/ViewMovie';
import AddMovie from './Components/Views/AddMovie';
import './App.css';

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div>
        <div className="header">
          <Link to="/"><span className="title">Movie Library</span></Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Movie</Link></li>
          </ul>
        </div>
        <Route exact path="/" component={Library}/>
        <Route path="/add" component={AddMovie}/>
        <Route path="/movies/:id" component={ViewMovie}/>
      </div>
   </BrowserRouter>);
  }
}

export default App;
