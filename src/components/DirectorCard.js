import React from 'react';

function DirectorCard({ director }) {
 return ( <div className="card" style={{display:'inline-block'}}>
     <img className='card-img-top' src={director.pic} alt={director.name} />
    <div className="card-body">
      <h5>{director.name}</h5>
      {/* conditional p goes here, className='card-text, show age, maybe number movies made?*/}
      <button className="btn btn-primary">Details</button>
    </div>
  </div>);
}

export default DirectorCard;
