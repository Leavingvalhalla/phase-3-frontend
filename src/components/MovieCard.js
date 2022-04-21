import {useState} from 'react'

function MovieCard({movie}) {
const [showDetails, setShowDetails] = useState(false)

  function handleDetailClick() {
    setShowDetails(showDetails => !showDetails)
  }

  return ( <div className="card" style={{display:'inline-block'}}>
  <img src={movie.poster} alt={movie.name} className='card-img-top' />
  <div className="card-body">
    <h5>{movie.name}</h5>
    {showDetails ? <div>
      <p className='card-text movie-details'>Released: {movie.year}</p>
      <p className='card-text movie-details'>Rotten Tomato Score: <strong>{movie.RT_score}% </strong></p>
      </div>
      : null}
    <button onClick={handleDetailClick} className="btn btn-primary">{showDetails ? 'Hide': 'Details'}</button>
  </div>
</div>);
}

export default MovieCard;
