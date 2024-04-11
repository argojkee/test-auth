import { createSlice } from '@reduxjs/toolkit';
import { signIn } from './authOperations/signIn';
import { fetchCurrentUser } from './authOperations/fetchCurrentUser';
import { tokenService } from 'services/axios';

const initialState = {
  user: {
    fullName: null,
    email: null,
    id: null,
  },
  token: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      tokenService.unset();
    },
  },

  extraReducers: builder => {
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = { ...payload.user };
        state.token = payload.token;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = initialState.isLoading;
        state.token = initialState.token;
        state.user = initialState.user;
      });
  },
});
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
