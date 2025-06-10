import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type NewsItem = {
  symbol: string;
  publishedDate: string;
  publisher: string;
  title: string;
  image: string;
  site: string;
  text: string;
  url: string;
};

interface NewsState {
  items: NewsItem[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  items: [],
  loading: false,
  error: null,
};

// Async thunk to fetch news
export const fetchNews = createAsyncThunk<NewsItem[], string>(
  "news/fetchNews",
  async (symbol) => {
    const res = await fetch(
      `http://localhost:5000/api/news?symbol=${symbol}&limit=5`
    );
    if (!res.ok) throw new Error("Failed to fetch news");

    return await res.json(); // Expecting an array of news objects
  }
);

const newsSlice = createSlice({
  name: "News",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsItem[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchNews.fulfilled,
        (state, action: PayloadAction<NewsItem[]>) => {
          state.items = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown error";
      });
  },
});

export const { setNews } = newsSlice.actions;
export default newsSlice.reducer;
