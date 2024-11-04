import React from 'react';
import HogTile from './HogTile';

function HogList({ hogs }) {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <div key={hog.name} className="ui eight wide column">
          <HogTile hog={hog} />
        </div>
      ))}
    </div>
  );
}

export default HogList;
