import { createSlice } from "@reduxjs/toolkit";

export interface CapitalizationPoint {
  title: string;
  price: string;
  priority: string;
}

interface CurrentCapitalizationState {
  points: CapitalizationPoint[];
}


const initialState: CurrentCapitalizationState = {
  points: [
    {
      title: "Basic Shares Outstanding",
      price: "$10000",
      priority: "",
    },
    {
      title: "Market Capitalization",
      price: "$10000",
      priority: "bold with background",
    },
    {
      title: "Fully Diluted Shares Outstanding",
      price: "$10000",
      priority: "",
    },
    {
      title: "Fully Diluted Market Cap",
      price: "$10000",
      priority: "bold with background",
    },
    {
      title: "Consolidated Debt",
      price: "$10000",
      priority: "",
    },
    {
      title: "Cash and Equivalents",
      price: "$10000",
      priority: "normal",
    },
    {
      title: "Non Controlling Interest",
      price: "$10000",
      priority: "normal",
    },
    {
      title: "Enterprise Value",
      price: "$10000",
      priority: "bold with background",
    },
  ],
};

const currentCapitalizationSlice = createSlice({
  name: "currentCapitalization",
  initialState,
  reducers: {},
});

export default currentCapitalizationSlice.reducer;
