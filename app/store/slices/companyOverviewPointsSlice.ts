import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Async thunk to fetch company overview points for a symbol
export const fetchCompanyOverviewPoints = createAsyncThunk(
  "companyOverviewPoints/fetch",
  async ({ symbol, ai }: { symbol: string; ai?: boolean }) => {
    const params = new URLSearchParams({
      symbol,
      ...(ai ? { ai: "true" } : {}),
    });
    const res = await fetch(
      `http://localhost:5000/api/company-overview?${params.toString()}`
    );
    if (!res.ok) throw new Error("Failed to fetch company overview points");

    console.log("hit on front");
    // console.log(res.json());
    return await res.json(); // expecting string[]
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
          state.items = action.payload;
        }
      )
      .addCase(fetchCompanyOverviewPoints.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default companyOverviewPointsSlice.reducer;
