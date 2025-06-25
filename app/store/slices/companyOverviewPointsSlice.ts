import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface CombinedReportResponse {
  companyOverview: string[];
  pressRelease: string[];
  keyCustomers: string[];
  keyCompetitors: string[];
}

// Async thunk to fetch company overview points
export const fetchCompanyOverviewPoints = createAsyncThunk<
  string[], // Return type of the thunk's payload
  { symbol: string; ai?: boolean }, // Arguments type
  { rejectValue: string } // Type for thunkAPI.rejectWithValue
>(
  "companyOverviewPoints/fetch",
  async ({ symbol, ai }, { rejectWithValue }) => {
    const params = new URLSearchParams({
      symbol,
      ...(ai ? { ai: "true" } : {}),
    });
    try {
      const res = await fetch(
        `http://localhost:5000/api/combined-report?${params.toString()}`
      );
      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(
          errorData.message || "Failed to fetch company overview points"
        );
      }
      const data: CombinedReportResponse = await res.json();
      return data.companyOverview; // Return only the companyOverview part
    } catch {
      return rejectWithValue("An unknown error occurred");
    }
  }
);

interface CompanyOverviewPointsState {
  items: string[];
  loading: boolean;
  error: string | null;
}

const initialState: CompanyOverviewPointsState = {
  items: [],
  loading: false,
  error: null,
};

const companyOverviewPointsSlice = createSlice({
  name: "companyOverviewPoints",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyOverviewPoints.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCompanyOverviewPoints.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.loading = false;
          state.items = action.payload; // Payload is already the companyOverview array
        }
      )
      .addCase(fetchCompanyOverviewPoints.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
      });
  },
});

export default companyOverviewPointsSlice.reducer;
