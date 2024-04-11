import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'services/axios';
import { tokenService } from 'services/axios';

export const fetchCurrentUser = createAsyncThunk(
  'current',
  async (_, { getState, rejectWithValue }) => {
    const { token: currentToken } = getState().auth;

    if (currentToken === null) {
      return rejectWithValue('Without token');
    }

    tokenService.set(currentToken);

    try {
      const { data } = await axios.get(`/api/current`);

      return data;
    } catch (error) {
      return rejectWithValue('Not valid email or password. Please, try again');
    }
  }
);
