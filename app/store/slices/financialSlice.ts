import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface FinancialData {
  [section: string]: [string, number[]][];
}

interface FinancialsState {
  selectedTab: "Quarterly" | "Yearly";
  headers: string[];
  data: FinancialData;
  loading: boolean;
  error: string | null;
}

const initialState: FinancialsState = {
  selectedTab: "Yearly",
  headers: [],
  data: {},
  loading: false,
  error: null,
};

// Async thunk to fetch financials
export const fetchFinancials = createAsyncThunk<
  { headers: string[]; data: FinancialData },
  string
>("financials/fetchFinancials", async (symbol) => {
  const res = await fetch(
    `http://localhost:5000/api/financial?symbol=${symbol}`
  );
  if (!res.ok) throw new Error("Failed to fetch financials");
  const json = await res.json();
  return {
    headers: json.headers,
    data: json.data,
  };
});

const financialsSlice = createSlice({
  name: "financials",
  initialState,
  reducers: {
    setSelectedTab: (state, action: PayloadAction<"Quarterly" | "Yearly">) => {
      state.selectedTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFinancials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFinancials.fulfilled, (state, action) => {
        state.loading = false;
        state.headers = action.payload.headers;
        state.data = action.payload.data;
      })
      .addCase(fetchFinancials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export const { setSelectedTab } = financialsSlice.actions;
export default financialsSlice.reducer;
