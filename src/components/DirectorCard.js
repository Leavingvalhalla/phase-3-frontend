import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function DirectorCard({ director }) {
const [details, setDetails] = useState(false)

function handleDetailClick() {
  setDetails(details => !details)
}

 return ( <div className="card" style={{display:'inline-block'}}>
     <img className='card-img-top' src={director.pic} alt={director.name} />
    <div className="card-body">
      <h5>{director.name}</h5>
      {details ? 
      <div>
        <p className='card-text'>Age: {director.age}</p>
        <Link to={`../movies/${director.id}`} className='btn btn-secondary'>See Movies</Link>
        </div> : null}
        
      <button onClick={handleDetailClick} className="btn btn-primary">Details</button>
    </div>
  </div>);
}

export default DirectorCard;
