import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  message: '',
};

export const fetchMessage = createAsyncThunk('message/fetchMessage', async () => {
  const response = await fetch('http://localhost:3001/api/greeting');
  const data = await response.json();
  return data;
});

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.fulfilled, (state, action) => ({
        ...state,
        message: action.payload.text,
      }));
  },
});

export default messageSlice.reducer;
