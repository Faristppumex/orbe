import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Competitor {
  name: string;
  symbol: string;
}

interface CompanyMarketState {
  keyCustomers: string[];
  keyCompetitors: Competitor[];
  loading: boolean;
  error: string | null;
}

const initialState: CompanyMarketState = {
  keyCustomers: [],
  keyCompetitors: [],
  loading: false,
  error: null,
};

// Helper to parse flat array to array of objects
function parseCompetitors(arr: string[]): Competitor[] {
  const result: Competitor[] = [];
  for (let i = 0; i < arr.length; i += 4) {
    // Expecting: ["name", "Google (Alphabet)", "symbol", "GOOGL", ...]
    if (
      arr[i] === "name" &&
      typeof arr[i + 1] === "string" &&
      arr[i + 2] === "symbol" &&
      typeof arr[i + 3] === "string"
    ) {
      result.push({ name: arr[i + 1], symbol: arr[i + 3] });
    }
  }
  console.log("result ", result);
  return result;
}

export const fetchCompanyMarketData = createAsyncThunk<
  { keyCustomers: string[]; keyCompetitors: Competitor[] },
  string,
  { rejectValue: string }
>("companyMarket/fetch", async (symbol, { rejectWithValue }) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/combined-report?symbol=${symbol}`
    );
    if (!res.ok) {
      const errorData = await res.json();
      return rejectWithValue(errorData.message || "Failed to fetch data");
    }
    const data = await res.json();
    return {
      keyCustomers: data.keyCustomers || [],
      keyCompetitors: Array.isArray(data.keyCompetitors)
        ? parseCompetitors(data.keyCompetitors)
        : [],
    };
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Unknown error");
  }
});

const companyMarketSlice = createSlice({
  name: "companyMarket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyMarketData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCompanyMarketData.fulfilled,
        (
          state,
          action: PayloadAction<{
            keyCustomers: string[];
            keyCompetitors: Competitor[];
          }>
        ) => {
          state.loading = false;
          state.keyCustomers = action.payload.keyCustomers;
          state.keyCompetitors = action.payload.keyCompetitors;
        }
      )
      .addCase(fetchCompanyMarketData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
      });
  },
});

export default companyMarketSlice.reducer;
