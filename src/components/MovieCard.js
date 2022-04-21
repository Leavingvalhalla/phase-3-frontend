function MovieCard({movie}) {
  return ( <div className="card" style={{display:'inline-block'}}>
  <img src={movie.poster} alt={movie.name} className='card-img-top' />
  <div className="card-body">
    <h5>{movie.name}</h5>
    {/* conditional p goes here, className='card-text, show age, maybe number movies made?*/}
    <button className="btn btn-primary">Details</button>
  </div>
</div>);
}

export default MovieCard;
