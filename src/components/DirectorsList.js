import React, {useState, useEffect} from 'react';
import DirectorCard from './DirectorCard'

function DirectorsList() {
const [directors, setDirectors] = useState([])

useEffect(() => {
  fetch('http://localhost:9292/directors').then(res => res.json()).then(data => setDirectors(data))
})

  return directors ? directors.map((director) => <DirectorCard key={director.id} director={director} />) : null;
}

export default DirectorsList;
