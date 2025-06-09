"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/lib/hooks";
import { fetchCompanyProfile } from "@/app/store/slices/companyProfileSlice";
import CompanyProfile from "../public-market/CompanyProfile";

type Stock = {
  symbol: string;
  name: string;
};

export default function Search() {
  const dispatch = useAppDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<Stock[]>([]);
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setSearchInput(query);
    if (query.length < 1) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/searchStocks?query=${query}`);
      const data = await res.json();
      setSearchResults(data); // [{symbol: "AAPL", name: "Apple Inc."}, ...]
    } catch {
      setSearchResults([]);
    }
    setLoading(false);
  };

  const handleSelect = (symbol: string) => {
    setSelectedSymbol(symbol);
    setShowSearch(false);
    setSearchInput("");
    setSearchResults([]);
    dispatch(fetchCompanyProfile(symbol));
  };

  return (
    <div className="relative">
      <div
        className="flex my-3 w-40 h-10 px-3 py-2 rounded-3xl text-sm space-x-1 gap-1 items-center cursor-pointer transition-colors"
        style={{ backgroundColor: "#242E2C" }}
        onClick={() => setShowSearch((v) => !v)}
      >
        <Image src="/Search.svg" alt="Search" width={24} height={24} />
        <span style={{ color: "#BBF49C" }}>Search</span>
      </div>
      {showSearch && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 bg-opacity-30"
          onClick={() => setShowSearch(false)}
        >
          <div
            className="bg-white border rounded shadow-lg w-100 p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              className="border px-2 py-1 rounded w-full mb-2"
              type="text"
              value={searchInput}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search stock symbol..."
              autoFocus
            />
            {loading && <div className="text-xs text-gray-400">Loading...</div>}
            <div className="max-h-48 overflow-y-auto">
              {searchResults.map((stock) => (
                <div
                  key={stock.symbol}
                  className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
                  onClick={() => handleSelect(stock.symbol)}
                >
                  <span className="font-semibold">{stock.symbol}</span> -{" "}
                  {stock.name}
                </div>
              ))}
              {!loading && searchInput && searchResults.length === 0 && (
                <div className="text-xs text-gray-400 px-3 py-2">
                  No results found.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Show the selected company profile below the search bar */}
      {selectedSymbol && (
        <div className="mt-4">
          <CompanyProfile symbol={selectedSymbol} />
        </div>
      )}
    </div>
  );
}
