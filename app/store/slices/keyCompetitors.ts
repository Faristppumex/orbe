import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface keyCompetitorsState {
  keyCompetitors: string[];
  loading: boolean;
  error: string | null;
}

const initialState: keyCompetitorsState = {
  keyCompetitors: [],
  loading: false,
  error: null,
};

export const    fetchKeyCompetitors = createAsyncThunk<string[], string>(
  "keyCompetitors/fetch",
  async (symbol, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/combined-report?symbol=${symbol}`
      );
      console.log(symbol);
      console.log(res.json);
      if (!res.ok) {
        return rejectWithValue("failed To fetch KeyCompetitors");
      }
      const data = await res.json();
      console.log("keyCompetitros slice", data);
      return data.keyCompetitors as string[];
    } catch {
      return rejectWithValue("error Occured");
    }
  }
);

const keyCompetitorsSlice = createSlice({
  name: "keyCompetitors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchKeyCompetitors.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchKeyCompetitors.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.loading = false;
        state.keyCompetitors = action.payload;
      }
    );
    builder.addCase(fetchKeyCompetitors.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Unknown error";
    });
  },
});

export default keyCompetitorsSlice.reducer;
