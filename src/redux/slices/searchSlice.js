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
    dataLoaded: false,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAnimeData.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResult = action.payload;
        state.dataLoaded = true
      })
      .addCase(fetchAnimeData.rejected, (state) => {
        state.loading = false;
        state.searchResult = [];
      });
  },
});

export const { setQuery } = searchSlice.actions;

export default searchSlice.reducer;
