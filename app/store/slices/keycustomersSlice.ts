import { createSlice } from "@reduxjs/toolkit";

interface KeyCustomersState {
  data: string[]; // Adjust type as necessary
  loading: boolean;
  error: string | null;
}

const initialState: KeyCustomersState = {
  data: [],
  loading: false,
  error: null,
};

async function fetchKeyCustomers(symbol: string): Promise<string[]> {
  const res = await fetch(
    `http://localhost:5000/api/keycustomers?symbol=${symbol}`
  );
  if (!res.ok) throw new Error("Failed to fetch key customers");

  const json = await res.json();
  return json.data; // Adjust based on your API response structure
}

export const keyCustomersSlice = createSlice({
  name: "keyCustomers",
  initialState,
  reducers: {
    fetchKeyCustomersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchKeyCustomersSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchKeyCustomersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
