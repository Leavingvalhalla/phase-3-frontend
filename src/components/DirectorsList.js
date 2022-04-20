import React from 'react';

function DirectorsList() {
  return directors.map((director) => <DirectorCard director={director} />);
}

export default DirectorsList;
