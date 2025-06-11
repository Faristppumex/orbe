import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface ValuationRatioState {
  headers: string[];
  rows: string[][];
  loading: boolean;
  error: string | null;
}

const initialState: ValuationRatioState = {
  headers: [],
  rows: [],
  loading: false,
  error: null,
};

export const fetchValuationRatios = createAsyncThunk(
  "valuationRatios/fetch",
  async (symbol: string) => {
    const res = await fetch(
      `http://localhost:5000/api/valuation?symbol=${symbol}`
    );
    if (!res.ok) throw new Error("Failed to fetch valuation ratios");
    return await res.json();
  }
);

const valuationRatioSlice = createSlice({
  name: "valuationRatios",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchValuationRatios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchValuationRatios.fulfilled,
        (
          state,
          action: PayloadAction<{ headers: string[]; rows: string[][] }>
        ) => {
          state.loading = false;
          state.headers = action.payload.headers;
          state.rows = action.payload.rows;
        }
      )
      .addCase(fetchValuationRatios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default valuationRatioSlice.reducer;
