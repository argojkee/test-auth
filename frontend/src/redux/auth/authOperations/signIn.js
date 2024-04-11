import { createAsyncThunk } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { toastSuccess } from 'toastNotification/toastNotification';
import { tokenService } from 'services/axios';

export const signIn = createAsyncThunk(
  'signIn',
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      tokenService.set(user.accessToken);

      const authUser = {
        token: user.accessToken,
        user: {
          fullName: user.displayName,
          email: user.email,
          id: user.uid,
        },
      };
      toastSuccess('Log in successful');
      return authUser;
    } catch (error) {
      tokenService.unset();
      return rejectWithValue('Oops... Something went wrong');
    }
  }
);
