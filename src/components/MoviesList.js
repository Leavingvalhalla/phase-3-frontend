import {useEffect, useState} from 'react';
import MovieCard from './MovieCard'

function MoviesList() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/movies').then(res => res.json()).then(data => setMovies(data))
  }, [])

  return (
    movies ? movies.map(movie => <MovieCard key={movie.id} movie={movie} />) : null
  );
}

export default MoviesList;
