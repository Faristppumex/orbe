import { createSlice } from "@reduxjs/toolkit";

interface ConsensusTableState {
  headers: string[];
  rows: string[][];
}

const initialState: ConsensusTableState = {
  headers: [
    "",
    "Actuals",
    "Consensus(Medium)",
    "Beat/Miss%",
    "Guide low",
    "Guide High",
    "Beat/Miss %",
  ],
  rows: [
    [
      "Revenue",
      "$ 14,541.0",
      "$ 14,390.5",
      "0.8%",
      "$ 16,349",
      "$ 16,400.0",
      "2.0%",
    ],
    [
      "Gross Income",
      "$  7,670.0",
      "$ 7,660.0",
      "0.2%",
      "$44.0",
      "$45.2",
      "1.4%",
    ],
    ["Operating Income", "$15,9", "$15,8", "0.6%", "$15.5", "$16.2", "3%"],
    ["EBITDA", "8.8x", "8.6x", "9.1x", "10.4x", "11.6x", "3%"],
    ["Free Cash Flow", "5.8x", "5.7x", "6.1x", "6.2x", "4.8x", "3%"],
    ["Net Income", "8.1x", "8.0x", "8.3x", "9.3x", "9.8x", "1%"],
    ["Earning Per Share", "0.24x", "0.21x", "0.15x", "0.13x", "0.09x", "5%"],
  ],
};

const consensusTableSlice = createSlice({
  name: "consensusTable",
  initialState,
  reducers: {},
});

export default consensusTableSlice.reducer;
