import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface SharedIndexState {
  data: Record<string, number[]>; // e.g. { "AAPL": [202.14, ...], ... }
  loading: boolean;
  error: string | null;
}

const initialState: SharedIndexState = {
  data: {},
  loading: false,
  error: null,
};

export const fetchSharedIndex = createAsyncThunk(
  "sharedIndex/fetch",
  async () => {
    const res = await fetch("http://localhost:5000/api/historical-eod");
    if (!res.ok) throw new Error("Failed to fetch shared index data");
    return await res.json(); // { "AAPL": [...], ... }
  }
);

const sharedIndexSlice = createSlice({
  name: "sharedIndex",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSharedIndex.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSharedIndex.fulfilled,
        (state, action: PayloadAction<Record<string, number[]>>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchSharedIndex.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default sharedIndexSlice.reducer;
