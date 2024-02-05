// SearchBar.js
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {

    JIKAN_API_URL = `https://api.jikan.moe/v4/anime?q=${query}`
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for anime title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
