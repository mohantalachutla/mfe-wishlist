import { createSlice } from '@reduxjs/toolkit';
// import { Buffer } from 'buffer';

const initialState = {
  wishlists: [],
};
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: initialState,
  reducers: {
    wishlistSuccess: (state, { payload = [] }) => {
      state.wishlists = payload;
    },
    wishlistFailure: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initialState;
    },
  },
});

export default wishlistSlice.reducer;
export const { wishlistSuccess, wishlistFailure } = wishlistSlice.actions;
