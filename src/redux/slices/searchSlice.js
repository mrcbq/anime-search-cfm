import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/fetchdata';


export const fetchAnimeData = createAsyncThunk('search/fetchAnime', async (query) => {
  const JIKAN_API_URL = `https://api.jikan.moe/v4/anime?q=${query}`
  const data = await fetchData(JIKAN_API_URL)
  return data
})

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnimeData.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResult = action.payload;
      })
      .addCase(fetchAnimeData.rejected, (state) => {
        state.loading = false;
        state.searchResult = [];
      });
  },
});

export const { setQuery, setSearchResult, setLoading } = searchSlice.actions;

export const selectQuery = (state) => state.search.query;
export const selectSearchResult = (state) => state.search.searchResult;
export const selectLoading = (state) => state.search.loading;

export default searchSlice.reducer;
