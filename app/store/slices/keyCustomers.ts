  import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface KeyCustomersState {
  keyCustomers: string[];
  loading: boolean;
  error: string | null;
}

const initialState: KeyCustomersState = {
  keyCustomers: [],
  loading: false,
  error: null,
};

export const fetchKeyCustomers = createAsyncThunk<string[], string>(
  "keyCustomers/fetch",
  async (symbol, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/combined-report?symbol=${symbol}`
      );
      console.log(symbol);
      console.log(res.json);
      if (!res.ok) {
        return rejectWithValue("failed To fetch keyCustomers");
      }
      const data = await res.json();
      console.log("keyCustomers slice", data);
      return data.keyCustomers as string[];
    } catch {
      return rejectWithValue("error Occured");
    }
  }
);

const keyCustomersSlice = createSlice({
  name: "keyCustomers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchKeyCustomers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchKeyCustomers.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.loading = false;
        state.keyCustomers = action.payload;
      }
    );
    builder.addCase(fetchKeyCustomers.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || "Unknown error";
    });
  },
});

export default keyCustomersSlice.reducer;
