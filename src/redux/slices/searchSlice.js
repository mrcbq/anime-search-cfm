import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    searchResult: [],
    loading: false,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setQuery, setSearchResult, setLoading } = searchSlice.actions;

export const selectQuery = (state) => state.search.query;
export const selectSearchResult = (state) => state.search.searchResult;
export const selectLoading = (state) => state.search.loading;

export default searchSlice.reducer;
