import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import animeSlice from './slices/animeSlice';

const store = configureStore({
  reducer: {
    search: searchSlice,
    anime: animeSlice,
  },
});

export default store;
