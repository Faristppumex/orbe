import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export type CompanyProfile = {
  symbol: string;
  price: number;
  range: string;
  change: number;
  changePercentage: number;
  companyName: string;
  currency: string;
  exchangeFullName: string;
  exchange: string;
  industry: string;
  website: string;
  description: string;
  ceo: string;
  sector: string;
  country: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  image: string;
  ipoDate: string;
  defaultImage: boolean;
};

interface CompanyProfileState {
  data: CompanyProfile | null;
  loading: boolean;
  error: string | null;
}

const initialState: CompanyProfileState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchCompanyProfile = createAsyncThunk(
  "companyProfile/fetchCompanyProfile",
  async () => {
    const res = await fetch("/api/CompanyProfile");
    if (!res.ok) throw new Error("Failed to fetch company profile");
    return await res.json();
  }
);

const companyProfileSlice = createSlice({
  name: "companyProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCompanyProfile.fulfilled,
        (state, action: PayloadAction<CompanyProfile>) => {
          state.data = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchCompanyProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export default companyProfileSlice.reducer;
