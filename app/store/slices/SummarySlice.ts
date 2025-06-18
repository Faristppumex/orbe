import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface SummaryState {
  transcripts: string[]; // Array of content strings
  loading: boolean;
  error: string | null;
}

const initialState: SummaryState = {
  transcripts: [],
  loading: false,
  error: null,
};

export const fetchEarningCallTranscript = createAsyncThunk<
  string[], // Only the content strings
  { symbol: string; year: number; quarter: number },
  { rejectValue: string }
>(
  "summary/fetchEarningCallTranscript",
  async ({ symbol, year, quarter }, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/earning-call-transcript?symbol=${symbol}&year=${year}&quarter=${quarter}`
      );
      if (!res.ok) {
        return rejectWithValue("Failed to fetch transcript");
      }
      const data = await res.json();
      // Extract only the content field from each object
      return (data as { content: string }[]).map((item) => item.content);
    } catch {
      return rejectWithValue("Network error");
    }
  }
);

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEarningCallTranscript.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchEarningCallTranscript.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.loading = false;
          state.transcripts = action.payload;
        }
      )
      .addCase(fetchEarningCallTranscript.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
      });
  },
});

export default summarySlice.reducer;
