import logo from '../logo.svg';
import '../App.css';
import { useState, useHistory } from 'react';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import DirectorsList from './DirectorsList'
import MoviesList from './MoviesList'
import NavBar from './NavBar'

function App() {
  return (
    <div>
    {/* <DirectorsList /> */}
    <MoviesList />
    </div>
  );
}

export default App;
