import { createAsyncThunk, ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { api } from '@services/api';

import { UpdateDTO } from '@dtos/UpdateDTO';
import { User } from '@dtos/UserDTO';

import { InitialStateAuth, UpdateFormState } from '@store/auth/types';

const update = createAsyncThunk('auth/update', async (form: UpdateFormState) => {
  const { data } = await api.put<UpdateDTO.Response>(`/users/update/${form.id}`, {
    ...form.data,
  } as UpdateDTO.Request);
  return data;
});

const updateBuilder = (builder: ActionReducerMapBuilder<InitialStateAuth>) => {
  builder
    .addCase(update.pending, (state: InitialStateAuth) => {
      state.isLoading = true;
    })
    .addCase(update.fulfilled, (state: InitialStateAuth, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isEditable = false;
    })
    .addCase(update.rejected, (state: InitialStateAuth, action) => {
      console.log('rejected', action.error);
      state.isLoading = false;
      state.isEditable = false;
    });
};

export { update, updateBuilder };
