// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SearchButton = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const history = useHistory(); // Hook for programmatic navigation

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(storedHistory);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const updatedHistory = [...searchHistory, searchTerm];
      setSearchHistory(updatedHistory);
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));

      console.log(`Searching for: ${searchTerm}`);

      history.push(`/Pages/Search`);
    }
  };

  return (
    <nav className="navbar bg-gray-800 p-4">
      <div className="flex items-center">
        <input
          type="text"
          className="search-input p-2 border border-white border-r-0 rounded-l"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="search-button p-2 border border-white border-l-0 rounded-r bg-opacity-20 hover:bg-opacity-40 transition-all"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default SearchButton;
