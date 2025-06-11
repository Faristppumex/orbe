import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface PressReleaseState {
  items: string[];
  loading: boolean;
  error: string | null;
}

const initialState: PressReleaseState = {
  items: [],
  loading: false,
  error: null,
};

// Example async thunk for fetching press releases
export const fetchPressReleases = createAsyncThunk(
  "pressRelease/fetch",
  async (symbol: string) => {
    const res = await fetch(
      `http://localhost:5000/api/press-release?symbol=${symbol}`
    );
    if (!res.ok) throw new Error("Failed to fetch press releases");
    return await res.json(); // Expecting string[]
  }
);

const pressReleaseSlice = createSlice({
  name: "pressRelease",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPressReleases.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPressReleases.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchPressReleases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default pressReleaseSlice.reducer;
