import React, { useState } from 'react';

function HogTile({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => setShowDetails(!showDetails);

  return (
    <div className="ui card" onClick={handleClick}>
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <h3 className="header">{hog.name}</h3>
        {showDetails && (
          <div className="description">
            <p><strong>Specialty:</strong> {hog.specialty}</p>
            <p><strong>Weight:</strong> {hog.weight}</p>
            <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
            <p><strong>Highest Medal:</strong> {hog['highest medal achieved']}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HogTile;
