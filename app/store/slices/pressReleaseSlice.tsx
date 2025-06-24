import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface CombinedReportResponse {
  companyOverview: string[];
  pressReleases: string[];
  keyCompetitors: string[];
  keyCustomers: string[];
}

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

// Async thunk for fetching press releases
export const fetchPressReleases = createAsyncThunk<
  string[], // Return type
  string, // Argument type (symbol)
  { rejectValue: string } // Type for thunkAPI.rejectWithValue
>("pressRelease/fetch", async (symbol, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/combined-report?symbols=${symbol}`
    );
    if (!res.ok) {
      const errorData = await res.json();
      return rejectWithValue(
        errorData.message || "Failed to fetch press releases"
      );
    }
    const data: CombinedReportResponse = await res.json();
    return data.pressReleases; // Return only the pressReleases array
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message || "An unknown error occurred");
    } else {
      return rejectWithValue("An unknown error occured");
    }
  }
});

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
          state.items = action.payload; // Payload is already the pressReleaseSummary array
        }
      )
      .addCase(fetchPressReleases.rejected, (state, action) => {
        state.loading = false;
        state.error =
          typeof action.payload === "string" ? action.payload : "Unknown error";
      });
  },
});

export default pressReleaseSlice.reducer;
