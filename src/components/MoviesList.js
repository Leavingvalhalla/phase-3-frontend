import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import MovieCard from './MovieCard'

function MoviesList() {
  const [movies, setMovies] = useState([])

  let {director_id} = useParams()

  // useEffect(() => {
  //   fetch(`http://localhost:9292/directors/${director_id}`)
  //   .then(res => res.json())
  //   .then(data => setMovies(data)
  //   )
  // }, [director_id])

  useEffect(() => {
    fetch('http://localhost:9292/movies')
    .then(res => res.json())
    .then(data => setMovies(data)
    )
  }, [])

  
    

  return (
    movies ? movies.map(movie => <MovieCard key={movie.id} movie={movie} />).filter(movie => movie.director_id === director_id) : null
  );
}

export default MoviesList;
