import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FinancialData {
  [section: string]: [string, number[]][];
}

interface FinancialsState {
  selectedTab: "Quarterly" | "Yearly";
  headers: string[];
  data: FinancialData;
}

const initialState: FinancialsState = {
  selectedTab: "Yearly",
  headers: ["", "LTM", "Dec 24", "Dec 23", "Dec 22", "Dec 21"],
  data: {
    "Income Statement": [
      ["Sales", [62753.0, 62753.0, 61860.0, 60530.0, 57350.0]],
      ["Gross Income", [181.38, 180.68, 169.15, 170.78, 152.84]],
      ["EBIT", [7616.0, 7509.0, 10297.0, 2372.0, 5992.0]],
      ["EBITDA", [12329.0, 12176.0, 14693.0, 7174.0, 12409.0]],
      ["Net Income", [5473.0, 6023.0, 7502.0, 1639.0, 5745.0]],
    ],
    "Balance Sheet": [
      [
        "Cash & Short-Term Investments",
        [17465, 14591.0, 13441.0, 8738.0, 7250.0],
      ],
      ["Total Assets", [145667.0, 137175.0, 135241.0, 127243.0, 132001.0]],
      ["Total Debt", [66853.0, 58396.0, 59935.0, 54013.0, 55139.0]],
      ["Net Debt", [49370.0, 43805.0, 43479.0, 43063.0, 45053.0]],
      ["Total Liabilities", [118715.0, 109763.0, 112628.0, 153980.0, 125480.0]],
      [
        "Total Shareholders' Equity",
        [26952.0, 27395.0, 22533.0, 21944.0, 18901.0],
      ],
    ],
    "Cash Flow": [
      [
        "Net Operating Cash Flow",
        [13647.0, 13445.0, 13931.0, 10435.0, 12796.0],
      ],
      ["Capital Expenditures", [-1707.0, -1685.0, -1810.0, -1972.0, -2788.0]],
      [
        "Net Investing Cash Flow",
        [-13706.0, -4937.0, -7070.0, -4202.0, -5975.0],
      ],
      [
        "Net Financing Cash Flow",
        [-3513.0, -7079.0, -1769.0, -4958.0, -13354.0],
      ],
      ["Free Cash Flow", [11940.0, 10810.0, 12121.0, 8463.0, 10028.0]],
    ],
  },
};

const financialsSlice = createSlice({
  name: "financials",
  initialState,
  reducers: {
    setSelectedTab: (state, action: PayloadAction<"Quarterly" | "Yearly">) => {
      state.selectedTab = action.payload;
    },
  },
});

export const { setSelectedTab } = financialsSlice.actions;
export default financialsSlice.reducer;
