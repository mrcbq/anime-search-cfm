import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnimeData, setQuery } from '../redux/slices/searchSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [localQuery, setLocalQuery] = useState('');
  const query = useSelector((state) => state.search.query);

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(setQuery(localQuery))
  };

  useEffect(() => {
    if (query) {
      dispatch(fetchAnimeData(query));
    }
 }, [dispatch, query]); 

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Naruto, Attack on Titan..."
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
