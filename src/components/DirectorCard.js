import React from 'react';

function DirectorCard({ director }) {
  <div className="card">
    {/* image goes here, className='card-img-top' */}
    <div className="card-body">
      <h5>{director.name}</h5>
      {/* conditional p goes here, className='card-text, show age, maybe number movies made?*/}
      <button className="btn btn-primary">Details</button>
    </div>
  </div>;
}

export default DirectorCard;
