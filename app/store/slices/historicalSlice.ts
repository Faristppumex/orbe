import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type HistoricalEntry = {
  date: string;
  close: number;
};

type HistoricalState = {
  data: HistoricalEntry[];
  loading: boolean;
  error: string | null;
};

const initialState: HistoricalState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchHistorical = createAsyncThunk<
  HistoricalEntry[],
  string // symbol
>("historical/fetchHistorical", async (symbol) => {
  const res = await fetch(
    `http://localhost:5000/api/historical?symbol=${symbol}`
  );
  if (!res.ok) throw new Error("Failed to fetch historical data");
  return (await res.json()) as HistoricalEntry[];
});

const historicalSlice = createSlice({
  name: "historical",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistorical.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHistorical.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchHistorical.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch";
      });
  },
});

export default historicalSlice.reducer;
