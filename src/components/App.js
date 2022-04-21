import logo from '../logo.svg';
import '../App.css';
import { useState, useHistory } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DirectorsList from './DirectorsList'
import MoviesList from './MoviesList'
import NavBar from './NavBar'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/directors' element={<DirectorsList />} />
    <Route path='/movies' element={<MoviesList />}>
      <Route path=":director_id" element={<MoviesList />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
