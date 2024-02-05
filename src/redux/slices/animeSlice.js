import { createSlice } from '@reduxjs/toolkit';

export const animeSlice = createSlice({
  name: 'anime',
  initialState: {
    seasons: [],
    averageScore: null,
  },
  reducers: {
    setSeasons: (state, action) => {
      state.seasons = action.payload;
    },
    setAverageScore: (state, action) => {
      state.averageScore = action.payload;
    },
  },
});

export const { setSeasons, setAverageScore } = animeSlice.actions;

export const selectSeasons = (state) => state.anime.seasons;
export const selectAverageScore = (state) => state.anime.averageScore;

export default animeSlice.reducer;
