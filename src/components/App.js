import React, { useState } from 'react';
import porkers from './porkers_data'
import Nav from './Nav';
import HogList from './HogList';
import FilterControls from './FilterControls';

function App() {
  const [hogs, setHogs] = useState(porkers);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortType, setSortType] = useState('');

  const filteredHogs = hogs
    .filter(hog => (showGreasedOnly ? hog.greased : true))
    .sort((a, b) => {
      if (sortType === 'name') return a.name.localeCompare(b.name);
      if (sortType === 'weight') return a.weight - b.weight;
      return 0;
    });

  const handleGreasedToggle = () => setShowGreasedOnly(!showGreasedOnly);
  const handleSortChange = (sortOption) => setSortType(sortOption);

  return (
    <div className="App">
      <Nav />
      <FilterControls
        onGreasedToggle={handleGreasedToggle}
        onSortChange={handleSortChange}
      />
      <HogList hogs={filteredHogs} />
    </div>
  );
}

export default App;
