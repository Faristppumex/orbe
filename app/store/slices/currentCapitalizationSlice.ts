import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface CapitalizationMetrics {
  totalDebt: number;
  cashAndCashEquivalents: number;
  minorityInterest: number;
  weightedAverageShsOut: number;
  weightedAverageShsOutDil: number;
}

export interface CapitalizationApiItem {
  date: string;
  fiscalyear: number;
  fiscalquarter: number;
  period: string;
  metrics: CapitalizationMetrics;
}

interface CurrentCapitalizationState {
  data: CapitalizationApiItem[];
  loading: boolean;
  error: string | null;
}

const initialState: CurrentCapitalizationState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchCapitalization = createAsyncThunk<
  CapitalizationApiItem[],
  string,
  { rejectValue: string }
>("currentCapitalization/fetch", async (symbol, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/capitalization?symbol=${symbol}`
    );
    if (!res.ok) {
      return rejectWithValue("Failed to fetch capitalization data");
    }
    const data = await res.json();
    return data as CapitalizationApiItem[];
  } catch {
    return rejectWithValue("Network error");
  }
});

const currentCapitalizationSlice = createSlice({
  name: "currentCapitalization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCapitalization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCapitalization.fulfilled,
        (state, action: PayloadAction<CapitalizationApiItem[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchCapitalization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
      });
  },
});

export default currentCapitalizationSlice.reducer;
